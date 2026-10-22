window.MODULES = window.MODULES || [];
MODULES.push({
  id: "intertidal", emoji: "🦀", title: "Intertidal Habitats", short: "Intertidal",
  blurb: "Mangroves, mudflats, sandy & rocky shores and sea walls — life between the tides.",
  source: "Lecture 8b — Intertidal habitats (Weng Ngai Lam)",
  lessons: [
    { id: "t-types", title: "Between the tides",
      img: "img/sp/h-chekjawa.jpg",
      body: `<p><b>Intertidal habitats</b>: mangrove forests, mudflats, sandy shores, rocky shores, sea walls.</p>
      <p><b>Inter-/subtidal</b>: coral reefs, seagrass meadows, open waters.</p>
      <p>Created by interactions of <b>wave energy, sediment supply, geology and human modification</b>. <span class="key">Most of Singapore's coastline is reclaimed land</span>.</p>
      <p><b>Tides</b> shape everything: exposure/inundation sets animals' activity cycles. Singapore has <b>semi-diurnal tides: 2 highs and 2 lows a day</b>.</p>`,
      hook: `<b>Semi-diurnal = “twice a day”</b> 🌊🌊 — two high, two low, like brushing your teeth.` },
    { id: "t-stress", title: "Living in the intertidal zone",
      body: `<p>Abiotic stressors:</p><ul><li><b>Desiccation</b> (drying out at low tide)</li><li><b>Salinity</b> changes</li><li><b>Anoxia</b> (low oxygen in mud)</li></ul>
      <p>Biotic pressure: <b>predation from BOTH aquatic and terrestrial</b> predators (fish at high tide, birds at low tide).</p>
      <p>Examples: tree-climbing crabs escape high tide; mudskippers retreat into burrows.</p>`,
      hook: `Intertidal life is <b>“DSA”</b> hard mode: <b>D</b>esiccation, <b>S</b>alinity, <b>A</b>noxia — plus predators from land AND sea. 😵` },
    { id: "t-mangrove", title: "Mangrove forests",
      img: "img/sp/h-mangrove.jpg",
      body: `<ul><li>Coastal forests on <b>muddy, saline</b> soils; <b>nutrient-rich</b></li>
      <li>Trees adapted to <b>salinity and oxygen-poor soils</b> (aerial roots such as <i>Avicennia</i> pneumatophores)</li>
      <li>Dominated by <b>Rhizophoraceae</b> (e.g., <i>Bruguiera gymnorhiza</i>)</li>
      <li>Global importance: <b>blue carbon</b> stores, biodiversity habitat, <b>coastal protection</b></li>
      <li>Unique to the tropics; <b>highest diversity in Southeast Asia</b></li>
      <li>Show <b>zonation</b> from sea to land; Nypa palm grows at brackish river edges</li></ul>
      <p>Note: an <b>estuary</b> is the geomorphological system that contains mangrove ecosystems.</p>
      <p>Mangrove animals you know: Estuarine Crocodile, Chris Ang's Leaf Insect, Shore Pit Viper, mudskippers, tree-climbing crabs, migratory shorebirds. >87% of SG mangroves have been lost.</p>`,
      hook: `Mangroves = the coast's <b>“3 C” superheroes</b>: <b>C</b>arbon store, <b>C</b>oastal shield, <b>C</b>ritter nursery. 🦸` },
    { id: "t-mudflat", title: "Mudflats",
      img: "img/sp/h-mudflat.jpg",
      body: `<ul><li>“<b>Mangroves without the trees</b>” — associated with mangroves, sometimes an early successional stage</li>
      <li><b>Nutrient-rich</b>; support <b>high biodiversity despite structural simplicity</b></li>
      <li>Residents: <b>mudskippers</b> (<i>Periophthalmus chrysospilos</i>), <b>mangrove horseshoe crab</b> (<i>Carcinoscorpius rotundicauda</i>)</li>
      <li>Feeding grounds for <b>migratory shorebirds</b> (Common Redshank, Little Egret, whimbrels)</li></ul>`,
      hook: `Mudflat = a <b>buffet table at low tide</b> 🍽️ for migrating birds — plain-looking but packed with food.` },
    { id: "t-shores", title: "Sandy & rocky shores, sea walls",
      img: "img/sp/h-rockyshore.jpg",
      body: `<p><b>Sandy & rocky shores</b>: <b>higher wave energy</b>, low/no sediment input; differ in dominant substrate. Compared with mangroves/mudflats: <b>lower nutrients, less anoxic</b>. (They can still be muddy.) E.g., zoanthids on Changi rocky shores.</p>
      <p><b>Sandy beaches in Singapore are mostly man-made</b> with white sand imported from Malaysia, Indonesia etc.; biodiversity has recolonised some.</p>
      <p><b>Sea walls</b>: man-made “rocky shores” with <b>low structural complexity</b>. Adding <b>artificial enhancements</b> (more nooks/texture) can greatly increase biodiversity. ~70–80% of Singapore's coastline is sea walls/hard structures. Big change coming: the <b>Long Island</b> project.</p>`,
      hook: `<b>Sea wall = a flat apartment block with no rooms</b> 🧱 — add ledges and holes and the tenants move in.` },
    { id: "t-enjoy", title: "Intertidal walk tips & DON'Ts",
      img: "img/sp/horseshoecrab.jpg", cap: "Mangrove horseshoe crab",
      body: `<ul><li>Check <b>tide tables</b> — low tides <b>below ~0.2 m</b>, often at night, are best</li>
      <li>Gear: water shoes/diving booties, strong headlamp/torch, camera (+ macro)</li></ul>
      <p><b>Intertidal DON'Ts</b>:</p>
      <ul><li>Don't handle animals if you're not sure</li><li><b>Minimise trampling</b></li><li><b>Put rocks back</b> the way they were</li><li>Help clear trash you encounter</li></ul>
      <p>Places: Chek Jawa (Pulau Ubin), Labrador, Changi, Sentosa, Cyrene Reef, Sisters' Islands.</p>`,
      hook: `<b>Low tide < 0.2 m = Go time!</b> 🔦 Walk like a ninja, flip rocks back like you found them.` },
  ],
  species: [
    { id: "horseshoecrab", common: "Mangrove horseshoe crab", sci: "Carcinoscorpius rotundicauda", family: "Limulidae", group: "Intertidal", where: "Mudflats and mangroves", fact: "Living-fossil arthropod of mudflats (closer to arachnids than crabs)", hook: "A helmet with a tail on the mud." },
    { id: "bruguiera", common: "Bruguiera mangrove", sci: "Bruguiera gymnorhiza", family: "Rhizophoraceae", group: "Intertidal", where: "Mangroves", fact: "Rhizophoraceae mangrove tree — the family that dominates mangroves", hook: "Knee-roots in the mud." },
    { id: "avicennia", common: "Api-api mangrove", sci: "Avicennia spp.", family: "Acanthaceae", group: "Intertidal", where: "Mangroves (seaward edge)", fact: "Mangrove with pencil-like aerial roots (pneumatophores) for breathing in anoxic mud", hook: "Snorkel roots." },
  ],
  questions: [
    { id: "t1", lesson: "t-types", q: "Which are INTERTIDAL habitats? <i>(select all that apply)</i>", options: ["Mangrove forests", "Mudflats", "Rocky shores", "Open waters"], answer: [0, 1, 2], explain: "Open waters are subtidal." },
    { id: "t2", lesson: "t-types", q: "Singapore's tides are…", options: ["Diurnal: 1 high 1 low", "Semi-diurnal: 2 highs 2 lows per day", "Mixed weekly", "There are no tides"], answer: [1], explain: "" },
    { id: "t3", lesson: "t-types", q: "Most of Singapore's coastline is…", options: ["Natural mangrove", "Reclaimed land", "Rocky cliffs", "Coral reef"], answer: [1], explain: "" },
    { id: "t4", lesson: "t-stress", q: "Which abiotic stressors affect intertidal organisms? <i>(select all that apply)</i>", options: ["Desiccation", "Salinity changes", "Anoxia", "Freezing"], answer: [0, 1, 2], explain: "Plus predation from both land and sea." },
    { id: "t5", lesson: "t-mangrove", q: "Mangroves are dominated by which family?", options: ["Dipterocarpaceae", "Rhizophoraceae", "Arecaceae", "Casuarinaceae"], answer: [1], explain: "" },
    { id: "t6", lesson: "t-mangrove", q: "Why are mangroves globally important? <i>(select all that apply)</i>", options: ["Blue carbon storage", "Habitat for biodiversity", "Coastal protection", "Timber plantations"], answer: [0, 1, 2], explain: "" },
    { id: "t7", lesson: "t-mangrove", q: "Mangrove diversity is highest in…", options: ["The Caribbean", "Southeast Asia", "Africa", "Australia"], answer: [1], explain: "Mangroves are unique to the tropics." },
    { id: "t8", lesson: "t-mudflat", q: "Mudflats are often described as…", options: ["Coral reefs without coral", "Mangroves without the trees", "Beaches with mud", "Sea walls"], answer: [1], explain: "Nutrient-rich, high biodiversity despite simple structure." },
    { id: "t9", lesson: "t-mudflat", q: "Which animals are typical of mudflats? <i>(select all that apply)</i>", options: ["Mudskippers", "Mangrove horseshoe crab", "Migratory shorebirds", "Giant barrel sponge"], answer: [0, 1, 2], explain: "" },
    { id: "t10", lesson: "t-shores", q: "Compared with mangroves and mudflats, sandy and rocky shores have…", options: ["Higher nutrients and more anoxia", "Higher wave energy, lower nutrients, less anoxic substrate", "No wave energy", "More sediment input"], answer: [1], explain: "" },
    { id: "t11", lesson: "t-shores", q: "Singapore's sandy beaches are mostly…", options: ["Natural", "Man-made with imported sand", "Volcanic", "Coral rubble"], answer: [1], explain: "" },
    { id: "t12", lesson: "t-shores", q: "How can sea walls support more biodiversity?", options: ["Paint them", "Artificial enhancements that increase structural complexity", "Make them smoother", "Remove all algae"], answer: [1], explain: "" },
    { id: "t13", lesson: "t-enjoy", q: "Which are intertidal walk DON'Ts or good practices? <i>(select all that apply)</i>", options: ["Minimise trampling", "Put rocks back the way they were", "Don't handle animals if unsure", "Collect shells as souvenirs"], answer: [0, 1, 2], explain: "" },
    { id: "t14", lesson: "t-enjoy", q: "The best tides for intertidal exploring are…", options: ["High tides above 3 m", "Low tides below ~0.2 m", "Any tide", "Spring high tides"], answer: [1], explain: "Often at night." },
  ],
  cheatsheet: `<ul>
    <li>Intertidal: mangroves, mudflats, sandy & rocky shores, sea walls. Shaped by waves, sediment, geology, humans. Mostly reclaimed coast.</li>
    <li>Semi-diurnal tides (2H 2L). Stressors: desiccation, salinity, anoxia; predators from land & sea.</li>
    <li>Mangroves: muddy, saline, nutrient-rich, Rhizophoraceae; blue carbon, habitat, coastal protection; highest diversity SE Asia.</li>
    <li>Mudflats: mangroves without trees; mudskippers, horseshoe crabs, shorebirds.</li>
    <li>Sandy/rocky: high wave energy, low nutrients. Beaches mostly man-made. Sea walls: low complexity; enhancements help.</li>
    <li>Walks: low tide &lt;0.2 m; don't trample, put rocks back, don't handle, clear trash.</li></ul>`,
});
