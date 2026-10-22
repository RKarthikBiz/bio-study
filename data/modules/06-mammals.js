window.MODULES = window.MODULES || [];
MODULES.push({
  id: "mammals", emoji: "🦔", title: "Mammals", short: "Mammals",
  blurb: "What makes a mammal, teeth and feet as clues to lifestyle, and five special Singapore mammals.",
  source: "Lecture 5B — Mammals (Dr Norman Lim)",
  lessons: [
    { id: "m-what", title: "What makes a mammal?",
      body: `<p>Mammals arose from mammal-like reptiles. <b>Unique defining features</b>:</p>
      <ul><li><b>Mammary glands</b> (milk)</li><li><b>Hair / fur</b></li><li><b>Three middle-ear bones</b></li></ul>
      <p>Other features (shared with birds): <b>endothermic</b> (warm-blooded) and a <b>four-chambered heart</b>.</p>
      <p>Diversity: <b>~5,500 species in 29 orders and 153 families</b>; diverse size, form and appearance; on <b>every continent and nearly every habitat</b> — not just the tropics. Locomotion: walking, climbing, swimming, gliding, flying.</p>
      <p>Three subclasses: <b>Prototheria</b> (egg-laying: platypus, echidna), <b>Metatheria</b> (marsupials), <b>Eutheria</b> (placental mammals).</p>`,
      hook: `<b>“Milk, Hair, 3 Ear-bones”</b> 🥛💇👂 — the mammal membership card.<br>Subclasses: <b>Proto</b> = first (eggs), <b>Meta</b> = middle (pouch), <b>Eu</b> = true (placenta).`,
      why: "Mock Q5: false statements = ‘we know everything about all mammals’ and ‘found in the tropics only’." },
    { id: "m-understudied", title: "Not all mammals are well studied",
      body: `<p>Do we know everything about mammals? <b>No!</b> Generally <b>understudied</b> mammals are:</p>
      <ul><li><b>Small</b> (vs big)</li><li><b>Arboreal or subterranean</b> (vs ground-level)</li><li><b>Nocturnal</b> (vs diurnal)</li></ul>
      <p>Knowledge about species is needed for management and conservation. SE Asia is a <b>biodiversity hotspot</b> with high richness + endemism (e.g., Vietnam has 28 primate species; islands like Borneo and Sulawesi). Alfred Russel Wallace worked here.</p>`,
      hook: `Hard to study = <b>“Small, High (or Low), at Night”</b> 🌙 — tiny tree-top or underground night owls get ignored.` },
    { id: "m-teeth", title: "Teeth tell the diet",
      body: `<p>Fish, amphibians and reptiles are <b>homodont</b> (all teeth alike). Turtles and birds are toothless.</p>
      <p>Mammals are <span class="key">heterodont</span> — specialised teeth:</p>
      <ul><li><b>Incisors</b> — cut food</li><li><b>Canines</b> — hold prey</li><li><b>Premolars & molars</b> — cut and grind</li></ul>
      <p><b>Chewing (mastication) is only found in mammals.</b> Most mammals are <b>diphyodont</b> — two successive sets of teeth (milk teeth, then adult).</p>
      <p>Carnivores have prominent canines and <b>carnassial</b> (shearing) teeth; herbivores have grinding molars; some mammals are toothless (pangolin).</p>`,
      hook: `<b>I-C-PM</b>: “<b>I C</b>ut, <b>C</b>atch, then <b>P</b>ulverise <b>M</b>eal.” ✂️🪝⚙️<br><b>Hetero = different</b> teeth (mammals); <b>Homo = same</b> teeth (reptiles, fish).`,
      why: "Mock Q19: incisors, canines, premolars/molars (NOT homodont)." },
    { id: "m-feet", title: "Foot posture & stride",
      body: `<p>Look at (i) how much of the foot touches the ground, and (ii) leg length (stride):</p>
      <div class="tablewrap"><table class="t"><tr><th>Posture</th><th>Ground contact</th><th>Stride</th><th>Examples</th></tr>
      <tr><td><b>Plantigrade</b></td><td>Whole sole, heel down</td><td>Shortest</td><td>Humans, bears</td></tr>
      <tr><td><b>Digitigrade</b></td><td>Toes only, heel raised</td><td>Medium</td><td>Cats, dogs (leopard cat)</td></tr>
      <tr><td><b>Unguligrade</b></td><td>Tips of toes / hooves</td><td>Longest</td><td>Pigs, deer, horses</td></tr></table></div>
      <p>Less contact + longer leg = <b>longer stride</b> → faster runners.</p>`,
      hook: `<b>P → D → U</b>: “<b>P</b>lant your foot, <b>D</b>ance on toes, <b>U</b>se your tiptoes.” 👣🩰🦄 Stride grows as contact shrinks.`,
      why: "Mock Q13: increasing stride = plantigrade > digitigrade > unguligrade." },
    { id: "m-colugo", title: "Sunda colugo",
      img: "img/sp/colugo.jpg", cap: "Galeopterus variegatus",
      body: `<p><b><i>Galeopterus variegatus</i></b> · order <b>Dermoptera</b> (only 2 species) · <span class="st st-NT">NT</span></p>
      <ul><li><b>Sister group to Primates</b></li><li>Domestic-cat sized, <b>arboreal, nocturnal</b></li>
      <li>Eats leaves (<b>folivorous</b>)</li><li><b>Glides 150+ m</b>; rests against tree trunks by day</li>
      <li>Where: BTNR, CCNR and surrounding nature parks (new records at Wessex Estate, SBG, Kent Ridge); ~1,000 individuals (2006)</li></ul>
      <p>Hi, it's me — Kopi! 👋</p>`,
      hook: `<b>Colugo = “Glide-o”</b> 🪂 — the gliding mammal, primates' closest cousin, eats leaves.` },
    { id: "m-pangolin", title: "Sunda pangolin",
      img: "img/sp/pangolin.jpg", cap: "Manis javanica",
      body: `<p><b><i>Manis javanica</i></b> · order <b>Pholidota</b> (8 species) · <span class="st st-CR">CR</span> (globally and locally) · CITES App. I</p>
      <ul><li>Closely related to <b>Carnivora</b> (cats, dogs, bears)</li>
      <li>Covered in <b>scales of compacted keratin</b>; can roll up (conglobate)</li>
      <li><b>Toothless</b>; eats <b>ants and termites</b> with a long sticky tongue</li>
      <li>Climbs, burrows, swims, walks; active only ~4 hours a night</li>
      <li><b>Most trafficked animal on Earth</b> (scales & meat) — but no large-scale poaching in Singapore</li>
      <li>Where: BTNR, CCNR, WCNR, Pulau Ubin, Pulau Tekong</li></ul>`,
      hook: `<b>Pangolin = “pine-cone with legs”</b> 🌰 — keratin scales (same stuff as your nails), no teeth, ant-eater.` },
    { id: "m-leopardcat", title: "Mainland leopard cat",
      img: "img/sp/leopardcat.jpg", cap: "Prionailurus bengalensis",
      body: `<p><b><i>Prionailurus bengalensis</i></b> · Carnivora, Felidae · <span class="st st-CR">CR</span></p>
      <ul><li>Domestic-cat sized; carnivorous; <b>territorial, low population density</b>, highly elusive</li>
      <li><b>Apex predator in modern Singapore's ecosystem</b> (no tigers/leopards left)</li>
      <li>Where: Western Catchment, CCNR, Pulau Ubin, Pulau Tekong; new: Changi coast</li>
      <li>Typical carnivore dentition: prominent <b>canines and carnassials</b></li>
      <li><b>Digitigrade</b>: toes on ground, heels up → long stride, powerful jumper & runner</li></ul>`,
      hook: `Our last wild cat is <b>house-cat sized</b> but still the <b>top predator</b> 👑🐈 — walks on tiptoe (digitigrade).` },
    { id: "m-loris", title: "Sunda slow loris",
      img: "img/sp/loris.jpg", cap: "Nycticebus coucang",
      body: `<p><b><i>Nycticebus coucang</i></b> · Primates (primitive primates) · <span class="st st-EN">EN</span></p>
      <ul><li><b>Nocturnal, arboreal</b>, slow-moving</li><li><b>Omnivore</b>: fruits, tree gum, insects, bird eggs, small animals</li>
      <li><b>Opposable thumb</b> for grasping/climbing</li><li>“<b>Bambi syndrome</b>”: poached for the illegal pet trade because it looks cute…</li>
      <li>…but it's a <b>venomous primate</b>!</li><li>Where: BTNR, CCNR, Pulau Tekong</li></ul>`,
      hook: `<b>Cute but venomous</b> 🧸☠️ — the slow loris is Bambi with a poison bite. The pet trade loves it; don't.` },
    { id: "m-boar", title: "Wild boar",
      img: "img/sp/boar.jpg", cap: "Sus scrofa",
      body: `<p><b><i>Sus scrofa</i></b> · order <b>Artiodactyla</b> (even-toed ungulates) · <span class="st st-LC">LC</span></p>
      <ul><li><b>Omnivore</b> (diet & dentition): young shoots, tubers, earthworms, snails</li>
      <li>Adaptable; <b>invasive</b> in many countries</li><li><b>Tusks</b> in adults for defence & foraging</li>
      <li><b>Bioturbator</b>: digs forest soil; adults have <b>no natural predators</b> in Singapore</li>
      <li>Human–wildlife conflict: can injure people</li><li>Where: all forested areas</li></ul>
      <p>Foot posture: hooved → <b>unguligrade</b>.</p>`,
      hook: `<b>Boar = Bulldozer</b> 🚜 — digs up soil (bioturbator), nobody eats it here (no predators), walks on hooves (unguligrade).` },
    { id: "m-five", title: "The 5 must-know mammals",
      body: `<div class="tablewrap"><table class="t"><tr><th>Mammal</th><th>Status</th><th>Where</th><th>Significance</th></tr>
      <tr><td>Sunda colugo <i>Galeopterus variegatus</i></td><td>NT</td><td>BTNR, CCNR, surrounding nature parks</td><td>Gliding mammal</td></tr>
      <tr><td>Sunda pangolin <i>Manis javanica</i></td><td>CR</td><td>BTNR, CCNR, WCNR, P. Ubin, P. Tekong</td><td>Eats ants; active ~4 h/night; poached for scales & meat</td></tr>
      <tr><td>Mainland leopard cat <i>Prionailurus bengalensis</i></td><td>CR</td><td>CCNR, WCNR, P. Ubin, P. Tekong</td><td>Apex predator in modern SG; elusive</td></tr>
      <tr><td>Sunda slow loris <i>Nycticebus coucang</i></td><td>EN</td><td>BTNR, CCNR, P. Tekong</td><td>Venomous; poached for pet trade</td></tr>
      <tr><td>Wild boar <i>Sus scrofa</i></td><td>LC</td><td>All forested areas</td><td>Bioturbator; adults lack predators</td></tr></table></div>`,
      hook: `Status ladder: <b>Boar LC → Colugo NT → Loris EN → Pangolin & Cat CR</b>. The two “<b>C</b>”-animals (<b>C</b>at, s<b>C</b>aly pangolin) are <b>CR</b>.` },
  ],
  species: [
    { id: "colugo", common: "Sunda colugo", sci: "Galeopterus variegatus", family: "Cynocephalidae (Dermoptera)", group: "Mammal", status: "NT", where: "BTNR, CCNR and surrounding nature parks", fact: "Gliding, leaf-eating nocturnal mammal; sister group to primates", hook: "Glide-o, primates' cousin." },
    { id: "pangolin", common: "Sunda pangolin", sci: "Manis javanica", family: "Manidae (Pholidota)", group: "Mammal", status: "CR", where: "BTNR, CCNR, WCNR, Pulau Ubin, Pulau Tekong", fact: "Toothless, keratin-scaled ant-eater; most trafficked animal on Earth", hook: "Pine-cone with legs." },
    { id: "leopardcat", common: "Mainland leopard cat", sci: "Prionailurus bengalensis", family: "Felidae", group: "Mammal", status: "CR", where: "CCNR, WCNR, Pulau Ubin, Pulau Tekong", fact: "Apex predator in modern Singapore; territorial, elusive, digitigrade", hook: "House-cat sized top predator." },
    { id: "loris", common: "Sunda slow loris", sci: "Nycticebus coucang", family: "Lorisidae (Primates)", group: "Mammal", status: "EN", where: "BTNR, CCNR, Pulau Tekong", fact: "Venomous nocturnal primate often poached for the pet trade", hook: "Bambi with a venomous bite." },
    { id: "boar", common: "Wild boar", sci: "Sus scrofa", family: "Suidae (Artiodactyla)", group: "Mammal", status: "LC", where: "All forested areas", fact: "Omnivorous bioturbator that digs forest soil; adults have no natural predators in Singapore", hook: "Bulldozer on hooves." },
  ],
  questions: [
    { id: "m1", lesson: "m-what", q: "Which features are UNIQUE to mammals? <i>(select all that apply)</i>", options: ["Mammary glands", "Hair", "Three middle-ear bones", "Four-chambered heart"], answer: [0, 1, 2], explain: "Four-chambered heart and endothermy are shared with birds." },
    { id: "m2", lesson: "m-what", q: "Which statements about mammals are FALSE? <i>(select all that apply)</i>", options: ["Mammals have diverse form, appearance and size", "Mammals are well studied and we know everything about all species", "Mammals are found in the tropics only because of the warm climate", "Mammal locomotion ranges from walking to gliding and flying"], answer: [1, 2], explain: "Many mammals are understudied; they live on every continent." },
    { id: "m3", lesson: "m-what", q: "Marsupials belong to which subclass?", options: ["Prototheria", "Metatheria", "Eutheria", "Dermoptera"], answer: [1], explain: "Prototheria = egg-laying; Eutheria = placental." },
    { id: "m4", lesson: "m-what", q: "Approximately how many mammal species exist worldwide?", options: ["550", "5,500", "55,000", "11,000"], answer: [1], explain: "~5,500 spp, 29 orders, 153 families." },
    { id: "m5", lesson: "m-understudied", q: "Which kinds of mammals are generally UNDERSTUDIED? <i>(select all that apply)</i>", options: ["Small mammals", "Arboreal or subterranean mammals", "Nocturnal mammals", "Large diurnal ground mammals"], answer: [0, 1, 2], explain: "" },
    { id: "m6", lesson: "m-teeth", q: "What types of specialised dentition do mammals possess? <i>(select all that apply)</i>", options: ["Incisors", "Homodont teeth", "Canines", "Premolars/molars"], answer: [0, 2, 3], explain: "Homodont = uniform teeth of fish, amphibians, reptiles." },
    { id: "m7", lesson: "m-teeth", q: "Canines are mainly used to…", options: ["Grind", "Cut", "Hold prey", "Filter"], answer: [2], explain: "Incisors cut; canines hold; premolars/molars cut & grind." },
    { id: "m8", lesson: "m-teeth", q: "“Diphyodont” means…", options: ["Two successive sets of teeth", "Teeth all the same", "No teeth", "Two rows of teeth"], answer: [0], explain: "Milk teeth then adult teeth." },
    { id: "m9", lesson: "m-teeth", q: "Chewing (mastication) is found in…", options: ["Mammals only", "All vertebrates", "Reptiles and mammals", "Birds"], answer: [0], explain: "" },
    { id: "m10", lesson: "m-feet", q: "Which shows increasing stride length (smallest → largest)?", options: ["Plantigrade → unguligrade → digitigrade", "Digitigrade → plantigrade → unguligrade", "Unguligrade → digitigrade → plantigrade", "Plantigrade → digitigrade → unguligrade"], answer: [3], explain: "Less ground contact, longer leg." },
    { id: "m11", lesson: "m-feet", q: "The leopard cat's foot posture is…", options: ["Plantigrade", "Digitigrade", "Unguligrade", "Palmigrade"], answer: [1], explain: "Toes on the ground, heels raised." },
    { id: "m12", lesson: "m-feet", q: "Wild boar, with hooves, are…", options: ["Plantigrade", "Digitigrade", "Unguligrade", "Saltatorial"], answer: [2], explain: "" },
    { id: "m13", lesson: "m-colugo", q: "The Sunda colugo is… <i>(select all that apply)</i>", options: ["A gliding mammal", "Folivorous (leaf-eating)", "The sister group to primates", "A primate"], answer: [0, 1, 2], explain: "Order Dermoptera — close to, but not, primates." },
    { id: "m14", lesson: "m-pangolin", q: "Pangolin scales are made of…", options: ["Bone", "Compacted keratin", "Chitin", "Calcium carbonate"], answer: [1], explain: "Same material as hair and nails." },
    { id: "m15", lesson: "m-pangolin", q: "Pangolins are most closely related to…", options: ["Anteaters", "Armadillos", "Carnivora (cats, dogs, bears)", "Primates"], answer: [2], explain: "Order Pholidota is sister to Carnivora." },
    { id: "m16", lesson: "m-pangolin", q: "Which statement about the Sunda pangolin is TRUE?", options: ["It has large molars", "It's the most trafficked animal on Earth", "It's heavily poached within Singapore", "It's LC"], answer: [1], explain: "Toothless; CR; thankfully no large-scale poaching in Singapore." },
    { id: "m17", lesson: "m-leopardcat", q: "What is the apex predator in modern Singapore's (terrestrial) ecosystem?", options: ["Wild boar", "Mainland leopard cat", "Reticulated python", "Sunda slow loris"], answer: [1], explain: "" },
    { id: "m18", lesson: "m-loris", q: "Why is the Sunda slow loris poached?", options: ["For its scales", "For the illegal pet trade (Bambi syndrome)", "For meat", "For its fur"], answer: [1], explain: "Cute appearance — yet it's venomous." },
    { id: "m19", lesson: "m-loris", q: "The Sunda slow loris is unusual among primates because it is…", options: ["Diurnal", "Venomous", "Herbivorous", "Flightless"], answer: [1], explain: "" },
    { id: "m20", lesson: "m-boar", q: "Why is the wild boar called a bioturbator?", options: ["It spreads seeds", "It digs and mixes forest soil", "It eats ants", "It glides"], answer: [1], explain: "Also: adults lack natural predators in Singapore." },
    { id: "m21", lesson: "m-boar", q: "Wild boar belong to which order?", options: ["Carnivora", "Artiodactyla (even-toed ungulates)", "Perissodactyla", "Pholidota"], answer: [1], explain: "" },
    { id: "m22", lesson: "m-five", q: "Which of the five must-know mammals are Critically Endangered? <i>(select all that apply)</i>", options: ["Sunda pangolin", "Mainland leopard cat", "Sunda slow loris", "Sunda colugo"], answer: [0, 1], explain: "Loris EN; colugo NT; boar LC." },
  ],
  cheatsheet: `<ul>
    <li><b>Unique:</b> mammary glands, hair, 3 middle-ear bones. Also endothermic, 4-chambered heart (like birds).</li>
    <li>~5,500 spp, 29 orders, 153 families; every continent. Subclasses: Prototheria, Metatheria, Eutheria.</li>
    <li>Understudied: small, arboreal/subterranean, nocturnal.</li>
    <li><b>Heterodont</b>: incisors (cut), canines (hold), premolars/molars (cut & grind). Diphyodont. Only mammals chew.</li>
    <li><b>Stride</b>: plantigrade &lt; digitigrade &lt; unguligrade.</li>
    <li>Colugo NT (glides, leaves, Dermoptera, sister to primates) · Pangolin CR (keratin scales, toothless, most trafficked) · Leopard cat CR (apex predator, digitigrade) · Slow loris EN (venomous, pet trade) · Wild boar LC (bioturbator, no predators, unguligrade).</li></ul>`,
});
