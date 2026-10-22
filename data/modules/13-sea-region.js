window.MODULES = window.MODULES || [];
MODULES.push({
  id: "region", bonus: true, emoji: "🗺️", title: "Southeast Asia & Natural History (bonus)", short: "SE Asia",
  blurb: "Bonus context from the ES7033 tutorials: SE Asian regions and habitats Singapore lacks, gliders and pitcher plants, plus field-guiding skills.",
  source: "PG1 & PG2 tutorials (ES7033 — mostly not examined for ES5008) and video assignment feedback",
  lessons: [
    { id: "g-regions", title: "Four biogeographic regions",
      body: `<p>(ES7033 material — useful background, lower exam priority for ES5008.)</p>
      <div class="tablewrap"><table class="t"><tr><th>Region</th><th>Countries</th><th>Rainfall / dry season</th></tr>
      <tr><td><b>Indoburma</b></td><td>Myanmar, Thailand, Laos, Cambodia, Vietnam, S. China</td><td>Moderate & seasonal; strong dry season</td></tr>
      <tr><td><b>Sundaland</b></td><td>Malaysia, <b>Singapore</b>, (west) Indonesia, Brunei</td><td>High year-round; weak dry season</td></tr>
      <tr><td><b>Philippines</b></td><td>Philippines</td><td>High, seasonal in places</td></tr>
      <tr><td><b>Wallacea</b></td><td>(east) Indonesia, Timor-Leste</td><td>Moderate & seasonal; strong dry season</td></tr></table></div>`,
      hook: `<b>Singapore is in Sundaland</b> ☀️☔ — “Sun-da-land where it rains every day.”` },
    { id: "g-habitats", title: "Habitats NOT found in Singapore",
      img: "img/sp/h-karst.jpg", cap: "Limestone karst",
      body: `<ul><li><b>Seasonally dry habitats</b> (further from the equator): tropical dry forests (deciduous trees, e.g., teak) and savannahs (open canopy + grass; often degraded dry forest; fire & herbivores)</li>
      <li><b>Peat swamp forests</b>: inland, non-tidal, waterlogged, <b>ombrotrophic raised domes</b> (rain-fed), very acidic & nutrient-poor. (Singapore's freshwater swamp is minerotrophic — fed by streams.)</li>
      <li><b>Mountain habitats</b> (> ~1,000 m): dipterocarps lose dominance; mossy/cloud forests; <b>diversity decreases but endemism increases</b>; SE Asia holds half of all tropical mountain forests</li>
      <li><b>Limestone karsts</b>: alkaline CaCO₃ islands in acidic landscapes; complex terrain; <b>high endemism</b> (geckos, land snails) due to isolation</li></ul>`,
      hook: `Singapore is <b>flat, wet, and acidic</b> — so it lacks the <b>dry</b>, the <b>high</b>, the <b>peaty-domed</b> and the <b>limey</b> habitats.` },
    { id: "g-gliders", title: "Case study: why so many gliders?",
      img: "img/sp/colugo.jpg",
      body: `<p>SE Asia has <b>~60 gliding vertebrates</b>; Africa and the Americas have <b>fewer than 5 each</b>.</p>
      <p>Likely an adaptation to <b>tall dipterocarp forests</b> (high canopy, low temperature seasonality).</p>
      <p>Gliders: flying frogs (~90 spp, e.g., Wallace's flying frog), flying squirrels (~50), <b>flying dragons <i>Draco</i></b> (~40), gliding geckos (~20), flying snakes <i>Chrysopelea</i> (~5), <b>colugos</b> (2).</p>`,
      hook: `<b>Tall trees → long drops → glide!</b> 🪂 Dipterocarp forests built a glider club.` },
    { id: "g-nepenthes", title: "Case study: pitcher plants & poor soils",
      img: "img/sp/nepenthes.jpg",
      body: `<p><i>Nepenthes</i>: carnivorous plants limited by <b>nitrogen and phosphorus</b>, supplied by prey caught in <b>passive pitfall traps</b> (modified leaf blades, fluid-filled, nectar-baited). ~180 species, centre of diversity in SE Asia; <b>3 native to Singapore</b>.</p>
      <p>Trade-off: making pitchers costs energy, so carnivory pays off only where <b>soil nutrients are poor but light is plentiful</b> — e.g., open, nutrient-poor resam scrubland and heath forests.</p>
      <p>Big idea: <b>biodiversity is not evenly spread</b>; its patterns are <b>constrained by natural history</b>.</p>`,
      hook: `<b>Carnivory = expensive takeaway</b> 🥡 — only worth it when the fridge (soil) is empty and the sun is out.` },
    { id: "g-guide", title: "Being a good nature guide",
      body: `<p>Tips from the video assignment (useful for discussion-style questions):</p>
      <ul><li><b>Show, don't tell</b>: observe behaviour yourself (feeding, movement) rather than reciting internet facts</li>
      <li><b>Use the habitat classifications taught</b> — “secondary forest” isn't enough; say NSDF, Adinandra belukar, abandoned plantation, or ESDF</li>
      <li>Trees: show fallen leaves, fruits, saplings; touch and smell leaves</li>
      <li>Conservation message: lead from observations (e.g., Zanzibar yam infestation → join Friends of BTNR to remove invasives)</li></ul>
      <p>Biodiversity records: document <b>who/what, where, when, what happened</b>, and what it adds to existing knowledge.</p>`,
      hook: `<b>“Stay longer, look closer, say why.”</b> 👀` },
  ],
  questions: [
    { id: "g1", lesson: "g-regions", q: "Singapore belongs to which biogeographic region?", options: ["Indoburma", "Sundaland", "Wallacea", "Philippines"], answer: [1], explain: "High year-round rainfall; weak dry season." },
    { id: "g2", lesson: "g-habitats", q: "Which habitats are NOT found in Singapore? <i>(select all that apply)</i>", options: ["Limestone karsts", "Montane cloud forests", "Peat swamp forests (ombrotrophic domes)", "Mangroves"], answer: [0, 1, 2], explain: "Mangroves are found in Singapore." },
    { id: "g3", lesson: "g-habitats", q: "Limestone karsts have high endemism mainly because…", options: ["They are very wet", "They are isolated alkaline habitats with specialised microhabitats", "They are cold", "They are near cities"], answer: [1], explain: "e.g., geckos and land snails." },
    { id: "g4", lesson: "g-habitats", q: "On tropical mountains, as elevation increases…", options: ["Diversity increases and endemism decreases", "Diversity decreases but endemism increases", "Both increase", "Both decrease"], answer: [1], explain: "" },
    { id: "g5", lesson: "g-gliders", q: "SE Asia's high number of gliding vertebrates is most likely linked to…", options: ["Cold winters", "Tall dipterocarp forests", "Open savannahs", "Mangroves"], answer: [1], explain: "~60 species vs <5 in Africa or the Americas." },
    { id: "g6", lesson: "g-nepenthes", q: "Nepenthes pitcher plants do best in habitats with…", options: ["Rich soil and deep shade", "Nutrient-poor soil and plenty of light", "Salt water", "Alkaline limestone only"], answer: [1], explain: "Carnivory supplies N and P; pitchers are costly." },
    { id: "g7", lesson: "g-guide", q: "Which habitat description would the lecturer prefer in a nature video?", options: ["“Regenerating secondary forest”", "“Adinandra belukar (a native species-dominated secondary forest)”", "“Jungle”", "“Green area”"], answer: [1], explain: "Use the classifications taught." },
  ],
  cheatsheet: `<ul>
    <li>Regions: Indoburma (seasonal), Sundaland (SG; wet all year), Philippines, Wallacea (seasonal).</li>
    <li>Not in SG: seasonally dry forests/savannahs, peat swamp (ombrotrophic domes), mountains (>1,000 m; ↓diversity ↑endemism), limestone karsts (alkaline, high endemism).</li>
    <li>~60 gliding vertebrates in SE Asia ↔ tall dipterocarp forests.</li>
    <li>Nepenthes: N & P from prey; ~180 spp; 3 in SG; best in poor soil + high light.</li>
    <li>Guiding: show don't tell; use precise habitat names.</li></ul>`,
});
