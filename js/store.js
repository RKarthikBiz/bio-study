/* Progress storage + spaced repetition (Leitner boxes with day intervals). */
(function () {
  const KEY = "kopi-field-notes-v1";
  const DAY = 86400000;
  // box -> days until next review. Box 0 = never seen.
  const INTERVALS = [0, 0, 1, 3, 7, 14, 30];
  const MASTER_BOX = 4; // box >= 4 counts as "mastered"

  const blank = () => ({
    items: {},            // id -> {box, due, seen, right, wrong, last}
    lessons: {},          // lessonId -> timestamp read
    xp: 0,
    days: {},             // "YYYY-MM-DD" -> {xp, answered}
    exams: [],            // {t, score, total, secs, byModule}
    settings: { goal: 60, theme: "auto", sound: true, examLen: 20, examMins: 20 },
    badges: {},
    seenSpecies: {},
  });

  let S;
  try { S = Object.assign(blank(), JSON.parse(localStorage.getItem(KEY) || "{}")); }
  catch (e) { S = blank(); }
  S.settings = Object.assign(blank().settings, S.settings);

  let saveTimer;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }, 150);
  }

  const today = (t = Date.now()) => {
    const d = new Date(t);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  };
  // due = start of the local day N days from now, so "1 day" means "tomorrow", not "in exactly 24h"
  function dueIn(days) {
    if (!days) return Date.now();
    const d = new Date(); d.setHours(0, 0, 0, 0);
    return d.getTime() + days * DAY;
  }

  function item(id) { return S.items[id] || { box: 0, due: 0, seen: 0, right: 0, wrong: 0, last: 0 }; }

  // grade: 0 again, 1 hard, 2 good, 3 easy
  function grade(id, g) {
    const it = item(id);
    it.seen++; it.last = Date.now();
    if (g === 0) { it.wrong++; it.box = 1; }
    else {
      it.right++;
      if (g === 1) it.box = Math.max(1, it.box);
      else it.box = Math.min(INTERVALS.length - 1, Math.max(1, it.box) + (g === 3 ? 2 : 1));
    }
    it.due = dueIn(INTERVALS[it.box]);
    S.items[id] = it;
    addXP(g === 0 ? 2 : 10, true);
    save();
    return it;
  }

  function addXP(n, answered) {
    S.xp += n;
    const d = (S.days[today()] ||= { xp: 0, answered: 0 });
    d.xp += n; if (answered) d.answered++;
    save();
  }

  function readLesson(id) {
    if (!S.lessons[id]) { S.lessons[id] = Date.now(); addXP(5); }
    save();
  }

  function streak() {
    let n = 0, t = Date.now();
    if (!S.days[today(t)]) t -= DAY; // today not started yet: streak still alive from yesterday
    while (S.days[today(t)]) { n++; t -= DAY; }
    return n;
  }

  const LEVELS = [
    [0, "Seedling", "🌱"], [150, "Sprout", "🌿"], [400, "Sapling", "🪴"], [800, "Shrub", "🌳"],
    [1400, "Forest Explorer", "🧭"], [2200, "Field Naturalist", "🔭"], [3200, "Nature Guide", "🎒"],
    [4500, "Rainforest Ranger", "🦜"], [6500, "Biodiversity Champion", "🏆"],
  ];
  function level() {
    let i = 0; while (i + 1 < LEVELS.length && S.xp >= LEVELS[i + 1][0]) i++;
    const [base, name, icon] = LEVELS[i];
    const next = LEVELS[i + 1];
    return { n: i + 1, name, icon, base, next: next ? next[0] : null, nextName: next ? next[1] : null,
      pct: next ? Math.round(((S.xp - base) / (next[0] - base)) * 100) : 100 };
  }

  window.Store = {
    get state() { return S; },
    save, item, grade, addXP, readLesson, streak, level, today, MASTER_BOX, DAY,
    isDue: (id) => { const it = S.items[id]; return !!it && it.box > 0 && it.due <= Date.now(); },
    mastered: (id) => item(id).box >= MASTER_BOX,
    todayXP: () => (S.days[today()] || { xp: 0 }).xp,
    reset() { S = blank(); try { localStorage.removeItem(KEY); } catch (e) {} },
    export: () => JSON.stringify(S),
    import(json) { const o = JSON.parse(json); if (!o || typeof o !== "object" || !o.items) throw new Error("Not a progress file"); S = Object.assign(blank(), o); save(); },
  };
})();
