window.MODULES = window.MODULES || [];
MODULES.push({
  id: "subtidal", emoji: "🪸", title: "Subtidal Habitats, Corals & Sponges", short: "Subtidal",
  blurb: "Coral reefs, seagrass meadows and open water — plus the builders (Cnidaria) and filterers (Porifera) of the sea.",
  source: "Lecture 10 — Subtidal habitats of Singapore (Asst Prof Kyle Morgan)",
  lessons: [
    { id: "s-what", title: "What are subtidal habitats?",
      img: "img/sp/h-coralreef.jpg",
      body: `<p><b>Subtidal</b> = <b>permanently submerged</b> below low tide. Relatively stable temperature & salinity, but light, water movement and substrate change with depth.</p>
      <p>Intertidal = exposed at low tide → <b>high stress</b>. Subtidal = always wet → <b>more diverse and stable</b>.</p>
      <p>Singapore's three main subtidal habitats: <b>coral reefs</b>, <b>seagrass meadows</b>, <b>open waters</b>. They support <b>>60% of marine biodiversity</b>, provide food, coastal protection and blue carbon.</p>
      <p>Singapore: ~<b>250 coral species and 12 seagrass species</b>, right next to busy shipping lanes, industry and reclamation. Stressors: <b>high sedimentation, low light, urban pressure</b>. ~70–80% of the coastline is sea walls.</p>`,
      hook: `<b>250 corals, 12 seagrasses</b> — “two-fifty reefs and a dozen meadows.” 🪸🌱` },
    { id: "s-coral", title: "What are corals?",
      img: "img/sp/acropora.jpg", cap: "Branching Acropora coral",
      body: `<ul><li>Corals are <b>ANIMALS</b>: Phylum <b>Cnidaria</b>, Class Anthozoa, Order <b>Scleractinia</b> (hard corals)</li>
      <li><b>Colonial</b> — thousands of <b>polyps</b>, each with a mouth, stomach and tentacles</li>
      <li>Symbiosis with <b>zooxanthellae</b> (<i>Symbiodinium</i>): mutualistic dinoflagellate algae living in coral cells; photosynthesise using light, nutrients & CO₂; <b>>90% of what they make goes to the coral</b></li></ul>
      <p><b>Coral reefs</b>: built by calcium carbonate deposition; cover <b>0.1% of the seafloor but support >25% of marine species</b>; worth >US$375 billion/yr (~$50 bn in SE Asia). The “<b>HDBs of the sea</b>”.</p>
      <p>Where reefs grow: within <b>30°N–30°S</b>; best at 26–28 °C (29–31 °C in SE Asia); shallow, clear, <b>oligotrophic</b> (low-nutrient) water; photic zone 0–30 m; low sediment; fully marine; highest diversity in the Indo-Pacific.</p>`,
      hook: `A coral is an <b>animal running a solar-powered farm</b> ☀️🌾 — the algae (zooxanthellae) are the farmers paying >90% rent.` },
    { id: "s-sgreefs", title: "Singapore's special urban reefs",
      img: "img/sp/goniopora.jpg", cap: "Goniopora flower coral",
      body: `<p>Reefs: <b>Southern Islands</b> (Pulau Hantu, Kusu, St John's), <b>Cyrene Reef</b> (mid-channel, exposed at spring low tide), <b>Sisters' Islands Marine Park</b> (first marine park, <b>2014</b>, ~40 ha; floating boardwalk; coral nursery; reopened 2024; plans to plant ~100,000 corals).</p>
      <p>Singapore's reefs persist despite shipping and dredging:</p>
      <ul><li><b>High sedimentation, low light, high nutrients</b></li>
      <li>Mesophotic (dim) light reached at only <b>~5–8 m</b> (vs 60–100 m on clear reefs)</li>
      <li><b>Coastal darkening</b>: turbidity → light loss → corals <b>squeezed into shallow water</b> (vertical reef compression); sea-level rise may cut coral depth by a further 8–12%</li></ul>
      <p>Coral reef cores show reef growth began <b>~8,000 years ago</b>; ancient reefs were more diverse; sediment filtered species.</p>
      <p>Thermal stress → <b>bleaching</b> (e.g., 2024).</p>`,
      hook: `<b>Coastal darkening = turning down the lights</b> 💡⬇️ so corals crowd into the shallow end of the pool.` },
    { id: "s-adapt", title: "How corals survive murky water",
      body: `<ul><li><b>Morphology</b>: <b>massive</b> colonies resist burial; <b>platy</b> (plate-like) corals capture more light</li>
      <li><b>Physiology</b>: more <b>heterotrophic feeding</b> when light is low</li>
      <li><b>Mucus production</b> to shed trapped sediment</li>
      <li><b>Tentacle & cilia movement</b> to reject sediment</li>
      <li><b>Symbiont flexibility</b>: low-light-tolerant <i>Symbiodinium</i> clades</li>
      <li><b>High particle clearance</b> (e.g., <i>Goniastrea aspera</i> clears silt better than branching corals)</li>
      <li><b>Pigmentation</b> to improve light capture</li></ul>
      <p>Coral growth forms: <b>branching</b> (<i>Acropora</i>), <b>massive</b> (also submassive, columnar), <b>platy</b> (laminar/foliose), <b>encrusting</b>, <b>free-living</b>.</p>`,
      hook: `<b>“Big, Flat, Slimy, Wiggly”</b>: massive (resist burial), platy (catch light), mucus (wash), tentacles/cilia (sweep). 🧽` },
    { id: "s-fauna", title: "Reef residents",
      img: "img/sp/clownfish.jpg",
      body: `<ul><li><b>Cushion star</b> <i>Culcita novaeguineae</i> — eats live coral polyps & sediment; thick cushion shape deters predators</li>
      <li><b>Featherduster worms</b> (<i>Sabellastarte</i>) — sessile polychaetes filtering plankton with fan-like radioles</li>
      <li><b>Nudibranchs</b> (<i>Phyllidiella</i>, <i>Phyllidia</i>) — shell-less sea slugs, <b>aposematic</b> warning colours; eat sponges/hydroids</li>
      <li>Crabs & shrimps (gorgonian shrimp on sea fans)</li>
      <li><b>Giant clams</b> (<i>Tridacna</i>) — phototrophic symbiosis with algae</li>
      <li>Fishes: <b>butterflyfishes</b> (long snouts, bright ID patterns), <b>clownfish</b> (mutualism with anemones), <b>scorpionfish</b> (camouflaged ambushers, toxic spines), groupers & sweetlips (large predators)</li></ul>`,
      hook: `<b>Nudibranch = naked gills</b> wearing neon “don't eat me” colours 🚨.` },
    { id: "s-seagrass", title: "Seagrass meadows",
      img: "img/sp/enhalus.jpg", cap: "Enhalus acoroides — strap-like leaves",
      body: `<ul><li>Among the <b>most productive ecosystems on Earth</b></li>
      <li>The <b>only truly marine flowering plants (angiosperms)</b></li>
      <li>Grow on soft sediment in shallow water; found on all coasts except Antarctica; diversity peaks around Malaysia</li>
      <li>In Singapore: <b>Chek Jawa</b>, Cyrene Reef, Pulau Semakau, Labrador</li></ul>
      <p>Species: <b><i>Enhalus acoroides</i></b> (strap-like leaves), <b><i>Halophila ovalis</i></b> (small oval leaves), <b><i>Thalassia hemprichii</i></b> (turtle grass). Families Potamogetonaceae & Hydrocharitaceae.</p>
      <p>Adaptations: flexible blades, rhizomes anchor & store nutrients, salt glands, <b>underwater (hydrophilous) pollination</b>; mainly <b>dioecious</b>; reproduce sexually & asexually.</p>`,
      hook: `<b>Seagrass is a real grass-like FLOWERING plant</b> 🌸 (roots, stems, flowers, seeds). Seaweed (macroalgae) is not — no true roots/stems/leaves.` },
    { id: "s-seagrass2", title: "Why seagrass matters",
      img: "img/sp/halophila.jpg", cap: "Halophila ovalis — oval leaves",
      body: `<p>Functions:</p><ul><li><b>Nursery</b> for juvenile fish</li><li>Transition between mangroves and reefs</li><li><b>Blue carbon</b> storage</li><li>Food for <b>dugongs and turtles</b></li><li>Trap sediment, stabilise coasts: roots/rhizomes hold sediment; leaves dissipate waves → <b>less turbidity</b></li></ul>
      <p>Seagrass fauna: crabs, shrimps, hermit crabs; juvenile fish, gobies, pipefish, <b>seahorses</b>; sea cucumbers, urchins, snails.</p>
      <p>Threats: <b>unstable sediments & reclamation</b> (burial, habitat loss), <b>turbidity</b> (light below compensation point), <b>agricultural run-off</b> (nitrate/ammonium favours algae). Restoration efforts underway.</p>`,
      hook: `<b>Seagrass = the sea's nursery + cow pasture</b> 🍼🐄 (baby fish + dugongs).` },
    { id: "s-open", title: "Open waters",
      img: "img/sp/whaleshark.jpg",
      body: `<p>“<b>Pelagic highways</b>” beyond the reefs. In Singapore: <b>shallow (10–40 m)</b>, small, <b>high currents, heavy ship traffic</b>.</p>
      <ul><li><b>Monsoons</b> drive nutrient exchange; <b>plankton blooms in the NE monsoon</b>; tidal mixing boosts productivity</li>
      <li><b>SW monsoon</b> + Sumatran flows bring more sediment & turbidity; inter-monsoon = calmer, clearer</li></ul>
      <p>Pelagic adaptations: <b>streamlined bodies, countershading</b>, oil droplets & spines for buoyancy, <b>schooling</b>.</p>`,
      hook: `<b>NE = Nutrients Everywhere</b> (plankton blooms) 🌊; <b>SW = Silty Water</b>.` },
    { id: "s-cnidaria", title: "Cnidaria: the builders",
      img: "img/sp/carpetanemone.jpg", cap: "Giant carpet anemone",
      body: `<p>Phylum <b>Cnidaria</b>: soft-bodied, <b>stinging cells</b>, <b>radial symmetry</b>, <b>single body opening</b>, two life stages: <b>polyp and medusa</b>.</p>
      <p><b>Cnidocytes</b> contain <b>nematocysts</b> — microscopic harpoons fired on touch for prey capture & defence.</p>
      <p>Hard corals build reefs: thin tissue over a CaCO₃ skeleton; high photosynthesis → faster calcification.</p>
      <ol><li><b><i>Goniopora stokesi</i></b> — <b>flower coral</b>, long waving tentacles; catches plankton in turbid water</li>
      <li><b><i>Tubastraea</i> sp.</b> — <b>sun coral</b>, <b>azooxanthellate</b> (no algae), feeds <b>at night</b>, bright orange, <b>non-reef-building</b></li>
      <li><b><i>Stichodactyla gigantea</i></b> — <b>giant carpet anemone</b>, solitary polyp; hosts clownfish <i>Amphiprion ocellaris</i>; strong nematocysts</li></ol>`,
      hook: `<b>Cnid = nettle</b> 🌿⚡ — every cnidarian packs microscopic stinging harpoons.<br><b>Sun coral works the night shift</b> 🌙 (no algae, so no need for sun!).` },
    { id: "s-porifera", title: "Porifera: the filterers",
      img: "img/sp/barrelsponge.jpg", cap: "Giant barrel sponge",
      body: `<p>Phylum <b>Porifera</b> (sponges): <b>simplest multicellular animals</b>, <b>no true tissues or organs</b>, porous filter feeders.</p>
      <ul><li>Water enters through <b>ostia</b> (small pores) and exits through the <b>osculum</b> (big hole)</li>
      <li><b>Choanocytes</b> (collar cells) trap food particles</li><li>Skeleton of <b>spicules</b> or <b>spongin</b></li>
      <li>Adaptations: chemical defences, symbiotic microbes, self-cleaning pores</li></ul>
      <ol start="4"><li><b><i>Xestospongia testudinaria</i></b> — <b>giant barrel sponge</b>; filters thousands of litres daily; habitat for shrimps & crabs</li>
      <li><b><i>Cliona patera</i></b> — <b>Neptune's cup sponge</b>; thought extinct since the early 1900s, <b>rediscovered in Singapore in 2011</b>; can grow ~1 m tall & wide; fewer than 10 known; a symbol of marine conservation success</li></ol>`,
      hook: `<b>Ostia = “in” doors, Osculum = “out” chimney</b> 🚪➡️🏭.<br><b>Neptune's cup</b> — lost for 100 years, found again in 2011. 🏆` },
  ],
  species: [
    { id: "goniopora", common: "Flower coral", sci: "Goniopora stokesi", family: "Poritidae (Cnidaria)", group: "Cnidarian", where: "Turbid coral reefs and soft bottoms", fact: "Hard coral with long waving tentacles that captures plankton in turbid water", hook: "A bouquet of tentacles." },
    { id: "tubastraea", common: "Sun coral", sci: "Tubastraea sp.", family: "Dendrophylliidae (Cnidaria)", group: "Cnidarian", where: "Shaded reef walls and overhangs", fact: "Azooxanthellate, bright orange, non-reef-building coral that feeds at night", hook: "Night-shift coral with no algae." },
    { id: "carpetanemone", common: "Giant carpet anemone", sci: "Stichodactyla gigantea", family: "Stichodactylidae (Cnidaria)", group: "Cnidarian", where: "Shallow reefs and seagrass", fact: "Solitary polyp that hosts the clownfish Amphiprion ocellaris", hook: "Nemo's carpet." },
    { id: "barrelsponge", common: "Giant barrel sponge", sci: "Xestospongia testudinaria", family: "Petrosiidae (Porifera)", group: "Sponge", where: "Coral reefs", fact: "Huge barrel-shaped sponge filtering thousands of litres daily; home to shrimps & crabs", hook: "A barrel-shaped water filter." },
    { id: "neptunecup", common: "Neptune's cup sponge", sci: "Cliona patera", family: "Clionaidae (Porifera)", group: "Sponge", where: "Southern islands reefs", fact: "Thought extinct since the early 1900s, rediscovered in Singapore in 2011; up to ~1 m", hook: "Lost 100 years, found 2011." },
    { id: "enhalus", common: "Tape seagrass", sci: "Enhalus acoroides", family: "Hydrocharitaceae", group: "Seagrass", where: "Seagrass meadows (Chek Jawa, Cyrene, Semakau)", fact: "Seagrass with long strap-like leaves", hook: "Long ribbons." },
    { id: "halophila", common: "Spoon seagrass", sci: "Halophila ovalis", family: "Hydrocharitaceae", group: "Seagrass", where: "Seagrass meadows", fact: "Seagrass with small oval leaves", hook: "Little ovals." },
    { id: "thalassia", common: "Turtle grass", sci: "Thalassia hemprichii", family: "Hydrocharitaceae", group: "Seagrass", where: "Seagrass meadows", fact: "Seagrass known as turtle grass", hook: "Turtles' salad." },
    { id: "cushionstar", common: "Cushion star", sci: "Culcita novaeguineae", family: "Oreasteridae", group: "Reef invertebrate", where: "Coral reefs and seagrass", fact: "Sea star that eats coral polyps; thick cushion shape deters predators", hook: "A sea pillow." },
    { id: "giantclam", common: "Giant clam", sci: "Tridacna spp.", family: "Cardiidae", group: "Reef invertebrate", where: "Coral reefs", fact: "Clam with phototrophic algal symbionts, embedded in the reef", hook: "Solar-powered clam." },
  ],
  questions: [
    { id: "s1", lesson: "s-what", q: "Subtidal habitats are…", options: ["Exposed at every low tide", "Permanently submerged below low tide", "Only freshwater", "Found above high tide"], answer: [1], explain: "" },
    { id: "s2", lesson: "s-what", q: "Singapore's three main subtidal habitats are… <i>(select all that apply)</i>", options: ["Coral reefs", "Seagrass meadows", "Open waters", "Mudflats"], answer: [0, 1, 2], explain: "Mudflats are intertidal." },
    { id: "s3", lesson: "s-what", q: "About how many hard coral species does Singapore have?", options: ["25", "250", "2,500", "12"], answer: [1], explain: "~250 corals, 12 seagrasses." },
    { id: "s4", lesson: "s-coral", q: "Corals are…", options: ["Plants", "Algae", "Animals (Cnidaria)", "Rocks"], answer: [2], explain: "Class Anthozoa, order Scleractinia." },
    { id: "s5", lesson: "s-coral", q: "Zooxanthellae are…", options: ["Parasites of corals", "Mutualistic dinoflagellate algae inside coral cells", "Coral predators", "Sponges"], answer: [1], explain: ">90% of their products go to the coral." },
    { id: "s6", lesson: "s-coral", q: "Coral reefs cover ~0.1% of the seafloor but support…", options: [">5% of marine species", ">25% of marine species", ">75% of marine species", "All marine species"], answer: [1], explain: "" },
    { id: "s7", lesson: "s-coral", q: "Reefs typically grow in waters that are… <i>(select all that apply)</i>", options: ["Shallow and well lit", "Low in nutrients (oligotrophic)", "Low in sediment", "Brackish"], answer: [0, 1, 2], explain: "Fully marine." },
    { id: "s8", lesson: "s-sgreefs", q: "Singapore's first marine park, established in 2014, is…", options: ["Chek Jawa", "Sisters' Islands Marine Park", "Labrador Park", "Cyrene Reef"], answer: [1], explain: "" },
    { id: "s9", lesson: "s-sgreefs", q: "“Coastal darkening” causes…", options: ["Corals to grow deeper", "Corals to be squeezed into shallower water", "More light at depth", "Seagrass expansion"], answer: [1], explain: "Turbidity reduces light at depth → vertical reef compression." },
    { id: "s10", lesson: "s-sgreefs", q: "On Singapore's reefs, dim (mesophotic) light levels are reached at about…", options: ["5–8 m", "60–100 m", "200 m", "1 m"], answer: [0], explain: "vs 60–100 m on clear reefs." },
    { id: "s11", lesson: "s-adapt", q: "How do corals cope with high sediment? <i>(select all that apply)</i>", options: ["Mucus production", "Tentacle & ciliary sediment rejection", "Massive growth forms resisting burial", "Moving to deeper water"], answer: [0, 1, 2], explain: "Also symbiont flexibility, heterotrophic feeding, pigmentation." },
    { id: "s12", lesson: "s-adapt", q: "Which coral growth form is good at capturing light in shaded conditions?", options: ["Branching", "Platy (laminar/foliose)", "Free-living", "Encrusting"], answer: [1], explain: "" },
    { id: "s13", lesson: "s-fauna", q: "Nudibranchs' bright colours are an example of…", options: ["Crypsis", "Aposematism (warning)", "Countershading", "Mimicry of corals"], answer: [1], explain: "" },
    { id: "s14", lesson: "s-fauna", q: "The clownfish's relationship with sea anemones is…", options: ["Parasitism", "Mutualism", "Predation", "Competition"], answer: [1], explain: "Shelter & breeding for the fish." },
    { id: "s15", lesson: "s-seagrass", q: "Seagrasses are…", options: ["Seaweeds (macroalgae)", "The only truly marine flowering plants", "Mosses", "Ferns"], answer: [1], explain: "They have true roots, stems, leaves and flowers." },
    { id: "s16", lesson: "s-seagrass", q: "Which is a seagrass with small oval leaves?", options: ["<i>Enhalus acoroides</i>", "<i>Halophila ovalis</i>", "<i>Thalassia hemprichii</i>", "<i>Nypa fruticans</i>"], answer: [1], explain: "Enhalus = strap leaves; Thalassia = turtle grass." },
    { id: "s17", lesson: "s-seagrass", q: "Seagrass pollination happens…", options: ["By bees", "Underwater — pollen released into water (hydrophilous)", "By wind", "By bats"], answer: [1], explain: "" },
    { id: "s18", lesson: "s-seagrass2", q: "Ecosystem functions of seagrass meadows include… <i>(select all that apply)</i>", options: ["Nursery for juvenile fish", "Food for dugongs and turtles", "Blue carbon storage", "Increasing coastal turbidity"], answer: [0, 1, 2], explain: "They REDUCE turbidity." },
    { id: "s19", lesson: "s-seagrass2", q: "Threats to seagrass include… <i>(select all that apply)</i>", options: ["Reclamation and burial by mobile sediments", "Turbidity reducing light", "Agricultural run-off (nitrate/ammonium)", "Coral bleaching"], answer: [0, 1, 2], explain: "" },
    { id: "s20", lesson: "s-open", q: "Plankton blooms in Singapore's waters occur mainly during the…", options: ["NE monsoon", "SW monsoon", "Inter-monsoon", "They never occur"], answer: [0], explain: "SW monsoon brings sediment & turbidity." },
    { id: "s21", lesson: "s-open", q: "Pelagic adaptations include… <i>(select all that apply)</i>", options: ["Streamlined bodies", "Countershading", "Schooling", "Pneumatophores"], answer: [0, 1, 2], explain: "Pneumatophores are mangrove roots." },
    { id: "s22", lesson: "s-cnidaria", q: "Cnidarians are characterised by… <i>(select all that apply)</i>", options: ["Stinging cells (cnidocytes with nematocysts)", "Radial symmetry", "A single body opening", "Choanocytes"], answer: [0, 1, 2], explain: "Choanocytes = sponges." },
    { id: "s23", lesson: "s-cnidaria", q: "<i>Tubastraea</i> (sun coral) is unusual because it…", options: ["Is azooxanthellate, feeds at night and doesn't build reefs", "Is a sponge", "Hosts clownfish", "Is extinct"], answer: [0], explain: "" },
    { id: "s24", lesson: "s-cnidaria", q: "Which cnidarian hosts the clownfish <i>Amphiprion ocellaris</i>?", options: ["<i>Goniopora stokesi</i>", "<i>Stichodactyla gigantea</i>", "<i>Tubastraea</i>", "<i>Acropora</i>"], answer: [1], explain: "Giant carpet anemone." },
    { id: "s25", lesson: "s-porifera", q: "In a sponge, water ENTERS through the ___ and EXITS through the ___.", options: ["Osculum; ostia", "Ostia; osculum", "Mouth; anus", "Gills; pores"], answer: [1], explain: "" },
    { id: "s26", lesson: "s-porifera", q: "Sponges trap food with…", options: ["Nematocysts", "Choanocytes (collar cells)", "Tentacles", "Radioles"], answer: [1], explain: "" },
    { id: "s27", lesson: "s-porifera", q: "<i>Cliona patera</i> (Neptune's cup sponge) is notable because it…", options: ["Is the smallest sponge", "Was thought extinct and rediscovered in Singapore in 2011", "Is invasive", "Builds coral reefs"], answer: [1], explain: "Fewer than 10 individuals known." },
    { id: "s28", lesson: "s-porifera", q: "Sponges are the simplest multicellular animals because they…", options: ["Have no true tissues or organs", "Have one cell", "Are plants", "Lack skeletons"], answer: [0], explain: "Skeleton of spicules or spongin." },
  ],
  cheatsheet: `<ul>
    <li>Subtidal = always submerged; reefs, seagrass, open water; >60% of marine biodiversity. SG: ~250 corals, 12 seagrasses; high sediment, low light.</li>
    <li>Corals = animals (Cnidaria, Anthozoa, Scleractinia), colonial polyps + zooxanthellae (>90% transfer). Reefs: 0.1% seafloor, >25% marine spp; 30°N–S; clear, oligotrophic, shallow.</li>
    <li>SG reefs: Southern Islands, Cyrene, Sisters' Islands Marine Park (2014). Mesophotic at 5–8 m; coastal darkening squeezes corals shallow.</li>
    <li>Adaptations: massive/platy forms, mucus, tentacles & cilia, heterotrophy, symbiont flexibility, pigmentation.</li>
    <li>Seagrass: only marine angiosperms; Enhalus (strap), Halophila (oval), Thalassia (turtle grass); nursery, dugong food, blue carbon, reduce turbidity; threats: reclamation, turbidity, run-off.</li>
    <li>Open waters: 10–40 m, currents, ships; NE monsoon plankton, SW sediment.</li>
    <li>Cnidaria: nematocysts, radial, 1 opening, polyp/medusa. Goniopora (flower coral), Tubastraea (sun coral, azooxanthellate, night), Stichodactyla (carpet anemone, clownfish host).</li>
    <li>Porifera: no tissues; ostia in, osculum out; choanocytes; spicules/spongin. Xestospongia (barrel), Cliona patera (rediscovered 2011).</li></ul>`,
});
