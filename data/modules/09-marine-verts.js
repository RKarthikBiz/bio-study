window.MODULES = window.MODULES || [];
MODULES.push({
  id: "marine", emoji: "🐠", title: "Marine Vertebrates", short: "Marine verts",
  blurb: "Fishes, rays, sharks, dolphins and dugongs of Singapore's seas — plus the naturalists who first described them.",
  source: "Lecture 8 — Marine vertebrate organisms of Singapore (Zeehan Jaafar)",
  lessons: [
    { id: "mv-habitats", title: "Singapore's coastal & marine setting",
      img: "img/sp/h-coralreef.jpg",
      body: `<p>Singapore sits in an <b>archipelago</b> of islands and shallow seas, strongly influenced by <b>terrestrial inputs and tides</b>. Coastal & marine habitats: <b>mangroves, estuaries, seagrass meadows, mudflats, coral reefs</b>.</p>
      <p>Water shapes bodies: buoyancy and drag favour <b>streamlined shapes</b> and <b>countershading</b>; different groups solve the same problem differently (cuttlefish vs bony fishes).</p>
      <p><b>Chordates</b>: Tunicata (~3,000 spp: sea squirts, salps), Cephalochordata (~30: lancelets), <b>Vertebrata (~66,000)</b>. Vertebrates have a <b>vertebral column</b> replacing the notochord, spinal cord dorsal to it, gut ventral.</p>`,
      hook: `Countershading = <b>“dark back, light belly”</b> 🦈 — dark from above (looks like the deep), pale from below (looks like the bright surface).` },
    { id: "mv-fishes", title: "What is a fish?",
      body: `<ul><li>Most abundant & diverse vertebrates — <b>~30,000 species</b>, more than all other vertebrates combined</li>
      <li>Why so diverse: long evolutionary history, rapid speciation, huge range of adaptations</li>
      <li><b>Not monophyletic</b> — “fishes” = all non-tetrapod vertebrates</li>
      <li>Modern fish: aquatic vertebrate with <b>gills</b>, limbs as <b>fins</b>, usually scales</li>
      <li>“<b>Fish</b>” = one or more individuals of one species; “<b>fishes</b>” = more than one species</li></ul>
      <p>Range: −2 to 40 °C, pH 3 to >10, salinity 0–90 ppt, 4,000 m altitude to 7,000 m deep. <b>58% marine</b> (78% of those in <200 m); <b>42% freshwater</b> — in <1% of the world's water.</p>
      <p><b>900+</b> fish species reported from Singapore (many records unsubstantiated).</p>`,
      hook: `“<b>Fish</b>” on your plate, “<b>fishes</b>” in the field guide 🐟🐠🐡 — plural species = fishES.` },
    { id: "mv-history", title: "Early fish explorers",
      img: "img/sp/leatherjacket.jpg", cap: "Bearded Leatherjacket",
      body: `<ul><li><b>First marine fish described from Singapore</b>: <b>Bearded Leatherjacket</b> <i>Anacanthus barbatus</i> Gray 1830 (Monacanthidae) — from Major-General Hardwicke's collection. RDB <span class="st st-EN">EN</span>, IUCN VU.</li>
      <li><b>Pieter Bleeker</b> — military surgeon in Batavia, “<b>Grandfather of Indo-Pacific Ichthyology</b>”; described 1,925 species (743 valid)</li>
      <li><b>Comte de Castelnau</b> — naturalist & diplomat; 469 fish species; beautiful illustrations</li>
      <li>Modern: <b>Singapore Marine Fishes Expedition 2019</b> & CODEFISH-SG (morphology + DNA)</li></ul>`,
      hook: `<b>Bleeker the Grandfather</b> 👴 — “Bleek-er” bleakly described 1,925 fish but only 743 survived as valid names.` },
    { id: "mv-fish10", title: "Seven fishes to know",
      img: "img/sp/seahorse.jpg", cap: "Estuarine Seahorse",
      body: `<div class="tablewrap"><table class="t"><tr><th>Species</th><th>Family</th><th>SG RDB</th><th>IUCN</th></tr>
      <tr><td>Bearded Leatherjacket <i>Anacanthus barbatus</i></td><td>Monacanthidae</td><td>EN</td><td>VU</td></tr>
      <tr><td>Estuarine Seahorse <i>Hippocampus kuda</i></td><td>Syngnathidae</td><td><b>CR</b></td><td>VU</td></tr>
      <tr><td>Pink-speckled Shrimpgoby <i>Cryptocentrus melanopus</i></td><td>Gobiidae</td><td>LC</td><td>LC</td></tr>
      <tr><td>Copperband Butterflyfish <i>Chelmon rostratus</i></td><td>Chaetodontidae</td><td>LC</td><td>LC</td></tr>
      <tr><td>Common Clownfish <i>Amphiprion ocellaris</i></td><td>Pomacentridae</td><td>NT</td><td>LC</td></tr>
      <tr><td>Gold-spotted Mudskipper <i>Periophthalmus chrysospilos</i></td><td>Gobionellidae</td><td>VU</td><td>LC</td></tr>
      <tr><td>Whale Shark <i>Rhincodon typus</i></td><td>Rhincodontidae</td><td><b>CR</b></td><td>EN</td></tr>
      <tr><td>Blue-spotted Fantail Ray <i>Taeniura lymma</i></td><td>Dasyatidae</td><td>VU</td><td>LC</td></tr></table></div>
      <p>The Copperband Butterflyfish appeared on Singapore's <b>1962 nature stamp</b>; long snout to nibble coral. Clownfish live in anemones (mutualism). Mudskippers live on <b>mudflats</b>.</p>`,
      hook: `<b>Sea</b>horse & <b>whale</b> shark: both <b>CR</b> in Singapore — the “<b>Seriously Rare</b>” duo. 🐴🦈<br>Notice: Singapore status is often <b>worse</b> than global status — local populations are tiny.` },
    { id: "mv-mammals", title: "Marine mammals",
      img: "img/sp/dugong.jpg", cap: "Dugong",
      body: `<ul><li><b>Indo-Pacific Humpback Dolphin</b> <i>Sousa chinensis</i> (Delphinidae) · SG <span class="st st-CR">CR</span>, IUCN VU — pinkish-grey dolphins with a hump below the fin</li>
      <li><b>Dugong</b> <i>Dugong dugon</i> (Dugongidae) · SG <span class="st st-CR">CR</span>, IUCN VU — “sea cow” grazing on <b>seagrass</b>; records along the Johor & Singapore Straits from 1824–2020</li></ul>`,
      hook: `<b>Dugong = “Do-gong” to the seagrass buffet</b> 🌱 — a sea cow, not a fish.` },
    { id: "mv-conserve", title: "Threats & conservation",
      body: `<p>Threat drivers: land reclamation & coastal development, sedimentation, shipping, pollution, overharvesting/trade.</p>
      <p>Conservation approaches:</p>
      <ul><li><b>Gazetting protected areas</b> (e.g., Sisters' Islands Marine Park)</li>
      <li><b>Rehabilitation</b>, e.g., deploying <b>artificial reef units</b></li>
      <li><b>Citizen science</b> initiatives and inclusion</li>
      <li><b>Coordinated, collaborative</b> efforts across institutions and disciplines</li></ul>`,
      hook: `<b>P-R-C-C</b>: <b>P</b>rotect areas, <b>R</b>ebuild reefs, <b>C</b>itizen science, <b>C</b>ollaborate. 🤝` },
  ],
  species: [
    { id: "leatherjacket", common: "Bearded Leatherjacket", sci: "Anacanthus barbatus", family: "Monacanthidae", group: "Marine fish", status: "EN", where: "Seagrass and shallow coastal waters", fact: "The first marine fish species described from Singapore (Gray 1830)", hook: "Singapore's first described marine fish." },
    { id: "seahorse", common: "Estuarine Seahorse", sci: "Hippocampus kuda", family: "Syngnathidae", group: "Marine fish", status: "CR", where: "Estuaries and seagrass", fact: "Critically endangered in Singapore (IUCN: VU)", hook: "Seriously rare seahorse." },
    { id: "shrimpgoby", common: "Pink-speckled Shrimpgoby", sci: "Cryptocentrus melanopus", family: "Gobiidae", group: "Marine fish", status: "LC", where: "Sandy/muddy seabed burrows (shared with shrimps)", fact: "Goby described by Bleeker (1860), illustrated by Castelnau", hook: "Goby that shares a burrow with a shrimp." },
    { id: "copperband", common: "Copperband Butterflyfish", sci: "Chelmon rostratus", family: "Chaetodontidae", group: "Marine fish", status: "LC", where: "Coral reefs", fact: "Long-snouted reef fish featured on the 1962 Singapore nature stamp", hook: "Tweezers-nose on a stamp." },
    { id: "clownfish", common: "Common Clownfish", sci: "Amphiprion ocellaris", family: "Pomacentridae", group: "Marine fish", status: "NT", where: "Coral reefs, inside sea anemones", fact: "Lives mutualistically in sea anemones like the giant carpet anemone", hook: "Nemo in its anemone home." },
    { id: "mudskipper", common: "Gold-spotted Mudskipper", sci: "Periophthalmus chrysospilos", family: "Gobionellidae", group: "Marine fish", status: "VU", where: "Mudflats and mangroves", fact: "Amphibious fish common on mudflats", hook: "Fish that walks on mud." },
    { id: "whaleshark", common: "Whale Shark", sci: "Rhincodon typus", family: "Rhincodontidae", group: "Marine fish", status: "CR", where: "Open waters (occasional visitor)", fact: "World's largest fish; CR in Singapore, EN globally", hook: "Biggest fish, seriously rare here." },
    { id: "bluespotray", common: "Blue-spotted Fantail Ray", sci: "Taeniura lymma", family: "Dasyatidae", group: "Marine fish", status: "VU", where: "Coral reefs and sandy patches", fact: "Stingray with bright blue spots (Elasmobranchii)", hook: "Blue polka-dot stingray." },
    { id: "dolphin", common: "Indo-Pacific Humpback Dolphin", sci: "Sousa chinensis", family: "Delphinidae", group: "Marine mammal", status: "CR", where: "Coastal waters / Singapore Straits", fact: "Pinkish coastal dolphin, CR in Singapore", hook: "Pink dolphin with a hump." },
    { id: "dugong", common: "Dugong", sci: "Dugong dugon", family: "Dugongidae", group: "Marine mammal", status: "CR", where: "Seagrass meadows (Johor Strait)", fact: "Seagrass-grazing ‘sea cow’, CR in Singapore", hook: "Do-gong to the seagrass buffet." },
  ],
  questions: [
    { id: "mv1", lesson: "mv-habitats", q: "Which are coastal/marine habitats around Singapore? <i>(select all that apply)</i>", options: ["Mangroves", "Seagrass meadows", "Mudflats", "Hill streams"], answer: [0, 1, 2], explain: "Also estuaries and coral reefs." },
    { id: "mv2", lesson: "mv-habitats", q: "Countershading is…", options: ["Dark back, pale belly to camouflage in water", "Stripes for schooling", "Bright warning colours", "Changing colour at night"], answer: [0], explain: "" },
    { id: "mv3", lesson: "mv-fishes", q: "Which statements about fishes are true? <i>(select all that apply)</i>", options: ["They are the most diverse vertebrate group", "They form a monophyletic group", "~42% of species live in fresh water", "Over 900 species reported from Singapore"], answer: [0, 2, 3], explain: "Fishes are NOT monophyletic." },
    { id: "mv4", lesson: "mv-fishes", q: "“Fishes” (rather than “fish”) is used when referring to…", options: ["Many individuals of one species", "More than one species", "Cooked fish", "Freshwater species only"], answer: [1], explain: "" },
    { id: "mv5", lesson: "mv-history", q: "The first marine fish species described from Singapore was…", options: ["Estuarine Seahorse", "Bearded Leatherjacket", "Copperband Butterflyfish", "Common Clownfish"], answer: [1], explain: "<i>Anacanthus barbatus</i> Gray 1830." },
    { id: "mv6", lesson: "mv-history", q: "Who is called the “Grandfather of Indo-Pacific Ichthyology”?", options: ["Alfred Russel Wallace", "Pieter Bleeker", "Comte de Castelnau", "Henry Ridley"], answer: [1], explain: "Military surgeon in Batavia; 1,925 species described." },
    { id: "mv7", lesson: "mv-fish10", q: "Which marine vertebrates are Critically Endangered in Singapore? <i>(select all that apply)</i>", options: ["Estuarine Seahorse", "Whale Shark", "Dugong", "Copperband Butterflyfish"], answer: [0, 1, 2], explain: "Copperband is LC. Humpback dolphin is also CR." },
    { id: "mv8", lesson: "mv-fish10", q: "The Gold-spotted Mudskipper is typically found on…", options: ["Coral reefs", "Mudflats", "Open water", "Hill streams"], answer: [1], explain: "" },
    { id: "mv9", lesson: "mv-fish10", q: "Which fish was featured on Singapore's 1962 nature stamp series?", options: ["Copperband Butterflyfish", "Whale Shark", "Clownfish", "Seahorse"], answer: [0], explain: "" },
    { id: "mv10", lesson: "mv-fish10", q: "Compared to its global (IUCN) status, a species' Singapore status is often…", options: ["Less threatened", "More threatened", "Always the same", "Never assessed"], answer: [1], explain: "e.g., Seahorse CR (SG) vs VU (global)." },
    { id: "mv11", lesson: "mv-mammals", q: "Dugongs feed on…", options: ["Fish", "Seagrass", "Jellyfish", "Coral"], answer: [1], explain: "" },
    { id: "mv12", lesson: "mv-conserve", q: "Which conservation approaches were presented? <i>(select all that apply)</i>", options: ["Gazetting protected areas", "Deploying artificial reef units", "Citizen science", "Releasing aquarium fish"], answer: [0, 1, 2], explain: "Plus coordinated collaborative efforts." },
  ],
  cheatsheet: `<ul>
    <li>Habitats: mangroves, estuaries, seagrass, mudflats, reefs. Streamlining & countershading.</li>
    <li>Fishes: ~30k spp, not monophyletic; 58% marine, 42% freshwater; 900+ in SG. fish vs fishes.</li>
    <li>History: Bearded Leatherjacket first described (Gray 1830); Bleeker (grandfather, 1,925 spp); Castelnau (469).</li>
    <li>SG status: Leatherjacket EN · Seahorse CR · Shrimpgoby LC · Copperband LC · Clownfish NT · Mudskipper VU · Whale Shark CR · Blue-spotted ray VU · Humpback dolphin CR · Dugong CR.</li>
    <li>Conservation: protected areas, artificial reefs, citizen science, collaboration.</li></ul>`,
});
