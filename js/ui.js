/* Shared UI bits: mascot, toast, confetti, sounds, meters, and the question widget. */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Kopi the Sunda colugo (Galeopterus variegatus) — mood: happy | wow | think | sad
  function kopiSVG(mood = "happy") {
    const mouth = {
      happy: '<path d="M52 70 q8 8 16 0" stroke="#3b2a20" stroke-width="3" fill="none" stroke-linecap="round"/>',
      wow: '<ellipse cx="60" cy="72" rx="5" ry="6" fill="#3b2a20"/>',
      think: '<path d="M53 72 h14" stroke="#3b2a20" stroke-width="3" stroke-linecap="round"/>',
      sad: '<path d="M52 75 q8 -7 16 0" stroke="#3b2a20" stroke-width="3" fill="none" stroke-linecap="round"/>',
    }[mood];
    return `<svg viewBox="0 0 120 120" role="img" aria-label="Kopi the colugo">
      <path d="M8 62 Q20 30 60 34 Q100 30 112 62 Q100 98 60 104 Q20 98 8 62Z" fill="#9c8f78"/>
      <path d="M8 62 Q14 74 20 70 Q24 82 32 78 Q36 92 46 88 M112 62 Q106 74 100 70 Q96 82 88 78 Q84 92 74 88" stroke="#7a6d58" stroke-width="2" fill="none"/>
      <circle cx="60" cy="60" r="30" fill="#b8a98d"/>
      <path d="M34 48 q-6 -14 6 -14 M86 48 q6 -14 -6 -14" fill="#b8a98d" stroke="#8d7f66" stroke-width="2"/>
      <circle cx="47" cy="56" r="11" fill="#fff"/><circle cx="73" cy="56" r="11" fill="#fff"/>
      <circle cx="48" cy="57" r="7" fill="#2a1d14"/><circle cx="72" cy="57" r="7" fill="#2a1d14"/>
      <circle cx="50" cy="54" r="2.4" fill="#fff"/><circle cx="74" cy="54" r="2.4" fill="#fff"/>
      <ellipse cx="60" cy="66" rx="4" ry="3" fill="#5a4535"/>
      <circle cx="38" cy="70" r="5" fill="#ef7aa1" opacity=".45"/><circle cx="82" cy="70" r="5" fill="#ef7aa1" opacity=".45"/>
      ${mouth}
      <path d="M44 40 q4 -4 8 0 M68 40 q4 -4 8 0" stroke="#e8dcc5" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    </svg>`;
  }
  function kopi(text, mood = "happy", cls = "") {
    return `<div class="kopi ${cls}">${kopiSVG(mood)}<div class="bubble">${text}</div></div>`;
  }

  let toastT;
  function toast(msg) {
    const t = $("#toast"); t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 2200);
  }

  // tiny synth blips so we don't ship audio files
  let actx;
  function sound(kind) {
    if (!Store.state.settings.sound) return;
    try {
      actx ||= new (window.AudioContext || window.webkitAudioContext)();
      const notes = { right: [660, 880], wrong: [300, 220], done: [523, 659, 784, 1046] }[kind] || [600];
      notes.forEach((f, i) => {
        const o = actx.createOscillator(), g = actx.createGain();
        o.type = "triangle"; o.frequency.value = f;
        const t = actx.currentTime + i * 0.09;
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.12, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
        o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.2);
      });
    } catch (e) {}
  }

  function confetti() {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#confetti"), x = c.getContext("2d");
    c.width = innerWidth; c.height = innerHeight;
    const cols = ["#3f9a5f", "#2b8bc6", "#ef7aa1", "#f6c445", "#9c8f78"];
    const ps = Array.from({ length: 140 }, () => ({
      x: innerWidth / 2 + (Math.random() - .5) * 200, y: innerHeight / 3, vx: (Math.random() - .5) * 14, vy: Math.random() * -12 - 4,
      r: Math.random() * 6 + 4, c: cols[Math.floor(Math.random() * cols.length)], a: Math.random() * 6, leaf: Math.random() < .4,
    }));
    let f = 0;
    (function tick() {
      x.clearRect(0, 0, c.width, c.height);
      ps.forEach((p) => {
        p.vy += .35; p.x += p.vx; p.y += p.vy; p.vx *= .99; p.a += .1;
        x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c;
        if (p.leaf) { x.beginPath(); x.ellipse(0, 0, p.r, p.r / 2.2, 0, 0, 7); x.fill(); } else x.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * .6);
        x.restore();
      });
      if (++f < 150) requestAnimationFrame(tick); else x.clearRect(0, 0, c.width, c.height);
    })();
  }

  const ring = (pct, big, small, color) =>
    `<div class="ring" style="--p:${pct};${color ? `--c:${color}` : ""}"><div><span><b>${big}</b><small>${small}</small></span></div></div>`;
  const bar = (pct) => `<div class="bar" role="progressbar" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></div>`;

  function cheer(kind) {
    const E = window.ENCOURAGE || {};
    const list = E[kind] || E.general || ["Nice!"];
    return list[Math.floor(Math.random() * list.length)];
  }

  /* ---------- question widget ----------
     opts: { mode: "instant" | "exam", selected: [origIdx], onAnswer(correct, selectedOrig), onSelect(selectedOrig), reveal: bool }
     Option order is shuffled once per question object per session (kept in q._order). */
  function isCorrect(q, sel) {
    const a = [...q.answer].sort().join(), s = [...sel].sort().join();
    return a === s;
  }
  function renderQuestion(el, q, opts = {}) {
    const multi = q.answer.length > 1 || q.multi;
    if (!q._order) q._order = q.keepOrder ? q.options.map((_, i) => i) : Content.shuffle(q.options.map((_, i) => i));
    let sel = new Set(opts.selected || []);
    let locked = !!opts.reveal;
    const mod = Content.mod(q.module);
    el.innerHTML = `
      <div class="qhead"><span>${q.mock ? "📄 Mock quiz" : mod ? `${mod.emoji} ${esc(mod.short || mod.title)}` : ""}${q.tag ? ` · ${q.tag}` : ""}</span>${opts.counter || ""}</div>
      <div class="qtext">${q.q}</div>
      <div class="qhint">${multi ? "Select ALL that apply" : "Choose one"}</div>
      ${q.img ? `<figure class="qimg"><img src="${q.img}" alt="Question photo" loading="lazy"></figure>` : ""}
      <div class="opts" role="${multi ? "group" : "radiogroup"}">
        ${q._order.map((oi, k) => `<button class="opt" type="button" data-i="${oi}" role="${multi ? "checkbox" : "radio"}" aria-checked="false"><span class="k">${"ABCDEFGH"[k]}</span><span>${q.options[oi]}</span></button>`).join("")}
      </div>
      <div class="fb"></div>
      <div class="qactions"></div>`;
    const btns = [...el.querySelectorAll(".opt")];
    const act = el.querySelector(".qactions");
    const fb = el.querySelector(".fb");

    function paint() {
      btns.forEach((b) => {
        const i = +b.dataset.i, on = sel.has(i);
        b.classList.toggle("sel", on && !locked); b.setAttribute("aria-checked", on);
        if (locked) {
          b.disabled = true;
          const right = q.answer.includes(i);
          b.classList.toggle("right", right);
          b.classList.toggle("wrong", on && !right);
          b.classList.toggle("missed", right && !on);
        }
      });
    }
    function submit() {
      if (!sel.size) return;
      locked = true; paint();
      const ok = isCorrect(q, [...sel]);
      showFeedback(ok);
      opts.onAnswer && opts.onAnswer(ok, [...sel]);
    }
    function showFeedback(ok) {
      fb.innerHTML = `<div class="feedback ${ok ? "ok" : "no"}"><h4>${ok ? "✅ " + cheer("right") : "🌱 " + cheer("wrong")}</h4>${q.explain ? `<div>${q.explain}</div>` : ""}${
        q.lesson && !ok ? `<div class="small" style="margin-top:6px"><a href="#/learn/${q.module}/${lessonIndex(q)}">Re-read the lesson</a></div>` : ""}</div>`;
    }
    btns.forEach((b) => b.addEventListener("click", () => {
      if (locked) return;
      const i = +b.dataset.i;
      if (multi) sel.has(i) ? sel.delete(i) : sel.add(i);
      else sel = new Set([i]);
      paint();
      opts.onSelect && opts.onSelect([...sel]);
      if (!multi && opts.mode !== "exam") submit();
      updateActions();
    }));
    function updateActions() {
      if (opts.mode === "exam" || locked) return;
      if (multi) act.innerHTML = `<button class="btn sky" type="button" ${sel.size ? "" : "disabled"}>Check answer</button>`;
      const b = act.querySelector("button"); if (b) b.onclick = submit;
    }
    paint(); updateActions();
    if (locked && opts.mode === "review") showFeedback(isCorrect(q, [...sel]));
    // keyboard: 1-8 picks options, Enter submits multi
    el._keys = (e) => {
      if (locked || e.target.matches("input,textarea,select")) return;
      const n = parseInt(e.key, 10);
      if (n >= 1 && n <= btns.length) { btns[n - 1].click(); e.preventDefault(); }
      else if (e.key === "Enter" && multi && sel.size && opts.mode !== "exam") submit();
    };
    return { isLocked: () => locked };
  }
  function lessonIndex(q) {
    const m = Content.mod(q.module); if (!m) return 0;
    const i = (m.lessons || []).findIndex((l) => l.id === q.lesson);
    return Math.max(0, i);
  }

  window.UI = { $, esc, kopi, kopiSVG, toast, sound, confetti, ring, bar, cheer, renderQuestion, isCorrect };
})();
