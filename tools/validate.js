#!/usr/bin/env node
// Checks content integrity: unique ids, valid answers, lesson refs, image files. Usage: node tools/validate.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((s) => s.startsWith("data/") || s === "js/content.js");
const ctx = { window: {}, console };
ctx.window.window = ctx.window;
vm.createContext(ctx);
for (const s of scripts) vm.runInContext(fs.readFileSync(path.join(root, s), "utf8").replace(/\bwindow\./g, "window.").replace(/^MODULES/gm, "window.MODULES"), ctx, { filename: s });
const W = ctx.window, C = W.Content;
const errs = [];
const ids = new Set();
const img = (p) => p && !fs.existsSync(path.join(root, p)) && errs.push(`missing image ${p}`);
C.modules.forEach((m) => {
  const lids = new Set((m.lessons || []).map((l) => l.id));
  (m.lessons || []).forEach((l) => { if (ids.has(l.id)) errs.push(`dup lesson id ${l.id}`); ids.add(l.id); img(l.img); });
  (m.questions || []).forEach((q) => { if (q.lesson && !lids.has(q.lesson)) errs.push(`${q.id}: unknown lesson ${q.lesson}`); });
  (m.species || []).forEach((s) => img(C.imgPath(s)));
});
const seen = new Set();
C.all.forEach((x) => {
  if (seen.has(x.id)) errs.push(`dup item id ${x.id}`); seen.add(x.id);
  if (x.kind === "q") {
    if (!x.answer.length || x.answer.some((a) => a < 0 || a >= x.options.length)) errs.push(`${x.id}: bad answer`);
    if (new Set(x.options).size !== x.options.length) errs.push(`${x.id}: duplicate options`);
    if (!x.auto && !x.explain && x.explain !== "") errs.push(`${x.id}: no explanation`);
    img(x.img);
  }
});
// raw declared ids across modules (catches collisions that content.js silently drops)
const raw = {};
C.modules.forEach((m) => [...(m.questions || []), ...(m.cards || [])].forEach((x) => (raw[x.id] = (raw[x.id] || 0) + 1)));
Object.entries(raw).filter(([, n]) => n > 1).forEach(([id]) => errs.push(`declared twice: ${id}`));
const q = C.all.filter((x) => x.kind === "q"), cards = C.all.filter((x) => x.kind === "card");
console.log(`${C.modules.length} modules, ${C.modules.reduce((a, m) => a + m.lessons.length, 0)} lessons, ${C.species.length} species`);
console.log(`${q.length} questions (${q.filter((x) => !x.auto).length} hand-written, ${q.filter((x) => x.auto).length} generated), ${cards.length} flashcards`);
C.modules.forEach((m) => console.log(`  ${m.id.padEnd(12)} lessons ${String(m.lessons.length).padStart(2)}  items ${C.byModule(m.id).length}`));
if (errs.length) { console.error("\nERRORS:\n" + errs.join("\n")); process.exit(1); }
console.log("OK");
