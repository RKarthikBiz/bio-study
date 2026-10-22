/* All screens. Each view renders into #app. */
(function () {
  const { $, esc, kopi, toast, sound, confetti, ring, bar, cheer, renderQuestion } = UI;
  const C = Content;
  const app = () => $("#app");
  let keyHandler = null;
  const setKeys = (fn) => { keyHandler = fn; };
  document.addEventListener("keydown", (e) => keyHandler && keyHandler(e));
  let timers = [];
  const clearTimers = () => { timers.forEach(clearInterval); timers = []; };

  /* ---------- progress helpers ---------- */
  function modStats(m) {
    const its = C.byModule(m.id);
    const S = Store.state;
    let mastered = 0, seen = 0, due = 0, pts = 0;
    its.forEach((x) => {
      const it = S.items[x.id];
      if (it) { seen++; pts += Math.min(it.box, Store.MASTER_BOX); if (it.box >= Store.MASTER_BOX) mastered++; if (it.box > 0 && it.due <= Date.now()) due++; }
    });
    const lessons = m.lessons || [];
    const read = lessons.filter((l) => S.lessons[l.id]).length;
    // mastery: 30% lessons read, 70% item memory strength
    const mem = its.length ? pts / (its.length * Store.MASTER_BOX) : 0;
    const pct = Math.round(((lessons.length ? read / lessons.length : 1) * 0.3 + mem * 0.7) * 100);
    return { total: its.length, mastered, seen, due, read, lessons: lessons.length, pct };
  }
  function overall() {
    const ms = C.modules.map(modStats);
    const pct = Math.round(ms.reduce((a, s) => a + s.pct, 0) / Math.max(1, ms.length));
    const due = C.all.filter((x) => Store.isDue(x.id)).length;
    const mastered = ms.reduce((a, s) => a + s.mastered, 0);
    return { pct, due, mastered, total: C.all.length, ms };
  }
  function updateBadges() {
    const due = C.all.filter((x) => Store.isDue(x.id)).length;
    const b = $("#dueBadge"); b.hidden = !due; b.textContent = due;
    const lv = Store.level();
    $("#sideFoot").innerHTML = `<div class="levelpill">${lv.icon} Lv ${lv.n} · ${lv.name}</div>
      <div style="margin:8px 0 4px">${bar(lv.pct)}</div>
      <div class="muted small">${Store.state.xp} XP${lv.next ? ` · ${lv.next - Store.state.xp} to ${lv.nextName}` : ""} · 🔥 ${Store.streak()} day streak</div>`;
  }
  function checkBadges() {
    const S = Store.state, got = [];
    C.modules.forEach((m) => {
      const s = modStats(m);
      if (s.pct >= 80 && !S.badges[m.id]) { S.badges[m.id] = Date.now(); got.push(`${m.emoji} ${m.short || m.title}`); }
    });
    if (got.length) { Store.save(); confetti(); sound("done"); toast(`New sticker earned: ${got.join(", ")}!`); }
  }

  /* ---------- HOME ---------- */
  function home() {
    const o = overall(), lv = Store.level(), S = Store.state;
    const goal = S.settings.goal, tx = Store.todayXP();
    const hour = new Date().getHours();
    const hi = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening";
    const nxt = nextStep(o);
    const examDays = daysToExam();
    app().innerHTML = `
      <section class="hero">
        <div>
          <h1>${hi}, naturalist!</h1>
          <p class="muted">${examDays !== null && examDays >= 0 ? `${examDays === 0 ? "Quiz day! You've got this." : `${examDays} day${examDays > 1 ? "s" : ""} until the quiz (12 Nov).`} ` : ""}A little every day beats a lot the night before.</p>
          ${kopi(cheer(o.pct < 5 ? "start" : tx >= goal ? "goalDone" : "general"), tx >= goal ? "wow" : "happy")}
        </div>
        ${ring(o.pct, o.pct + "%", "course mastery")}
      </section>
      <a class="card next" href="${nxt.href}" style="text-decoration:none">
        <span style="font-size:2.2rem">${nxt.icon}</span>
        <div><h3>${nxt.title}</h3><div>${nxt.sub}</div></div>
        <span class="btn">${nxt.cta}</span>
      </a>
      <div class="stats" style="margin:16px 0">
        <div class="stat"><b>${tx}/${goal}</b><span>XP today</span><div style="margin-top:6px">${bar((tx / goal) * 100)}</div></div>
        <div class="stat"><b>🔥 ${Store.streak()}</b><span>day streak</span></div>
        <div class="stat"><b>${o.due}</b><span>cards due for review</span></div>
        <div class="stat"><b>${o.mastered}/${o.total}</b><span>items mastered</span></div>
        <div class="stat"><b>${lv.icon} ${lv.n}</b><span>${lv.name}</span></div>
      </div>
      <div class="row spread"><h2>Your modules</h2><a href="#/modules" class="small">See all</a></div>
      <div class="grid g3">${C.modules.map((m, i) => modCard(m, o.ms[i])).join("")}</div>
      <h2 style="margin-top:24px">Sticker album</h2>
      <p class="muted small">Reach 80% mastery in a module to earn its sticker.</p>
      <div class="sticker-row">${C.modules.map((m) => `<span class="sticker ${S.badges[m.id] ? "got" : ""}" title="${esc(m.title)}">${m.emoji}</span>`).join("")}</div>
      ${S.exams.length ? `<h2 style="margin-top:24px">Mock exam scores</h2><div class="card">${examChart(S.exams)}</div>` : ""}`;
  }
  function daysToExam() {
    const exam = new Date(2026, 10, 12); const now = new Date(); now.setHours(0, 0, 0, 0);
    const d = Math.round((exam - now) / Store.DAY);
    return d > 120 ? null : d;
  }
  function nextStep(o) {
    const S = Store.state;
    if (o.due >= 5) return { icon: "🔁", title: `Review ${o.due} cards`, sub: "They're fading from memory right now — perfect time to refresh them.", href: "#/review", cta: "Start review" };
    for (const m of C.modules) {
      const st = modStats(m);
      if (st.read < st.lessons) {
        const n = (m.lessons || []).findIndex((l) => !S.lessons[l.id]);
        return { icon: m.emoji, title: `Continue: ${m.title}`, sub: `Lesson ${n + 1} of ${st.lessons} · ${esc(m.lessons[n].title)}`, href: `#/learn/${m.id}/${n}`, cta: n ? "Keep going" : "Start" };
      }
    }
    if (o.due) return { icon: "🔁", title: `Review ${o.due} cards`, sub: "Keep those memories strong.", href: "#/review", cta: "Start review" };
    if (!S.exams.length) return { icon: "⏱️", title: "Try a full mock exam", sub: "20 questions, 20 minutes — just like the real quiz.", href: "#/exam", cta: "Begin" };
    return { icon: "🩹", title: "Patch your weak spots", sub: "Practise the questions you've missed before.", href: "#/weak", cta: "Practise" };
  }
  function modCard(m, st) {
    st ||= modStats(m);
    return `<a class="card mod" href="#/module/${m.id}">
      ${Store.state.badges[m.id] ? '<span class="done" title="Sticker earned">⭐</span>' : ""}
      <span class="emo">${m.emoji}</span><h3>${m.title}</h3>
      <span class="muted small">${st.read}/${st.lessons} lessons · ${st.mastered}/${st.total} mastered${st.due ? ` · <b style="color:var(--pink)">${st.due} due</b>` : ""}</span>
      ${bar(st.pct)}</a>`;
  }
  function examChart(ex) {
    const last = ex.slice(-12), w = 600, h = 180, p = 28;
    const xs = (i) => p + (i * (w - 2 * p)) / Math.max(1, last.length - 1);
    const ys = (v) => h - p - (v / 100) * (h - 2 * p);
    const pts = last.map((e, i) => [xs(i), ys((e.score / e.total) * 100)]);
    return `<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="Mock exam score history">
      ${[0, 50, 80, 100].map((v) => `<line x1="${p}" x2="${w - p}" y1="${ys(v)}" y2="${ys(v)}" stroke="var(--line)" stroke-dasharray="${v === 80 ? "6 4" : "2 4"}"/><text x="2" y="${ys(v) + 4}" font-size="11" fill="var(--ink-soft)">${v}%</text>`).join("")}
      <polyline points="${pts.map((q) => q.join(",")).join(" ")}" fill="none" stroke="var(--leaf)" stroke-width="3" stroke-linejoin="round"/>
      ${pts.map((q, i) => `<circle cx="${q[0]}" cy="${q[1]}" r="5" fill="var(--card)" stroke="var(--leaf)" stroke-width="3"><title>${last[i].title || "Mock exam"}: ${last[i].score}/${last[i].total}</title></circle>`).join("")}
    </svg><p class="muted small">Dashed line = 80% target. Latest: <b>${last[last.length - 1].score}/${last[last.length - 1].total}</b></p>`;
  }

  /* ---------- MODULES ---------- */
  function modules() {
    app().innerHTML = `<h1>Learn</h1><p class="muted">Modules follow the lecture order. Each one teaches in bite-size cards, then checks you remember before moving on.</p>
      <div class="grid g3">${C.modules.map((m) => modCard(m)).join("")}</div>`;
  }
  function moduleView(id) {
    const m = C.mod(id); if (!m) return notFound();
    const st = modStats(m), S = Store.state;
    const nextL = (m.lessons || []).findIndex((l) => !S.lessons[l.id]);
    app().innerHTML = `
      <a href="#/modules" class="small">← All modules</a>
      <section class="hero"><div><h1>${m.emoji} ${m.title}</h1><p class="muted">${m.blurb || ""}</p>
      <div class="row">
        <a class="btn" href="#/learn/${m.id}/${nextL < 0 ? 0 : nextL}">${nextL < 0 ? "Re-read lessons" : nextL ? "Continue lessons" : "Start lessons"}</a>
        <a class="btn sky" href="#/flash/${m.id}">Flashcards</a>
        <a class="btn pink" href="#/quiz/${m.id}">Quiz me</a>
        <a class="btn ghost" href="#/cheats/${m.id}">Cheat sheet</a>
      </div></div>${ring(st.pct, st.pct + "%", "mastered")}</section>
      ${m.guess ? `<div class="card guess">⚠️ <b>Best-guess module.</b> The slides for this lecture weren't in your materials, so this covers likely content from general Singapore marine biology. Add the real slides to <code>materials/</code> and ask Claude to rebuild it.</div>` : ""}
      ${m.source && !m.guess ? `<p class="muted small">📖 Based on: ${m.source}</p>` : ""}
      <div class="grid g2">
        <div class="card"><h3>Lessons</h3><ol style="padding-left:1.3em;margin:0">
          ${(m.lessons || []).map((l, i) => `<li><a href="#/learn/${m.id}/${i}">${esc(l.title)}</a> ${S.lessons[l.id] ? "✅" : ""}</li>`).join("")}
        </ol></div>
        <div class="card"><h3>Progress</h3>
          <p>${st.read}/${st.lessons} lessons read</p>${bar(st.lessons ? (st.read / st.lessons) * 100 : 0)}
          <p style="margin-top:12px">${st.mastered}/${st.total} cards & questions mastered</p>${bar(st.total ? (st.mastered / st.total) * 100 : 0)}
          <p style="margin-top:12px">${st.due} due for review now</p>
          ${(m.species || []).length ? `<p><a href="#/species/${m.id}">See the ${m.species.length} species in the field guide</a></p>` : ""}
        </div>
      </div>`;
  }

  /* ---------- LEARN (lesson → checkpoint loop) ---------- */
  const CHUNK = 3;
  function learn(id, n) {
    const m = C.mod(id); if (!m) return notFound();
    n = Math.max(0, Math.min(+n || 0, m.lessons.length - 1));
    const l = m.lessons[n];
    Store.readLesson(l.id); updateBadges();
    const steps = m.lessons.map((_, i) => `<i class="${i <= n ? "on" : ""}"></i>${(i + 1) % CHUNK === 0 || i === m.lessons.length - 1 ? `<i class="q ${i < n ? "on" : ""}"></i>` : ""}`).join("");
    const atCheckpoint = (n + 1) % CHUNK === 0 || n === m.lessons.length - 1;
    app().innerHTML = `
      <div class="lesson">
        <a href="#/module/${m.id}" class="small">← ${m.title}</a>
        <div class="steps" aria-label="Lesson ${n + 1} of ${m.lessons.length}">${steps}</div>
        <article class="card">
          <div class="muted small">Lesson ${n + 1} of ${m.lessons.length}${m.guess ? " · ⚠️ best-guess content (no slides provided)" : ""}</div>
          <h2>${l.title}</h2>
          ${l.img ? `<figure class="pic"><img src="${l.img}" alt="${esc(l.imgAlt || l.title)}" loading="lazy">${l.cap ? `<figcaption>${l.cap}</figcaption>` : ""}</figure>` : ""}
          <div>${l.body}</div>
          ${l.hook ? `<div class="hook"><b>💡 Memory trick</b>${l.hook}</div>` : ""}
          ${l.why ? `<div class="why"><b>Exam angle:</b> ${l.why}</div>` : ""}
        </article>
        <div class="row spread" style="margin-top:16px">
          ${n > 0 ? `<a class="btn ghost" href="#/learn/${m.id}/${n - 1}">Back</a>` : "<span></span>"}
          <button class="btn" id="nextBtn">${atCheckpoint ? "Quick check ✏️" : "Next"}</button>
        </div>
      </div>`;
    const go = () => {
      if (!atCheckpoint) return (location.hash = `#/learn/${m.id}/${n + 1}`);
      const start = n - (n % CHUNK);
      const ids = m.lessons.slice(start, n + 1).map((x) => x.id);
      let qs = C.lessonQuestions(m.id, ids);
      if (!qs.length) qs = C.questions(m.id);
      const pickN = Math.min(qs.length, ids.length >= 3 ? 3 : 2);
      const last = n === m.lessons.length - 1;
      runSession(C.pick(qs, pickN), {
        title: `Quick check · ${m.short || m.title}`,
        intro: "Close the notes — can you recall it? (This is where the learning sticks!)",
        doneHref: last ? `#/module/${m.id}` : `#/learn/${m.id}/${n + 1}`,
        doneLabel: last ? "Finish module" : "Next lesson",
        requeue: true,
      });
    };
    $("#nextBtn").onclick = go;
    setKeys((e) => { if (e.key === "ArrowRight") go(); if (e.key === "ArrowLeft" && n > 0) location.hash = `#/learn/${m.id}/${n - 1}`; });
  }

  /* ---------- SESSION RUNNER (questions + flashcards) ---------- */
  function runSession(list, o = {}) {
    clearTimers();
    if (!list.length) return emptyState("Nothing here yet", "Read a few lessons first and I'll have questions ready for you!", "#/modules", "Go to lessons");
    const queue = list.slice();
    const tries = {};
    let done = 0, right = 0, firstTry = 0;
    const results = [];
    const total = list.length;
    function next() {
      if (!queue.length) return finish();
      const x = queue.shift();
      tries[x.id] = (tries[x.id] || 0) + 1;
      const counter = `<span>${Math.min(done + 1, total)} / ${total}</span>`;
      app().innerHTML = `
        <div class="row spread noprint" style="margin-bottom:8px"><h2 style="margin:0">${o.title || "Practice"}</h2><a class="btn ghost sm" href="${o.quitHref || "#/"}">Quit</a></div>
        ${o.intro && done === 0 && tries[x.id] === 1 ? `<p class="muted">${o.intro}</p>` : ""}
        <div style="margin-bottom:14px">${bar((done / total) * 100)}</div>
        <div id="slot"></div>`;
      if (x.kind === "card") return flashcard($("#slot"), x, counter, (g) => {
        Store.grade(x.id, g); updateBadges();
        if (g === 0 && o.requeue !== false && tries[x.id] < 3) queue.splice(Math.min(3, queue.length), 0, x);
        else { done++; if (g > 0) right++; }
        results.push({ x, ok: g > 0 });
        next();
      });
      const slot = $("#slot"); slot.classList.add("qcard");
      renderQuestion(slot, x, {
        counter,
        onAnswer(ok) {
          Store.grade(x.id, ok ? 2 : 0); updateBadges();
          sound(ok ? "right" : "wrong");
          if (ok && tries[x.id] === 1) firstTry++;
          results.push({ x, ok, first: tries[x.id] === 1 });
          const again = !ok && o.requeue && tries[x.id] < 3;
          if (again) queue.splice(Math.min(2, queue.length), 0, x);
          else { done++; if (ok) right++; }
          const act = slot.querySelector(".qactions");
          act.innerHTML = `<button class="btn" id="cont">${again ? "Got it — I'll ask again soon" : "Continue"}</button>`;
          const c = $("#cont"); c.focus(); c.onclick = next;
        },
      });
      setKeys((e) => { const c = $("#cont"); if (c && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); c.click(); } else slot._keys && slot._keys(e); });
    }
    function finish() {
      setKeys(null);
      const qn = results.filter((r) => r.x.kind === "q");
      const pct = Math.round((firstTry / Math.max(1, new Set(qn.map((r) => r.x.id)).size)) * 100);
      const great = !qn.length || pct >= 80;
      if (great) { confetti(); sound("done"); }
      checkBadges();
      const missed = [...new Map(results.filter((r) => !r.ok).map((r) => [r.x.id, r.x])).values()];
      app().innerHTML = `
        <div class="card" style="max-width:640px">
          ${kopi(great ? cheer("sessionGreat") : cheer("sessionOk"), great ? "wow" : "happy")}
          <h2 style="margin-top:16px">${o.title || "Session"} complete!</h2>
          ${qn.length ? `<p><b>${pct}%</b> right on the first try (${firstTry} of ${new Set(qn.map((r) => r.x.id)).size}).</p>${bar(pct)}` : `<p>${right} cards reviewed.</p>`}
          ${missed.length ? `<h3 style="margin-top:16px">Worth another look</h3><ul>${missed.slice(0, 8).map((x) => `<li>${x.kind === "q" ? stripTags(x.q) : stripTags(x.front)}</li>`).join("")}</ul><p class="muted small">These are now in your review queue — they'll come back sooner.</p>` : ""}
          <div class="row" style="margin-top:14px">
            ${o.doneHref ? `<a class="btn" href="${o.doneHref}">${o.doneLabel || "Continue"}</a>` : `<a class="btn" href="#/">Home</a>`}
            ${o.again ? `<button class="btn ghost" id="againBtn">Another round</button>` : ""}
          </div>
        </div>`;
      if (o.again) $("#againBtn").onclick = o.again;
    }
    next();
  }
  const stripTags = (s) => String(s).replace(/<img[^>]*>/g, "📷 ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim().slice(0, 140);

  function flashcard(el, x, counter, onGrade) {
    const mod = C.mod(x.module);
    el.innerHTML = `
      <div class="qhead" style="max-width:560px;margin:0 auto 10px"><span>${mod ? mod.emoji + " " + esc(mod.short || mod.title) : ""} · Flashcard</span>${counter}</div>
      <div class="flash" tabindex="0" role="button" aria-label="Flip card">
        <div class="flash-inner"><div class="face front">${x.front}<div class="muted small">Say the answer in your head, then tap to flip</div></div>
        <div class="face back">${x.back}</div></div>
      </div>
      <div class="grades" hidden>
        <button class="btn pink" data-g="0">Again<small>forgot</small></button>
        <button class="btn ghost" data-g="1">Hard<small>barely</small></button>
        <button class="btn" data-g="2">Good<small>got it</small></button>
        <button class="btn sky" data-g="3">Easy<small>too easy</small></button>
      </div>
      <p class="muted small" style="text-align:center">Space = flip · 1–4 = grade</p>`;
    const f = el.querySelector(".flash"), g = el.querySelector(".grades");
    const flip = () => { f.classList.toggle("flipped"); g.hidden = false; };
    f.onclick = flip;
    g.querySelectorAll("button").forEach((b) => b.onclick = () => onGrade(+b.dataset.g));
    setKeys((e) => {
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); }
      else if (!g.hidden && "1234".includes(e.key)) onGrade(+e.key - 1);
    });
  }

  /* ---------- FLASHCARDS ---------- */
  function flash(id) {
    const m = C.mod(id);
    const cards = C.cards(id);
    const S = Store.state;
    // due first, then unseen, then weakest
    const sorted = cards.slice().sort((a, b) => {
      const A = S.items[a.id], B = S.items[b.id];
      const score = (it) => !it ? 1 : it.due <= Date.now() ? 0 : 2 + it.box;
      return score(A) - score(B) || Math.random() - .5;
    });
    runSession(sorted.slice(0, 15), { title: `Flashcards · ${m ? m.short || m.title : ""}`, quitHref: `#/module/${id}`, again: () => flash(id), doneHref: `#/module/${id}`, doneLabel: "Back to module" });
  }

  /* ---------- REVIEW (spaced repetition) ---------- */
  function review() {
    const S = Store.state;
    const due = C.all.filter((x) => Store.isDue(x.id)).sort((a, b) => S.items[a.id].due - S.items[b.id].due);
    if (due.length) return runSession(C.shuffle(due.slice(0, 25)), { title: "Daily review", intro: "These are the ones your brain is about to forget. Recall them now and they'll stick longer.", requeue: true, again: review });
    // nothing due: offer fresh items from modules whose lessons were read
    const readMods = C.modules.filter((m) => (m.lessons || []).some((l) => S.lessons[l.id])).map((m) => m.id);
    const fresh = C.all.filter((x) => !S.items[x.id] && readMods.includes(x.module));
    const nextDue = Object.values(S.items).filter((i) => i.box > 0).map((i) => i.due).sort((a, b) => a - b)[0];
    app().innerHTML = `<div class="card empty" style="max-width:640px">
      <div class="e">🌤️</div><h2>All caught up!</h2>
      <p class="muted">${nextDue ? `Your next review is due ${new Date(nextDue).toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "short" })}.` : "Learn a lesson and its questions will start appearing here on a smart schedule."}</p>
      ${fresh.length ? `<button class="btn" id="freshBtn">Learn 10 new cards (${fresh.length} waiting)</button>` : `<a class="btn" href="#/modules">Learn a new lesson</a>`}
    </div>`;
    if (fresh.length) $("#freshBtn").onclick = () => runSession(C.pick(fresh, 10), { title: "New cards", requeue: true, again: review });
  }

  /* ---------- PRACTICE QUIZ ---------- */
  function quiz(pre) {
    const sel = new Set(pre ? [pre] : C.modules.map((m) => m.id));
    let kind = "all", count = 10;
    function draw() {
      const pool = pool_();
      app().innerHTML = `<h1>Practice quiz</h1><p class="muted">Instant feedback after every question. Missed ones come back at the end of the round.</p>
        <div class="card stack">
          <div><h3>Modules</h3><div class="row">${C.modules.map((m) => `<button class="chip ${sel.has(m.id) ? "on" : ""}" data-m="${m.id}">${m.emoji} ${esc(m.short || m.title)}</button>`).join("")}</div>
          <div class="row" style="margin-top:8px"><button class="btn ghost sm" id="allM">All</button><button class="btn ghost sm" id="noneM">None</button></div></div>
          <div><h3>Question type</h3><div class="row">${[["all", "Everything"], ["hand", "Exam-style concepts"], ["photo", "Photo ID"], ["species", "Species facts & status"], ["mock", "Original mock quiz"]].map(([k, l]) => `<button class="chip ${kind === k ? "on" : ""}" data-k="${k}">${l}</button>`).join("")}</div></div>
          <div><h3>How many?</h3><div class="row">${[5, 10, 20, 30].map((n) => `<button class="chip ${count === n ? "on" : ""}" data-n="${n}">${n}</button>`).join("")}</div></div>
          <div class="row spread"><span class="muted">${pool.length} questions available</span><button class="btn" id="go" ${pool.length ? "" : "disabled"}>Start quiz</button></div>
        </div>`;
      app().querySelectorAll("[data-m]").forEach((b) => b.onclick = () => { sel.has(b.dataset.m) ? sel.delete(b.dataset.m) : sel.add(b.dataset.m); draw(); });
      app().querySelectorAll("[data-k]").forEach((b) => b.onclick = () => { kind = b.dataset.k; draw(); });
      app().querySelectorAll("[data-n]").forEach((b) => b.onclick = () => { count = +b.dataset.n; draw(); });
      $("#allM").onclick = () => { C.modules.forEach((m) => sel.add(m.id)); draw(); };
      $("#noneM").onclick = () => { sel.clear(); draw(); };
      $("#go").onclick = () => runSession(C.pick(pool_(), count), { title: "Practice quiz", requeue: true, again: () => quiz(pre), quitHref: "#/quiz" });
    }
    function pool_() {
      if (kind === "mock") return C.all.filter((x) => x.mock);
      return C.all.filter((x) => x.kind === "q" && !x.mock && sel.has(x.module) && (
        kind === "all" || (kind === "hand" && !x.auto) || (kind === "photo" && x.tag === "Photo ID") || (kind === "species" && x.auto && x.tag !== "Photo ID")));
    }
    draw();
  }

  /* ---------- MOCK EXAM ---------- */
  /* Fixed practice papers: same questions every time (seeded), no question repeated across papers. */
  const N_PAPERS = 6, PAPER_LEN = 20, PAPER_MINS = 20;
  let papersCache = null;
  function seeded(seed) { return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function seededShuffle(a, rnd) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function practicePapers() {
    if (papersCache) return papersCache;
    const rnd = seeded(5008);
    const core = (x) => x.kind === "q" && !x.mock && !(C.mod(x.module) || {}).bonus;
    const byId = (a, b) => (a.id < b.id ? -1 : 1);
    const byMod = {};
    seededShuffle(C.all.filter((x) => core(x) && !x.auto).sort(byId), rnd).forEach((q) => (byMod[q.module] ||= []).push(q));
    const photos = seededShuffle(C.all.filter((x) => core(x) && x.tag === "Photo ID").sort(byId), rnd);
    const facts = seededShuffle(C.all.filter((x) => core(x) && x.auto && x.tag !== "Photo ID").sort(byId), rnd);
    const mods = Object.keys(byMod).sort();
    papersCache = Array.from({ length: N_PAPERS }, (_, k) => {
      const qs = []; let i = k; // start each paper on a different module so topics rotate
      while (qs.length < 14 && mods.some((m) => byMod[m].length)) { const arr = byMod[mods[i++ % mods.length]]; if (arr.length) qs.push(arr.shift()); }
      qs.push(...photos.splice(0, 3), ...facts.splice(0, PAPER_LEN - qs.length - 3));
      return { id: `practice${k + 1}`, title: `Practice Mock ${k + 1}`, qs: seededShuffle(qs, rnd), mins: PAPER_MINS };
    });
    return papersCache;
  }

  function exam() {
    clearTimers();
    const S = Store.state;
    const real = { id: "real", title: "Real Mock Test", qs: C.all.filter((x) => x.mock), mins: 20 };
    const stats = (pid) => { const e = S.exams.filter((x) => x.paper === pid); return e.length ? { n: e.length, best: Math.max(...e.map((x) => Math.round((x.score / x.total) * 100))) } : null; };
    const paperCard = (p, extra = "") => {
      const st = stats(p.id);
      return `<div class="card paper ${extra}">
        <div class="row spread"><h3 style="margin:0">${p.title}</h3>${p.id === "real" ? '<span class="tag">Official</span>' : ""}</div>
        <p class="muted small" style="margin:6px 0 10px">${p.qs.length} questions · ${p.mins} minutes${p.id === "real" ? " · the exact mock quiz from your course" : ""}</p>
        <div class="row spread"><span class="small">${st ? `Best <b>${st.best}%</b> · ${st.n} attempt${st.n > 1 ? "s" : ""}` : "Not attempted yet"}</span>
        <button class="btn sm ${p.id === "real" ? "pink" : ""}" data-start="${p.id}">${st ? "Retake" : "Start"}</button></div></div>`;
    };
    const papers = practicePapers();
    app().innerHTML = `<h1>Mock exams</h1>
      ${kopi("The real quiz is <b>closed-book MCQ</b>: about 20 questions in 20 minutes, some with several right answers. Each paper is fixed, so you can retake it and watch your score climb.", "think")}
      <h2 style="margin-top:20px">Real mock test</h2>
      ${paperCard(real, "real")}
      <h2 style="margin-top:20px">Practice mocks</h2>
      <p class="muted small">Six fixed papers with no repeated questions between them, covering every module.</p>
      <div class="grid g2">${papers.map((p) => paperCard(p)).join("")}</div>
      <h2 style="margin-top:20px">Random mix</h2>
      <div class="card stack">
        <p class="muted small" style="margin:0">A fresh random paper each time, set to any length.</p>
        <div class="row"><label>Questions <input type="number" id="len" min="5" max="60" value="${S.settings.examLen}" style="width:90px"></label>
        <label>Minutes <input type="number" id="mins" min="1" max="90" value="${S.settings.examMins}" style="width:90px"></label>
        <button class="btn sky" id="startRandom">Start random paper</button></div>
      </div>
      ${S.exams.length ? `<h2 style="margin-top:24px">Score history</h2><div class="card">${examChart(S.exams)}</div>` : ""}`;
    app().querySelectorAll("[data-start]").forEach((b) => b.onclick = () => {
      const p = b.dataset.start === "real" ? real : papers.find((x) => x.id === b.dataset.start);
      runExam(p.qs.slice(), p.mins * 60, p);
    });
    $("#startRandom").onclick = () => {
      const len = Math.max(5, Math.min(60, +$("#len").value || 20)), mins = Math.max(1, +$("#mins").value || 20);
      S.settings.examLen = len; S.settings.examMins = mins; Store.save();
      // spread across modules; favour hand-written exam-style questions (70%)
      const core = (x) => x.kind === "q" && !x.mock && !(C.mod(x.module) || {}).bonus;
      const hand = C.all.filter((x) => core(x) && !x.auto), auto = C.all.filter((x) => core(x) && x.auto);
      const byMod = {}; hand.forEach((q) => (byMod[q.module] ||= []).push(q));
      const nHand = Math.round(len * .7);
      let qs = []; const mods = C.shuffle(Object.keys(byMod)); let i = 0;
      while (qs.length < nHand && mods.some((m) => byMod[m].length)) { const arr = byMod[mods[i++ % mods.length]]; if (arr.length) qs.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]); }
      qs = C.shuffle(qs.concat(C.pick(auto, len - qs.length)));
      runExam(qs, mins * 60, { id: "random", title: "Random mix" });
    };
  }
  function runExam(qs, secs, paper) {
    qs.forEach((q) => delete q._order);
    const ans = {}; let cur = 0; const t0 = Date.now(); let left = secs;
    function draw() {
      const q = qs[cur];
      app().innerHTML = `
        <div class="row spread"><h2 style="margin:0">${paper.title}</h2><span class="timer" id="timer"></span></div>
        <div class="qnav">${qs.map((_, i) => `<button class="${ans[i]?.length ? "ans" : ""} ${i === cur ? "cur" : ""}" data-i="${i}" aria-label="Question ${i + 1}">${i + 1}</button>`).join("")}</div>
        <div id="slot" class="qcard card"></div>
        <div class="row spread" style="margin-top:14px">
          <button class="btn ghost" id="prev" ${cur ? "" : "disabled"}>Previous</button>
          <span class="row"><button class="btn pink" id="submit">Submit exam</button><button class="btn" id="nxt">${cur < qs.length - 1 ? "Next" : "Review"}</button></span>
        </div>`;
      renderQuestion($("#slot"), q, { mode: "exam", selected: ans[cur], counter: `<span>Q${cur + 1} of ${qs.length}</span>`, onSelect: (s) => { ans[cur] = s; app().querySelector(`.qnav [data-i="${cur}"]`).classList.toggle("ans", s.length > 0); } });
      app().querySelectorAll(".qnav button").forEach((b) => b.onclick = () => { cur = +b.dataset.i; draw(); });
      $("#prev").onclick = () => { cur--; draw(); };
      $("#nxt").onclick = () => { if (cur < qs.length - 1) { cur++; draw(); } else toast(`${Object.values(ans).filter((a) => a.length).length}/${qs.length} answered — submit when ready`); };
      $("#submit").onclick = () => {
        const un = qs.length - Object.values(ans).filter((a) => a.length).length;
        if (!un || confirm(`${un} question${un > 1 ? "s" : ""} unanswered. Submit anyway?`)) finish();
      };
      tick();
      setKeys((e) => { const s = $("#slot"); if (e.key === "ArrowRight" && cur < qs.length - 1) { cur++; draw(); } else if (e.key === "ArrowLeft" && cur) { cur--; draw(); } else s._keys && s._keys(e); });
    }
    function tick() {
      const t = $("#timer"); if (!t) return;
      t.textContent = `⏱ ${Math.floor(left / 60)}:${String(left % 60).padStart(2, "0")}`;
      t.classList.toggle("low", left <= 60);
    }
    timers.push(setInterval(() => { left--; tick(); if (left <= 0) { toast("Time's up! Pens down."); finish(); } }, 1000));
    function finish() {
      clearTimers(); setKeys(null);
      const res = qs.map((q, i) => ({ q, sel: ans[i] || [], ok: UI.isCorrect(q, ans[i] || []) }));
      const score = res.filter((r) => r.ok).length;
      // skipped questions don't count as memory failures
      res.forEach((r) => { if (r.sel.length) Store.grade(r.q.id, r.ok ? 2 : 0); });
      const byModule = {};
      res.forEach((r) => { const k = r.q.module || "mock"; (byModule[k] ||= [0, 0]); byModule[k][1]++; if (r.ok) byModule[k][0]++; });
      Store.state.exams.push({ t: Date.now(), paper: paper.id, title: paper.title, score, total: qs.length, secs: Math.round((Date.now() - t0) / 1000), byModule });
      Store.addXP(score * 5); Store.save(); updateBadges();
      const pct = Math.round((score / qs.length) * 100);
      if (pct >= 80) { confetti(); sound("done"); }
      app().innerHTML = `
        <div class="card">
          <div class="row spread">${kopi(pct >= 80 ? cheer("examGreat") : pct >= 50 ? cheer("examOk") : cheer("examLow"), pct >= 80 ? "wow" : pct >= 50 ? "happy" : "think")}${ring(pct, `${score}/${qs.length}`, `${pct}%`, pct >= 80 ? "var(--good)" : pct >= 50 ? "var(--sun)" : "var(--pink)")}</div>
          <h3 style="margin-top:16px">By topic</h3>
          <div class="tablewrap"><table class="t"><tr><th>Module</th><th>Score</th><th></th></tr>
          ${Object.entries(byModule).sort((a, b) => a[1][0] / a[1][1] - b[1][0] / b[1][1]).map(([k, [r, t]]) => { const m = C.mod(k); return `<tr><td>${m ? m.emoji + " " + esc(m.title) : "📄 Mock quiz"}</td><td>${r}/${t}</td><td style="width:40%">${bar((r / t) * 100)}</td></tr>`; }).join("")}
          </table></div>
          <div class="row"><a class="btn" href="#/weak">Practise weak spots</a><a class="btn ghost" href="#/exam">All mock exams</a></div>
        </div>
        <h2 style="margin-top:24px">Answer review</h2>
        <div class="stack" id="rev"></div>`;
      const rev = $("#rev");
      res.forEach((r, i) => {
        const d = document.createElement("div"); d.className = "card qcard"; rev.appendChild(d);
        renderQuestion(d, r.q, { mode: "review", reveal: true, selected: r.sel, counter: `<span>Q${i + 1} ${r.ok ? "✅" : "❌"}</span>` });
      });
    }
    draw();
  }

  /* ---------- PHOTO ID DRILL ---------- */
  function photoid() {
    const S = Store.state;
    const sel = new Set(C.modules.filter((m) => (m.species || []).length).map((m) => m.id));
    function setup() {
      app().innerHTML = `<h1>Photo ID drill</h1>
        ${kopi("The quiz shows photos and asks “What is this?”. Rapid-fire IDs train your eye. Look for the one feature that gives it away!", "happy")}
        <div class="card stack" style="margin-top:16px"><div class="row">${C.modules.filter((m) => (m.species || []).length).map((m) => `<button class="chip ${sel.has(m.id) ? "on" : ""}" data-m="${m.id}">${m.emoji} ${esc(m.short || m.title)}</button>`).join("")}</div>
        <button class="btn" id="go">Start 15 photos</button></div>`;
      app().querySelectorAll("[data-m]").forEach((b) => b.onclick = () => { sel.has(b.dataset.m) ? sel.delete(b.dataset.m) : sel.add(b.dataset.m); b.classList.toggle("on"); });
      $("#go").onclick = () => {
        const pool = C.all.filter((x) => x.tag === "Photo ID" && sel.has(x.module));
        if (!pool.length) return toast("Pick at least one module");
        pool.forEach((q) => delete q._order);
        runSession(C.pick(pool, 15), { title: "Photo ID", requeue: true, again: photoid, quitHref: "#/photoid" });
      };
    }
    setup();
  }

  /* ---------- FIELD GUIDE ---------- */
  function speciesView(filter) {
    let mod = filter || "all", qtext = "";
    function draw() {
      const list = C.species.filter((s) => (mod === "all" || s.module === mod) &&
        (!qtext || `${s.common} ${s.sci} ${s.family} ${s.fact} ${s.where}`.toLowerCase().includes(qtext)));
      app().innerHTML = `<h1>Field guide</h1><p class="muted">All the “species you must know”. Tap a card for the details and memory hooks.</p>
        <div class="row" style="margin-bottom:10px"><button class="chip ${mod === "all" ? "on" : ""}" data-m="all">All</button>
        ${C.modules.filter((m) => (m.species || []).length).map((m) => `<button class="chip ${mod === m.id ? "on" : ""}" data-m="${m.id}">${m.emoji} ${esc(m.short || m.title)}</button>`).join("")}</div>
        <input type="search" id="q" placeholder="Filter by name, family, habitat…" value="${esc(qtext)}" style="margin-bottom:14px">
        <div class="sp-grid">${list.map((s) => `<button class="sp ${Store.state.seenSpecies[s.id] ? "seen" : ""}" data-s="${s.id}">
          ${C.imgPath(s) ? `<img src="${C.imgPath(s)}" alt="${esc(s.common)}" loading="lazy">` : ""}
          <div><b>${s.common}</b><i>${s.sci || ""}</i><div class="row" style="margin-top:4px">${s.status ? `<span class="st st-${s.status}">${C.stLabel(s.status)}</span>` : ""}<span class="tag">${esc(s.group || "")}</span></div></div></button>`).join("") || "<p>No matches.</p>"}</div>`;
      app().querySelectorAll("[data-m]").forEach((b) => b.onclick = () => { mod = b.dataset.m; draw(); });
      const qi = $("#q"); qi.oninput = () => { qtext = qi.value.toLowerCase(); const pos = qi.selectionStart; draw(); const n = $("#q"); n.focus(); n.setSelectionRange(pos, pos); };
      app().querySelectorAll("[data-s]").forEach((b) => b.onclick = () => openSpecies(b.dataset.s));
    }
    draw();
  }
  function openSpecies(id) {
    const s = C.species.find((x) => x.id === id); if (!s) return;
    Store.state.seenSpecies[id] = 1; Store.save();
    const d = document.createElement("dialog");
    d.innerHTML = `${C.imgPath(s) ? `<img src="${C.imgPath(s)}" alt="${esc(s.common)}">` : ""}<div class="in">
      <h2 style="margin:0">${s.common}</h2><div><i>${s.sci || ""}</i>${s.family ? ` · ${s.family}` : ""}</div>
      <div class="row" style="margin:8px 0">${s.status ? `<span class="st st-${s.status}">${C.stLabel(s.status)}</span> <span class="small">${C.STATUS_NAMES[s.status] || ""}</span>` : ""}<span class="tag">${esc(s.group || "")}</span></div>
      ${s.fact ? `<p><b>Why it matters:</b> ${s.fact}</p>` : ""}
      ${s.where ? `<p><b>📍 Where:</b> ${s.where}</p>` : ""}
      ${s.more ? `<p>${s.more}</p>` : ""}
      ${s.hook ? `<div class="hook"><b>💡 Memory trick</b>${s.hook}</div>` : ""}
      <form method="dialog"><button class="btn">Close</button></form></div>`;
    document.body.appendChild(d); d.showModal(); d.addEventListener("close", () => d.remove());
    d.addEventListener("click", (e) => { if (e.target === d) d.close(); });
  }

  /* ---------- MEMORY TRICKS ---------- */
  function tricks() {
    app().innerHTML = `<h1>Memory tricks</h1><p class="muted">Every mnemonic and hook in one place. Read them out loud — silly is memorable!</p>
      ${C.modules.map((m) => {
        const hs = (m.lessons || []).filter((l) => l.hook).map((l) => `<div class="card trick"><h3>${esc(l.title)}</h3>${l.hook}<div class="small" style="margin-top:6px"><a href="#/learn/${m.id}/${l.n}">Open lesson</a></div></div>`)
          .concat((m.species || []).filter((s) => s.hook).map((s) => `<div class="card trick"><h3>${s.common}</h3>${s.hook}</div>`));
        return hs.length ? `<h2 style="margin-top:22px">${m.emoji} ${m.title}</h2><div class="cols">${hs.join("")}</div>` : "";
      }).join("")}`;
  }

  /* ---------- CHEAT SHEETS ---------- */
  function cheats(id) {
    const list = id ? [C.mod(id)].filter(Boolean) : C.modules;
    app().innerHTML = `<div class="row spread noprint"><h1>Cheat sheets</h1><button class="btn ghost sm" onclick="print()">Print</button></div>
      ${id ? `<p class="noprint"><a href="#/cheats">All cheat sheets</a></p>` : `<div class="row noprint" style="margin-bottom:12px">${C.modules.map((m) => `<a class="chip" href="#/cheats/${m.id}">${m.emoji} ${esc(m.short || m.title)}</a>`).join("")}</div>`}
      ${list.map((m) => `<section class="card cheat" style="margin-bottom:16px"><h2>${m.emoji} ${m.title}</h2>${m.cheatsheet || ""}
        ${(m.species || []).length ? `<h3>Species table</h3><div class="tablewrap"><table class="t"><tr><th>Species</th><th>Status</th><th>Where</th><th>Key fact</th></tr>
        ${m.species.map((s) => `<tr><td><b>${s.common}</b><br><i>${s.sci || ""}</i></td><td>${s.status ? `<span class="st st-${s.status}">${C.stLabel(s.status)}</span>` : ""}</td><td>${s.where || ""}</td><td>${s.fact || ""}</td></tr>`).join("")}</table></div>` : ""}
      </section>`).join("")}`;
  }

  /* ---------- WEAK SPOTS ---------- */
  function weak() {
    const S = Store.state;
    const list = C.all.filter((x) => S.items[x.id] && S.items[x.id].wrong > 0 && S.items[x.id].box < Store.MASTER_BOX)
      .sort((a, b) => (S.items[b.id].wrong - S.items[b.id].right) - (S.items[a.id].wrong - S.items[a.id].right));
    if (!list.length) return emptyState("No weak spots yet", "Anything you get wrong shows up here until you've nailed it. Keep practising!", "#/quiz", "Practice quiz");
    const byMod = {}; list.forEach((x) => byMod[x.module || "mock"] = (byMod[x.module || "mock"] || 0) + 1);
    app().innerHTML = `<h1>Weak spots</h1>${kopi(`You have <b>${list.length}</b> tricky items. Mistakes are just memories asking for one more visit.`, "think")}
      <div class="card" style="margin:16px 0"><h3>Where they are</h3>
      ${Object.entries(byMod).sort((a, b) => b[1] - a[1]).map(([k, n]) => { const m = C.mod(k); return `<div class="row spread"><span>${m ? m.emoji + " " + esc(m.title) : "📄 Mock quiz"}</span><b>${n}</b></div>`; }).join("")}
      <button class="btn pink" id="go" style="margin-top:12px">Practise ${Math.min(15, list.length)} weakest</button></div>`;
    $("#go").onclick = () => runSession(list.slice(0, 15), { title: "Weak spots", requeue: true, again: weak, quitHref: "#/weak" });
  }

  /* ---------- SEARCH ---------- */
  function search() {
    app().innerHTML = `<h1>Search</h1><input type="search" id="q" placeholder="Try “resam”, “dentition”, “CITES”, “mudflat”…" autofocus><div id="hits" style="margin-top:14px"></div>`;
    const qi = $("#q"), hits = $("#hits");
    const hl = (s, t) => stripTags(s).replace(new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), "<mark>$1</mark>");
    qi.oninput = () => {
      const t = qi.value.trim().toLowerCase();
      if (t.length < 2) return (hits.innerHTML = "");
      const out = [];
      C.modules.forEach((m) => (m.lessons || []).forEach((l) => {
        const txt = `${l.title} ${l.body} ${l.hook || ""}`;
        if (txt.toLowerCase().includes(t)) out.push(`<div class="hit"><a href="#/learn/${m.id}/${l.n}"><b>${m.emoji} ${esc(l.title)}</b></a><div class="small">${hl(snippet(txt, t), t)}</div></div>`);
      }));
      C.species.forEach((s) => { const txt = `${s.common} ${s.sci} ${s.family} ${s.fact} ${s.where} ${s.more || ""}`; if (txt.toLowerCase().includes(t)) out.push(`<div class="hit"><a href="#" data-s="${s.id}"><b>🦎 ${s.common}</b> <i>${s.sci || ""}</i></a><div class="small">${hl(snippet(txt, t), t)}</div></div>`); });
      C.all.filter((x) => x.kind === "q" && !x.auto).forEach((x) => { const txt = `${x.q} ${x.options.join(" ")} ${x.explain || ""}`; if (txt.toLowerCase().includes(t)) out.push(`<div class="hit"><b>❓ ${hl(x.q, t)}</b><div class="small">${hl(snippet(x.explain || "", t), t)}</div></div>`); });
      hits.innerHTML = out.length ? `<p class="muted">${out.length} results</p><div class="card">${out.slice(0, 60).join("")}</div>` : `<p class="muted">Nothing found for “${esc(t)}”.</p>`;
      hits.querySelectorAll("[data-s]").forEach((a) => a.onclick = (e) => { e.preventDefault(); openSpecies(a.dataset.s); });
    };
    qi.focus();
  }
  function snippet(txt, t) {
    const s = stripTags(txt); const i = s.toLowerCase().indexOf(t);
    return (i > 60 ? "…" : "") + s.slice(Math.max(0, i - 60), i + 120) + "…";
  }

  /* ---------- SETTINGS ---------- */
  function settings() {
    const S = Store.state;
    app().innerHTML = `<h1>Settings</h1>
      <div class="card stack" style="max-width:640px">
        <div><h3>Daily XP goal</h3><div class="row">${[30, 60, 100, 150].map((n) => `<button class="chip ${S.settings.goal === n ? "on" : ""}" data-g="${n}">${n} XP${n === 30 ? " · chill" : n === 60 ? " · steady" : n === 100 ? " · serious" : " · cram mode"}</button>`).join("")}</div>
          <p class="muted small">About 10 XP per correct answer, 5 XP per new lesson.</p></div>
        <div><h3>Theme</h3><div class="row">${[["auto", "Match device"], ["light", "Day forest"], ["dark", "Night walk"]].map(([k, l]) => `<button class="chip ${S.settings.theme === k ? "on" : ""}" data-t="${k}">${l}</button>`).join("")}</div></div>
        <div><h3>Sound effects</h3><button class="chip ${S.settings.sound ? "on" : ""}" id="snd">${S.settings.sound ? "On" : "Off"}</button></div>
        <div><h3>Move to another device</h3>
          <p class="muted small">Your progress is saved in this browser only. To continue on another phone or computer, export it here and import it there. Importing replaces the progress on that device.</p>
          <div class="row"><button class="btn sky sm" id="copyCode">Copy save code</button><button class="btn ghost sm" id="exp">Download save file</button></div>
          <textarea id="codeIn" rows="3" placeholder="Paste a save code here" style="margin-top:12px"></textarea>
          <div class="row" style="margin-top:8px"><button class="btn sm" id="useCode">Import save code</button><label class="btn ghost sm">Import save file<input type="file" id="imp" accept=".json,.txt,application/json,text/plain" hidden></label></div></div>
        <div><h3>Start over</h3><button class="btn pink sm" id="reset">Reset all progress</button></div>
        <div class="muted small">Photos: iNaturalist & Wikimedia Commons contributors (see img/credits.json). Content summarised from ES5008 lecture slides.</div>
      </div>`;
    app().querySelectorAll("[data-g]").forEach((b) => b.onclick = () => { S.settings.goal = +b.dataset.g; Store.save(); settings(); });
    app().querySelectorAll("[data-t]").forEach((b) => b.onclick = () => { S.settings.theme = b.dataset.t; Store.save(); App.applyTheme(); settings(); });
    $("#snd").onclick = () => { S.settings.sound = !S.settings.sound; Store.save(); settings(); };
    $("#exp").onclick = () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([Store.export()], { type: "application/json" }));
      a.download = `es5008-progress-${Store.today()}.json`; a.click();
    };
    const load = async (text) => {
      if (!text.trim()) return toast("Paste a save code first.");
      let json;
      try { json = await decodeSave(text); JSON.parse(json); } catch (err) { return toast("That isn't a valid save code or file."); }
      if (!confirm("Replace the progress on this device with the imported save?")) return;
      try { Store.import(json); } catch (err) { return toast("That isn't a valid save code or file."); }
      toast("Progress imported!"); App.applyTheme(); updateBadges(); settings();
    };
    $("#imp").onchange = async (e) => { const f = e.target.files[0]; if (f) load(await f.text()); };
    $("#useCode").onclick = () => load($("#codeIn").value);
    $("#copyCode").onclick = async () => {
      const code = await encodeSave(Store.export());
      try { await navigator.clipboard.writeText(code); toast("Save code copied — paste it into Settings on your other device."); }
      catch (err) { const t = $("#codeIn"); t.value = code; t.select(); toast("Copy the selected code below."); }
    };
    $("#reset").onclick = () => { if (confirm("Erase all progress, XP and history? This can't be undone.")) { Store.reset(); updateBadges(); toast("Fresh start!"); location.hash = "#/"; } };
  }

  /* Save codes: "KOPI1." + base64url(gzip(json)), or "KOPI0." + base64url(json) where gzip isn't available. */
  const b64 = (bytes) => { let s = ""; bytes.forEach((b) => s += String.fromCharCode(b)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
  const unb64 = (str) => Uint8Array.from(atob(str.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));
  const pipe = async (bytes, stream) => new Uint8Array(await new Response(new Blob([bytes]).stream().pipeThrough(stream)).arrayBuffer());
  async function encodeSave(json) {
    const raw = new TextEncoder().encode(json);
    if (window.CompressionStream) return "KOPI1." + b64(await pipe(raw, new CompressionStream("gzip")));
    return "KOPI0." + b64(raw);
  }
  async function decodeSave(text) {
    text = text.trim();
    if (text.startsWith("{")) return text; // plain JSON save file
    const m = text.replace(/\s+/g, "").match(/^KOPI([01])\.(.+)$/);
    if (!m) throw new Error("not a save code");
    const bytes = unb64(m[2]);
    return new TextDecoder().decode(m[1] === "1" ? await pipe(bytes, new DecompressionStream("gzip")) : bytes);
  }

  function emptyState(title, text, href, cta) {
    app().innerHTML = `<div class="card empty" style="max-width:640px"><div class="e">🌱</div><h2>${title}</h2><p class="muted">${text}</p><a class="btn" href="${href}">${cta}</a></div>`;
  }
  function notFound() { emptyState("Page not found", "That trail doesn't exist.", "#/", "Go home"); }

  window.Views = { practicePapers, home, modules, moduleView, learn, flash, review, quiz, exam, photoid, speciesView, tricks, cheats, weak, search, settings, notFound, updateBadges, clearTimers, setKeys };
})();
