/* Builds the study registry from data/modules/*.js: lessons, flashcards and questions
   (hand-written ones plus ones generated from each module's species table). */
(function () {
  // bonus (non-examined) modules go last
  const MODS = (window.MODULES || []).slice().sort((a, b) => (a.bonus ? 1 : 0) - (b.bonus ? 1 : 0));
  const STATUS_NAMES = {
    CR: "Critically Endangered", EN: "Endangered", VU: "Vulnerable", NT: "Near Threatened",
    LC: "Least Concern", DD: "Data Deficient", NEx: "Nationally Extinct", NA: "Not native / not assessed",
  };
  const items = {};     // id -> card or question
  const species = [];   // all species with module ref
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const spName = (s) => `${s.common}${s.sci && s.sci !== s.common ? ` (${s.sci})` : ""}`;
  const stLabel = (st) => (st === "NA" ? "Exotic" : st);
  const imgPath = (s) => s.img === false ? null : `img/sp/${s.img || s.id}.jpg`;

  MODS.forEach((m) => (m.species || []).forEach((s) => species.push(Object.assign(s, { module: m.id }))));

  function others(s, pool, key) {
    const seen = new Set([String(s[key])]);
    return shuffle(pool).filter((o) => { const v = String(o[key]); if (!o[key] || seen.has(v)) return false; seen.add(v); return true; });
  }

  // makes a 4-option single-answer question where option 0 is the right one before shuffling
  function q4(id, m, q, right, wrongs, extra) {
    if (wrongs.length < 2) return null;
    return Object.assign({ id, kind: "q", module: m.id, q, options: [right, ...wrongs.slice(0, 3)], answer: [0], auto: true }, extra);
  }

  function generate(m) {
    const out = [];
    const local = m.species || [];
    local.forEach((s) => {
      const img = imgPath(s);
      const sameMod = local.filter((o) => o !== s);
      const pool = sameMod.length >= 3 ? sameMod : sameMod.concat(species.filter((o) => o.module !== m.id && o.group === s.group));
      // 1. photo ID
      if (img) {
        const w = others(s, pool.length >= 3 ? pool : species.filter((o) => o !== s), "common").map(spName);
        out.push(q4(`${s.id}-photo`, m, "Which species is this?", spName(s), w,
          { img, tag: "Photo ID", explain: `This is the <b>${s.common}</b> (<i>${s.sci || ""}</i>). ${s.id_tip || s.fact || ""}`, species: s.id }));
      }
      // 2. fact -> species
      if (s.fact) {
        const w = others(s, pool, "common").map(spName);
        out.push(q4(`${s.id}-fact`, m, `Which species is best described as: “${s.fact}”?`, spName(s), w,
          { tag: "Species facts", explain: `<b>${s.common}</b>: ${s.fact}${s.where ? `. Found: ${s.where}.` : ""}`, species: s.id }));
      }
      // 3. where to find
      if (s.where) {
        const w = others(s, local.length >= 4 ? local : species, "where").map((o) => o.where);
        out.push(q4(`${s.id}-where`, m, `Where are you most likely to find the ${s.common}${s.sci ? ` (<i>${s.sci}</i>)` : ""}?`, s.where, w,
          { tag: "Habitat", explain: `${s.common} → <b>${s.where}</b>. ${s.where_tip || ""}`, species: s.id }));
      }
      // 4. status
      if (s.status && STATUS_NAMES[s.status] && s.status !== "NA") {
        const all = ["CR", "EN", "VU", "NT", "LC", "DD"].filter((x) => x !== s.status);
        out.push(q4(`${s.id}-status`, m, `What is the Singapore conservation status of the ${s.common}?`,
          `${s.status} – ${STATUS_NAMES[s.status]}`, pick(all, 3).map((x) => `${x} – ${STATUS_NAMES[x]}`),
          { tag: "Status", explain: `${s.common} is <b>${s.status} (${STATUS_NAMES[s.status]})</b>. ${s.status_tip || ""}`, species: s.id }));
      }
      // flashcards
      out.push({ id: `${s.id}-card`, kind: "card", module: m.id, auto: true, species: s.id,
        front: img ? `<img src="${img}" alt="Mystery species" loading="lazy"><div class="big">Who is this?</div>` : `<div class="big">${s.common}</div><div class="muted">What do you know about it?</div>`,
        back: `<div class="big">${s.common}</div><div><i>${s.sci || ""}</i>${s.family ? ` · ${s.family}` : ""}</div>` +
          `${s.status ? `<div><span class="st st-${s.status}">${stLabel(s.status)}</span></div>` : ""}` +
          `${s.fact ? `<div>${s.fact}</div>` : ""}${s.where ? `<div class="muted small">📍 ${s.where}</div>` : ""}` +
          `${s.hook ? `<div class="small">💡 ${s.hook}</div>` : ""}` });
    });
    return out.filter(Boolean);
  }

  MODS.forEach((m, mi) => {
    m.index = mi + 1;
    (m.lessons || []).forEach((l, i) => { l.module = m.id; l.n = i; });
    (m.cards || []).forEach((c) => items[c.id] = Object.assign(c, { kind: "card", module: m.id }));
    (m.questions || []).forEach((q) => items[q.id] = Object.assign(q, { kind: "q", module: m.id }));
    generate(m).forEach((x) => { if (!items[x.id]) items[x.id] = x; });
  });
  (window.MOCK_QUIZ || []).forEach((q) => items[q.id] = Object.assign(q, { kind: "q", mock: true }));

  const all = Object.values(items);
  const byModule = (mid) => all.filter((x) => x.module === mid);

  window.Content = {
    modules: MODS, items, all, species, STATUS_NAMES, stLabel, shuffle, pick, imgPath, spName,
    mod: (id) => MODS.find((m) => m.id === id),
    byModule,
    questions: (mid) => all.filter((x) => x.kind === "q" && (!mid || x.module === mid)),
    cards: (mid) => all.filter((x) => x.kind === "card" && (!mid || x.module === mid)),
    lesson: (mid, n) => (MODS.find((m) => m.id === mid) || {}).lessons?.[n],
    // questions tied to a lesson (used for the learn-then-test checkpoints)
    lessonQuestions: (mid, lessonIds) => all.filter((x) => x.kind === "q" && x.module === mid && lessonIds.includes(x.lesson)),
  };
})();
