window.MODULES = window.MODULES || [];
MODULES.push({
  id: "molluscs", emoji: "🐚", title: "Marine Molluscs", short: "Molluscs",
  blurb: "Snails, cowries, cockles, fan shells and octopus — plus the vanishing giant clams.",
  source: "Lecture 12b — Marine Molluscs (Dr Neo Mei Lin); Lecture 12a — Marine misc",
  lessons: [
    { id: "o-what", title: "What is a mollusc?",
      body: `<p>Molluscs are <b>invertebrates</b> (no backbone): <b>soft-bodied</b>, often with a protective external shell of <b>calcium carbonate</b> (some have lost it). They live in oceans, fresh water and on land. Body: <b>one unsegmented segment</b>; mostly marine.</p>
      <p><b>Four universal features</b> of modern molluscs:</p>
      <ol><li><b>Muscular foot</b> — usually for movement; shape varies</li>
      <li><b>Mantle</b> — fleshy tissue covering the body; secretes the shell</li>
      <li><b>Radula</b> — the main feeding tool (<b>except in bivalves</b>)</li>
      <li><b>Nervous system</b> with <b>two pairs of main nerve cords</b></li></ol>
      <p>The <b>Coral Triangle</b> is a hotspot of mollusc diversity, and Singapore shores have high mollusc diversity.</p>`,
      hook: `<b>“Feet, Mantle, Radula, Nerves”</b> → “<b>F</b>riendly <b>M</b>olluscs <b>R</b>arely <b>N</b>ip.” 🐌 (Bivalves have no radula — they can't nip at all!)` },
    { id: "o-classes", title: "Eight classes of molluscs",
      img: "img/sp/octopus.jpg", cap: "Octopus (Cephalopoda)",
      body: `<p>There are <b>eight</b> monophyletic classes of living molluscs:</p>
      <ol><li><b>Bivalves</b> (clams, cockles, oysters)</li><li><b>Gastropods</b> (snails, slugs, nudibranchs, cowries)</li><li><b>Cephalopods</b> (octopus, squid, cuttlefish)</li>
      <li>Worm-molluscs (Solenogastres)</li><li>Worm-molluscs (Caudofoveata)</li><li><b>Eight-shelled chitons</b> (Polyplacophora)</li>
      <li>Tubular infaunal predators / tusk shells (Scaphopoda)</li><li>Headless limpets (Monoplacophora)</li></ol>
      <p>The five must-know species come from the big three: <b>Gastropoda, Bivalvia, Cephalopoda</b>.</p>`,
      hook: `Big three = <b>“Gastro, Bi, Cephalo”</b>: <b>tummy-foot</b> (crawls on its belly), <b>two doors</b> (two shells), <b>head-foot</b> (arms on its head). 🐌🦪🐙` },
    { id: "o-gastro", title: "Gastropods: Bazillion snail & ovum cowrie",
      img: "img/sp/bazillion.jpg", cap: "Bazillion snail",
      body: `<ul><li><b>Bazillion snail</b> <i>Batillaria zonalis</i> (Gastropoda): <b>sandy and muddy areas</b>; densities reach <b>hundreds per m²</b> — hence “bazillion”</li>
      <li><b>Ovum cowrie</b> <i>Erronea ovum</i> (Gastropoda): <b>sandy and muddy areas</b>; cowrie <b>shells were used as currency</b></li></ul>
      <p>Other gastropods shown: spiral melongena, spider conch, tiger cowrie, sundial shells (Architectonicidae), plus colourful nudibranchs, abalone, bubble snails and bonnet snails.</p>`,
      hook: `<b>Bazillion = a bazillion snails per square metre</b> 🔢. <b>Ovum cowrie = egg-shaped money</b> 🥚💰.` },
    { id: "o-bivalve", title: "Bivalves: cockles & fan shells",
      img: "img/sp/fanshell.jpg", cap: "Fan shell (Pinnidae)",
      body: `<ul><li><b>Cockle</b> (family <b>Cardiidae</b>, Bivalvia): <b>sandy areas</b>; a <b>true cockle</b> — NOT related to “see-hum”</li>
      <li><b>Fan shell</b> (family <b>Pinnidae</b>, Bivalvia): <b>seagrass meadows</b>; <b>often overlooked because it's mostly buried</b> in the sediment</li></ul>
      <p><b>The “imposter cockle”</b>: blood cockles (<b>see-hum</b>, <i>Tegillarca granosa</i>) are actually <b>ark clams (family Arcidae)</b>. Seafood traders call many small edible bivalves “cockles”, but true cockles are Cardiidae — the same family as giant clams!</p>
      <p>Other bivalves: hammer oyster, Venus clam, window-pane clam, scallops.</p>`,
      hook: `<b>See-hum is a fake cockle</b> 🎭 (an ark clam). <b>Real cockles = Cardiidae = giant clam's family</b> ❤️ (cardi = heart, heart cockles).` },
    { id: "o-octopus", title: "Cephalopods: octopus",
      img: "img/sp/octopus.jpg",
      body: `<p><b>Octopus</b> (family <b>Octopodidae</b>, Cephalopoda): found in <b>coral rubble and seagrass</b>; <b>shy creatures that hide in their burrows all day</b>.</p>
      <p>Other cephalopods on Singapore shores: glittering cuttlefish, pygmy squid, bobtail squid, and the <b>blue-ringed octopus</b> (highly venomous — never touch).</p>`,
      hook: `<b>Octopus = shy homebody</b> 🏠🐙 — hides in its burrow all day, comes out to play in the rubble.` },
    { id: "o-giantclam", title: "Giant clams: kings of bivalves",
      img: "img/sp/fluted.jpg", cap: "Fluted giant clam, Tridacna squamosa",
      body: `<ul><li><b>Largest marine bivalves</b>; subfamily Tridacninae in <b>Cardiidae</b> (true cockle family)</li>
      <li><b>Symbiosis with photosynthetic microalgae</b></li>
      <li>Good <b>bioindicators</b> because adults are <b>sessile</b></li><li><b>Ecosystem engineers</b> on coral reefs</li></ul>
      <p><b>Why are they disappearing?</b> Present for centuries (500-year-old shells in archaeology); in the <b>19th century</b> strong exploitation — Singapore was a famous <b>shell-collecting centre</b>. Since then: no local exploitation, but <b>rapid habitat loss from coastal development in the 1960s–70s</b>. Now <b>protected under the Wildlife Act</b>.</p>
      <div class="tablewrap"><table class="t"><tr><th>Species</th><th>Last recorded</th><th>Singapore RDB</th></tr>
      <tr><td><i>Hippopus hippopus</i></td><td>1963</td><td>Presumed Nationally Extinct</td></tr>
      <tr><td><i>Tridacna gigas</i></td><td>1866</td><td>Presumed Nationally Extinct</td></tr>
      <tr><td><i>Tridacna crocea</i></td><td>Extant</td><td>EN</td></tr>
      <tr><td><i>Tridacna squamosa</i></td><td>Extant</td><td>CR</td></tr>
      <tr><td><i>Tridacna maxima</i></td><td>Extant (?)</td><td>CR</td></tr></table></div>
      <p>Restocking considerations: broodstock origin, genetic diversity, restocking age/size and numbers (minimum viable population), and sites (source vs sink).</p>`,
      hook: `<b>Giant clams: harvested in the 1800s, bulldozed in the 1960s–70s.</b> 🏗️ The two biggest (<i>gigas</i>, <i>Hippopus</i>) are gone from Singapore.` },
    { id: "o-land", title: "Land & freshwater snails",
      img: "img/sp/treesnail.jpg", cap: "Temasek green tree snail",
      body: `<p>Not all molluscs are marine:</p>
      <ul><li><b>Malayan trumpet snail</b> <i>Melanoides tuberculata</i> — one of only a <b>few native freshwater snails</b></li>
      <li><b>Tropical leatherleaf slug</b> <i>Laevicaulis alte</i> — common in <b>parks and gardens</b></li>
      <li><b>Giant African land snail</b> <i>Achatina fulica</i> — <b>invasive</b>, common in gardens and parks</li>
      <li><b>Temasek green tree snail</b> <i>Amphidromus atricallosus</i> — beautiful <b>arboreal</b> snail of <b>native species-dominated forests</b></li></ul>`,
      hook: `<b>African snail = Alien</b> (invasive) 👽; <b>Temasek tree snail = Treetop native</b> 🌳.` },
    { id: "o-five", title: "The 5 must-know molluscs (table)",
      body: `<div class="tablewrap"><table class="t"><tr><th>Species</th><th>Class</th><th>Habitat</th><th>Fun fact</th></tr>
      <tr><td><i>Batillaria zonalis</i> (Bazillion snail)</td><td>Gastropoda</td><td>Sandy & muddy areas</td><td>Densities up to 100s per m²</td></tr>
      <tr><td><i>Erronea ovum</i> (Ovum cowrie)</td><td>Gastropoda</td><td>Sandy & muddy areas</td><td>Shells used as currency</td></tr>
      <tr><td>Cardiidae (Cockle)</td><td>Bivalvia</td><td>Sandy areas</td><td>True cockle, not related to “see-hum”</td></tr>
      <tr><td>Pinnidae (Fan shell)</td><td>Bivalvia</td><td>Seagrass meadows</td><td>Overlooked — mostly buried</td></tr>
      <tr><td>Octopodidae (Octopus)</td><td>Cephalopoda</td><td>Coral rubble, seagrass</td><td>Shy; hides in burrows all day</td></tr></table></div>`,
      hook: `<b>2-2-1</b>: two gastropods (snail + cowrie, both sandy/muddy), two bivalves (cockle on sand, fan shell in seagrass), one cephalopod (octopus in rubble).` },
  ],
  species: [
    { id: "bazillion", common: "Bazillion snail", sci: "Batillaria zonalis", family: "Batillariidae (Gastropoda)", group: "Mollusc", where: "Sandy and muddy areas", fact: "Gastropod reaching densities of hundreds per m²", hook: "A bazillion per square metre." },
    { id: "ovumcowrie", common: "Ovum cowrie", sci: "Erronea ovum", family: "Cypraeidae (Gastropoda)", group: "Mollusc", where: "Sandy and muddy areas", fact: "Cowrie whose shells were used as a form of currency", hook: "Egg-shaped money." },
    { id: "cockle", common: "Cockle", sci: "Family Cardiidae", family: "Cardiidae (Bivalvia)", group: "Mollusc", where: "Sandy areas", fact: "A true cockle species — not related to ‘see-hum’ (an ark clam)", hook: "The real cockle; see-hum is the imposter." },
    { id: "fanshell", common: "Fan shell", sci: "Family Pinnidae", family: "Pinnidae (Bivalvia)", group: "Mollusc", where: "Seagrass meadows", fact: "Bivalve often overlooked because it is mostly buried", hook: "A fan hiding in the seagrass sand." },
    { id: "octopus", common: "Octopus", sci: "Family Octopodidae", family: "Octopodidae (Cephalopoda)", group: "Mollusc", where: "Coral rubble and seagrass", fact: "Shy cephalopod that hides in its burrow all day", hook: "Shy homebody." },
    { id: "fluted", common: "Fluted giant clam", sci: "Tridacna squamosa", family: "Cardiidae: Tridacninae (Bivalvia)", group: "Mollusc", status: "CR", where: "Coral reefs", fact: "Giant clam with photosynthetic symbionts; protected under the Wildlife Act", hook: "King of bivalves." },
    { id: "gals", common: "Giant African land snail", sci: "Achatina fulica", family: "Achatinidae (Gastropoda)", group: "Mollusc", status: "NA", where: "Gardens and parks", fact: "Invasive land snail", hook: "Alien snail." },
    { id: "treesnail", common: "Temasek green tree snail", sci: "Amphidromus atricallosus", family: "Camaenidae (Gastropoda)", group: "Mollusc", where: "Native species-dominated forests (arboreal)", fact: "Beautiful arboreal native land snail", hook: "Treetop native." },
    { id: "leatherleaf", common: "Tropical leatherleaf slug", sci: "Laevicaulis alte", family: "Veronicellidae (Gastropoda)", group: "Mollusc", where: "Parks and gardens", fact: "Common shell-less land slug of parks and gardens", hook: "A leather wallet that crawls." },
  ],
  questions: [
    { id: "o1", lesson: "o-what", q: "Which are the universal features of modern molluscs? <i>(select all that apply)</i>", options: ["Muscular foot", "Mantle", "Radula (except bivalves)", "Segmented body"], answer: [0, 1, 2], explain: "Also a nervous system with two pairs of main nerve cords. Molluscs are unsegmented." },
    { id: "o2", lesson: "o-what", q: "Which mollusc group lacks a radula?", options: ["Gastropods", "Bivalves", "Cephalopods", "Chitons"], answer: [1], explain: "" },
    { id: "o3", lesson: "o-what", q: "What does the mantle do?", options: ["Feeds", "Secretes the shell", "Breathes", "Moves the animal"], answer: [1], explain: "" },
    { id: "o4", lesson: "o-what", q: "Mollusc shells are made of…", options: ["Chitin", "Calcium carbonate", "Keratin", "Silica"], answer: [1], explain: "" },
    { id: "o5", lesson: "o-classes", q: "How many classes of living molluscs are there?", options: ["3", "5", "8", "12"], answer: [2], explain: "Bivalves, gastropods, cephalopods, two worm-mollusc classes, chitons, tusk shells, monoplacophorans." },
    { id: "o6", lesson: "o-classes", q: "Chitons belong to which class?", options: ["Polyplacophora (eight-shelled)", "Scaphopoda", "Monoplacophora", "Gastropoda"], answer: [0], explain: "" },
    { id: "o7", lesson: "o-gastro", q: "Why is <i>Batillaria zonalis</i> called the Bazillion snail?", options: ["It's very large", "It reaches densities of hundreds per m²", "It's worth a lot", "It lives a long time"], answer: [1], explain: "Sandy and muddy areas." },
    { id: "o8", lesson: "o-gastro", q: "Which mollusc's shells were used as a form of currency?", options: ["Fan shell", "Ovum cowrie", "Bazillion snail", "Cockle"], answer: [1], explain: "<i>Erronea ovum</i>." },
    { id: "o9", lesson: "o-bivalve", q: "Blood cockles (“see-hum”) are actually…", options: ["True cockles (Cardiidae)", "Ark clams (Arcidae)", "Giant clams", "Fan shells"], answer: [1], explain: "The ‘imposter cockle’." },
    { id: "o10", lesson: "o-bivalve", q: "Why are fan shells (Pinnidae) often overlooked?", options: ["They are tiny", "They are mostly buried underground", "They only come out at night", "They're camouflaged as coral"], answer: [1], explain: "Found in seagrass meadows." },
    { id: "o11", lesson: "o-bivalve", q: "Giant clams belong to which family?", options: ["Arcidae", "Cardiidae (true cockles)", "Pinnidae", "Octopodidae"], answer: [1], explain: "Subfamily Tridacninae." },
    { id: "o12", lesson: "o-octopus", q: "Octopuses on Singapore shores are best described as…", options: ["Bold daytime hunters", "Shy creatures that hide in burrows all day", "Seagrass grazers", "Filter feeders"], answer: [1], explain: "Coral rubble and seagrass." },
    { id: "o13", lesson: "o-five", q: "Match: which must-know mollusc lives in seagrass meadows?", options: ["Fan shell", "Ovum cowrie", "Bazillion snail", "Cockle"], answer: [0], explain: "Cockle = sandy areas; snail & cowrie = sandy and muddy." },
    { id: "o14", lesson: "o-five", q: "Which must-know molluscs are gastropods? <i>(select all that apply)</i>", options: ["Bazillion snail", "Ovum cowrie", "Cockle", "Octopus"], answer: [0, 1], explain: "" },
    { id: "o15", lesson: "o-giantclam", q: "Why are giant clams good bioindicators?", options: ["They migrate", "Adults are sessile", "They're colourful", "They're common"], answer: [1], explain: "They can't move away from stress." },
    { id: "o16", lesson: "o-giantclam", q: "What is the main CURRENT reason giant clams disappeared from Singapore since the late 19th century?", options: ["Local fishing", "Rapid habitat loss from coastal development (1960s–70s)", "Disease", "Predation by crabs"], answer: [1], explain: "Exploitation was in the early 19th century; they're now protected under the Wildlife Act." },
    { id: "o17", lesson: "o-giantclam", q: "Which giant clams are presumed nationally extinct in Singapore? <i>(select all that apply)</i>", options: ["<i>Tridacna gigas</i>", "<i>Hippopus hippopus</i>", "<i>Tridacna squamosa</i>", "<i>Tridacna crocea</i>"], answer: [0, 1], explain: "<i>T. squamosa</i> CR, <i>T. crocea</i> EN." },
    { id: "o18", lesson: "o-giantclam", q: "Giant clams get energy partly from…", options: ["Symbiotic photosynthetic microalgae", "Eating fish", "Chemosynthetic bacteria", "Parasitism"], answer: [0], explain: "" },
    { id: "o19", lesson: "o-land", q: "Which land snail is invasive in Singapore?", options: ["Temasek green tree snail", "Giant African land snail", "Malayan trumpet snail", "Tropical leatherleaf slug"], answer: [1], explain: "" },
    { id: "o20", lesson: "o-land", q: "The Temasek green tree snail is found…", options: ["In reservoirs", "Up in trees in native species-dominated forests", "On mudflats", "In urban drains"], answer: [1], explain: "" },
  ],
  cheatsheet: `<ul>
    <li>Molluscs: soft-bodied, CaCO₃ shell (some lost), unsegmented. Features: foot, mantle (shell), radula (not bivalves), 2 pairs of nerve cords. 8 classes.</li>
    <li><b>Must-know 5</b>: Bazillion snail (Gastropoda; sandy/muddy; 100s per m²) · Ovum cowrie (Gastropoda; sandy/muddy; currency) · Cockle (Cardiidae; sandy; true cockle ≠ see-hum) · Fan shell (Pinnidae; seagrass; buried) · Octopus (Octopodidae; rubble/seagrass; shy).</li>
    <li>See-hum = ark clam (Arcidae), not a true cockle.</li>
    <li><b>Giant clams</b>: largest bivalves, Cardiidae, algal symbionts, sessile bioindicators, ecosystem engineers. 19th C collecting → 1960s–70s coastal development. Wildlife Act. <i>T. gigas</i> & <i>Hippopus</i> NEx; <i>T. squamosa</i> CR, <i>T. maxima</i> CR, <i>T. crocea</i> EN.</li>
    <li>Land/FW: Malayan trumpet snail (native FW), leatherleaf slug (parks), Giant African land snail (invasive), Temasek green tree snail (NSDF, arboreal).</li></ul>`,
});
