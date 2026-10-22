/* Hash router + theme. */
(function () {
  const V = Views;
  const routes = [
    [/^\/?$/, () => V.home(), "home"],
    [/^\/modules$/, () => V.modules(), "modules"],
    [/^\/module\/([\w-]+)$/, (m) => V.moduleView(m[1]), "modules"],
    [/^\/learn\/([\w-]+)\/(\d+)$/, (m) => V.learn(m[1], m[2]), "modules"],
    [/^\/flash\/([\w-]+)$/, (m) => V.flash(m[1]), "modules"],
    [/^\/review$/, () => V.review(), "review"],
    [/^\/quiz$/, () => V.quiz(), "quiz"],
    [/^\/quiz\/([\w-]+)$/, (m) => V.quiz(m[1]), "quiz"],
    [/^\/exam$/, () => V.exam(), "exam"],
    [/^\/photoid$/, () => V.photoid(), "photoid"],
    [/^\/species$/, () => V.speciesView(), "species"],
    [/^\/species\/([\w-]+)$/, (m) => V.speciesView(m[1]), "species"],
    [/^\/tricks$/, () => V.tricks(), "tricks"],
    [/^\/cheats$/, () => V.cheats(), "cheats"],
    [/^\/cheats\/([\w-]+)$/, (m) => V.cheats(m[1]), "cheats"],
    [/^\/weak$/, () => V.weak(), "weak"],
    [/^\/search$/, () => V.search(), "search"],
    [/^\/settings$/, () => V.settings(), "settings"],
  ];

  function route() {
    V.clearTimers(); V.setKeys(null);
    const path = location.hash.replace(/^#/, "") || "/";
    document.getElementById("nav").classList.remove("open");
    for (const [re, fn, nav] of routes) {
      const m = path.match(re);
      if (m) {
        document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("on", a.dataset.nav === nav));
        fn(m); V.updateBadges();
        window.scrollTo(0, 0);
        return;
      }
    }
    V.notFound();
  }

  function applyTheme() {
    const t = Store.state.settings.theme;
    if (t === "auto") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.dataset.theme = t;
  }

  window.App = { applyTheme };
  applyTheme();
  document.getElementById("moreBtn").onclick = (e) => { e.stopPropagation(); document.getElementById("nav").classList.toggle("open"); };
  document.addEventListener("click", (e) => { const n = document.getElementById("nav"); if (n.classList.contains("open") && !n.contains(e.target)) n.classList.remove("open"); });
  addEventListener("hashchange", route);
  // sessions/exams render in place, so a link to the current hash must still re-render the page
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute("href") === (location.hash || "#/")) { e.preventDefault(); route(); }
  });
  route();
})();
