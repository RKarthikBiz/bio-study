window.MODULES = window.MODULES || [];
MODULES.push({
  id: "herps", emoji: "🐸", title: "Herpetofauna (Frogs & Reptiles)", short: "Herps",
  blurb: "Frogs, toads, turtles, lizards, snakes and crocs — and what to do when you meet one.",
  source: "Lecture 5A — The Herpetofauna of Singapore (Sankar A.)",
  lessons: [
    { id: "r-intro", title: "What is herpetology?",
      body: `<p><b>Herpetology</b> = the study of <b>reptiles and amphibians</b> (“herps”).</p>
      <ul><li><b>Reptiles</b>: animals with <b>scales</b> — snakes, lizards, turtles, crocodiles</li>
      <li><b>Amphibians</b>: live on <b>land and in water</b> — frogs, toads, caecilians</li></ul>
      <p>Singapore has about <b>31 amphibian</b> and <b>135 reptile</b> species.</p>
      <p>Why are people scared? Humans fear what they <b>don't understand</b>, and we're taught that cuddly animals are cute, harmless and valuable. We can do better!</p>`,
      hook: `<b>Amphi-bios = “double life”</b> 🐸 (water + land). <b>Rept = creep</b> 🦎 (scaly creepers).` },
    { id: "r-frogs", title: "Toads vs frogs",
      img: "img/sp/asiantoad.jpg", cap: "Asian Toad — the urban one",
      body: `<p>In this course: <b>toads = family Bufonidae</b>; <b>frogs = all other families</b>.</p>
      <ul><li><b>Asian Toad</b> <i>Duttaphrynus</i> cf. <i>melanostictus</i> · <span class="st st-LC">LC</span> · urban parks, <b>anywhere</b>. Common even <b>far from waterbodies</b>.</li>
      <li><b>Four-ridged Toad</b> <i>Ingerophrynus quadriporcatus</i> · <span class="st st-VU">VU</span> · native forests (BTNR, CCNR). <b>Calls even in daytime</b> (unusual!).</li></ul>
      <p>The <b>Asian Toad is THE urban amphibian</b> — if a question asks which frog lives in urban habitats, it's this one (Four-lined Tree Frog also uses urban parks).</p>`,
      hook: `<b>Asian toad = “A-anywhere” toad</b>, even next to your HDB void deck. <b>Four-ridged = four o'clock (daytime!) caller</b> ☀️.`,
      why: "Mock Q4: frog found in urban habitats → Asian Toad." },
    { id: "r-frogs2", title: "Three must-know frogs",
      img: "img/sp/hornedfrog.jpg", cap: "Malayan Horned Frog",
      body: `<ul><li><b>Four-lined Tree Frog</b> <i>Polypedates leucomystax</i> · <span class="st st-LC">LC</span> · forested areas & <b>urban parks</b>. Common in parks and gardens.</li>
      <li><b>Cinnamon Bush Frog</b> <i>Nyctixalus pictus</i> · <span class="st st-VU">VU</span> · native forests (BTNR, CCNR). <b>Successful NParks breeding programme</b>. Orange-cinnamon with white spots.</li>
      <li><b>Malayan Horned Frog</b> <i>Pelobatrachus nasutus</i> · <span class="st st-CR">CR</span> · native forests. <b>Excellent camouflage against leaf litter</b>; found only in <b>primary forests</b>. Horn-like points over the eyes.</li></ul>
      <p>Other herps mentioned: <b>Subaraj's Paddy Frog</b> <i>Micryletta subaraji</i> (described 2022); caecilians (legless amphibians).</p>`,
      hook: `<b>Cinnamon</b> 🍂 bush frog is “baked” in an NParks breeding programme. The <b>horned</b> frog is a <b>dead leaf with horns</b> — CR, primary forest only.` },
    { id: "r-croc", title: "Crocodile, turtle, monitor",
      img: "img/sp/croc.jpg", cap: "Estuarine Crocodile",
      body: `<ul><li><b>Estuarine Crocodile</b> <i>Crocodylus porosus</i> · <span class="st st-CR">CR</span> · <b>mangroves (Sungei Buloh)</b>. <b>Apex predator; largest living reptile</b> in the world.</li>
      <li><b>Spiny Hill Turtle</b> <i>Heosemys spinosa</i> · <span class="st st-EN">EN</span> · native forests (BTNR, CCNR). <b>Serrated, spiny shell margins in juveniles but NOT adults</b>.</li>
      <li><b>Malayan Water Monitor</b> <i>Varanus salvator</i> · <span class="st st-LC">LC</span> · <b>anywhere near water</b>. Looks like a Komodo dragon but isn't! <b>Scavenger</b>.</li></ul>
      <p>Others: Hawksbill Sea Turtle (<i>Eretmochelys imbricata</i>, CITES App. I), Malayan Box Turtle, Clouded Monitor.</p>`,
      hook: `<b>Croc = CR</b> (both start with C-R!) 🐊 and lives in the <b>mangroves</b>.<br>Spiny turtle loses its spikes as it grows up — <b>baby punk, adult smooth</b>. 🐢` },
    { id: "r-lizards", title: "Lizards & the flying dragon",
      img: "img/sp/draco.jpg", cap: "Sumatran Flying Dragon",
      body: `<p><b>Sumatran Flying Dragon</b> <i>Draco sumatranus</i> · <span class="st st-LC">LC</span> · <b>urban parks</b>. <b>Can glide</b> on rib-supported “wings”; <b>males signal with a dewlap</b> (throat flag).</p>
      <p>Other lizards you may see: Changeable Lizard <i>Calotes versicolor</i> (introduced), Green Crested Lizard <i>Bronchocela cristatella</i> (native), Earless Agamid; geckos (Four-clawed, Mourning, Spiny-tailed, Flat-tailed); Common Sun Skink; <b>Temasek Swamp Skink</b> (described 2017).</p>
      <p>Southeast Asia has ~60 gliding vertebrates (flying dragons, frogs, snakes, squirrels, geckos, colugos) — probably an adaptation to <b>tall dipterocarp forests</b>.</p>`,
      hook: `A <b>dragon in your park</b> 🐉 — it glides between trees and waves a yellow flag (dewlap) to say hi.` },
    { id: "r-snakes", title: "Snakes & Wagler's pit viper",
      img: "img/sp/wagler.jpg", cap: "Wagler's Pit Viper",
      body: `<p><b>Wagler's Pit Viper</b> <i>Tropidolaemus wagleri</i> · <span class="st st-NT">NT</span> · native forests (BTNR, CCNR).</p>
      <ul><li><b>One of seven highly venomous snakes</b> in Singapore</li>
      <li><b>Sexually dimorphic</b>: females big, green-black-yellow banded; males small and green</li>
      <li>Sits still for days in trees — often easy to spot along trails</li></ul>
      <p>Other snakes: Shore Pit Viper (mangroves), Reticulated Python, Sunbeam Snake, Malayan Blue & Banded Coral Snakes, Equatorial Spitting Cobra, Banded Krait, King Cobra, Brahminy Blind Snake, Gimlett's Reed Snake (rediscovered 2017).</p>`,
      hook: `<b>Wagler's waits</b> ⏳ — it sits in the same tree for days. <b>Big lady, small guy</b> (sexual dimorphism).`,
      why: "Mock Q12: Wagler's is a native-forest snake — not expected in mangroves per the course table." },
    { id: "r-threats", title: "Roadkill & eco-links",
      body: `<p><b>Roadkill</b> is a major threat: <b>over 1,000 community science reports since 2020</b>. As temperatures rise, more snake and lizard roadkills are recorded.</p>
      <p>Solutions: wildlife crossings such as the <b>Eco-Link@BKE</b> and <b>Mandai Eco-Link</b>, connecting forest patches over highways.</p>
      <p>Report herp roadkill to help science (HSS roadkill records). The Herpetological Society of Singapore also runs a frog call library.</p>`,
      hook: `<b>Eco-Link = a bridge for animals</b> 🌉 over the BKE so the reserve isn't cut in two.` },
    { id: "r-meet", title: "Met a snake? What to do",
      img: "img/sp/h-btnr.jpg",
      body: `<ol><li><b>Don't panic</b> — these animals mean you no harm</li>
      <li><b>Observe from a safe distance</b> — take photos, don't get too close</li>
      <li>Only <b>if you or the animal is in danger</b>, contact <b>ACRES Wildlife Rescue 9783 7782</b> or <b>NParks 24h Animal Response Centre 1800 476 1600</b></li></ol>
      <p>A snake on a nature trail is <b>at home</b> — you don't need anyone to remove it, and you should never attack it.</p>`,
      hook: `<b>Calm, Camera, Call (only if danger)</b> 📸 — the 3 C's.`,
      why: "Mock Q15: remain calm and keep a safe distance." },
  ],
  species: [
    { id: "asiantoad", common: "Asian Toad", sci: "Duttaphrynus cf. melanostictus", family: "Bufonidae", group: "Amphibian", status: "LC", where: "Urban parks, anywhere", fact: "Toad common even in areas far from waterbodies", hook: "The ‘anywhere’ toad — the urban amphibian." },
    { id: "fourridgedtoad", common: "Four-ridged Toad", sci: "Ingerophrynus quadriporcatus", family: "Bufonidae", group: "Amphibian", status: "VU", where: "Native species-dominated forests (BTNR, CCNR)", fact: "Toad that calls even during the daytime (unusual for frogs)", hook: "Four o'clock caller." },
    { id: "fourlined", common: "Four-lined Tree Frog", sci: "Polypedates leucomystax", family: "Rhacophoridae", group: "Amphibian", status: "LC", where: "Forested areas, urban parks", fact: "Tree frog common in parks and gardens", hook: "Four stripes down the back." },
    { id: "cinnamonfrog", common: "Cinnamon Bush Frog", sci: "Nyctixalus pictus", family: "Rhacophoridae", group: "Amphibian", status: "VU", where: "Native species-dominated forests (BTNR, CCNR)", where_tip: "Not urban — that's the Asian Toad.", fact: "Frog with a successful NParks breeding programme", hook: "Cinnamon frog baked by NParks." },
    { id: "hornedfrog", common: "Malayan Horned Frog", sci: "Pelobatrachus nasutus", family: "Megophryidae", group: "Amphibian", status: "CR", where: "Primary / native species-dominated forests (BTNR, CCNR)", fact: "Excellent camouflage against leaf litter, found only in primary forests", hook: "A dead leaf with horns." },
    { id: "croc", common: "Estuarine Crocodile", sci: "Crocodylus porosus", family: "Crocodylidae", group: "Reptile", status: "CR", where: "Mangroves (Sungei Buloh)", fact: "Apex predator and the largest living reptile species", hook: "Croc = CR, lives in mangroves." },
    { id: "spinyturtle", common: "Spiny Hill Turtle", sci: "Heosemys spinosa", family: "Geoemydidae", group: "Reptile", status: "EN", where: "Native species-dominated forests (BTNR, CCNR)", fact: "Spiny serrated shell margins in juveniles but not adults", hook: "Baby punk, adult smooth." },
    { id: "watermonitor", common: "Malayan Water Monitor", sci: "Varanus salvator", family: "Varanidae", group: "Reptile", status: "LC", where: "Anywhere near water bodies", fact: "Looks like a Komodo dragon but isn't; a scavenger", hook: "Komodo look-alike at the canal." },
    { id: "draco", common: "Sumatran Flying Dragon", sci: "Draco sumatranus", family: "Agamidae", group: "Reptile", status: "LC", where: "Urban parks", fact: "Gliding lizard; males signal with a dewlap", hook: "Dragon in your park waving a flag." },
    { id: "wagler", common: "Wagler's Pit Viper", sci: "Tropidolaemus wagleri", family: "Viperidae", group: "Reptile", status: "NT", where: "Native species-dominated forests (BTNR, CCNR)", fact: "One of seven highly venomous snakes in Singapore; sexually dimorphic", hook: "Wagler's waits; big lady, small guy." },
  ],
  questions: [
    { id: "r1", lesson: "r-intro", q: "Herpetology is the study of…", options: ["Insects", "Reptiles and amphibians", "Birds", "Fish"], answer: [1], explain: "" },
    { id: "r2", lesson: "r-intro", q: "Roughly how many amphibian species does Singapore have?", options: ["~10", "~30", "~130", "~300"], answer: [1], explain: "31 amphibians; 135 reptiles." },
    { id: "r3", lesson: "r-frogs", q: "Which frog species can be found in urban habitats?", options: ["Malayan Horned Frog", "Cinnamon Bush Frog", "Four-ridged Toad", "Asian Toad"], answer: [3], explain: "Asian Toad: urban parks, anywhere." },
    { id: "r4", lesson: "r-frogs", q: "Which amphibian is unusual for calling during the daytime?", options: ["Asian Toad", "Four-ridged Toad", "Four-lined Tree Frog", "Cinnamon Bush Frog"], answer: [1], explain: "Four-ridged Toad (VU), native forests." },
    { id: "r5", lesson: "r-frogs", q: "In this course, “toads” refers to which family?", options: ["Ranidae", "Bufonidae", "Rhacophoridae", "Megophryidae"], answer: [1], explain: "Toads = Bufonidae; frogs = all other families." },
    { id: "r6", lesson: "r-frogs2", q: "Which frog has a successful NParks breeding programme?", options: ["Cinnamon Bush Frog", "Asian Toad", "Malayan Horned Frog", "Four-lined Tree Frog"], answer: [0], explain: "<i>Nyctixalus pictus</i>, VU." },
    { id: "r7", lesson: "r-frogs2", q: "The Malayan Horned Frog is… <i>(select all that apply)</i>", options: ["Critically Endangered", "Camouflaged against leaf litter", "Found only in primary forests", "Common in urban parks"], answer: [0, 1, 2], explain: "" },
    { id: "r8", lesson: "r-croc", q: "Where would you find the Estuarine Crocodile in Singapore?", options: ["Reservoirs in CCNR", "Mangroves such as Sungei Buloh", "Urban drains", "Hill streams"], answer: [1], explain: "Apex predator of mangroves." },
    { id: "r9", lesson: "r-croc", q: "The Spiny Hill Turtle's spiny shell margins are present in…", options: ["Adults only", "Juveniles but not adults", "Males only", "Both juveniles and adults"], answer: [1], explain: "Serrated margins in juveniles, lost with age." },
    { id: "r10", lesson: "r-croc", q: "Which reptile is a scavenger found anywhere near water and resembles a Komodo dragon?", options: ["Clouded Monitor", "Malayan Water Monitor", "Estuarine Crocodile", "Changeable Lizard"], answer: [1], explain: "<i>Varanus salvator</i>, LC." },
    { id: "r11", lesson: "r-lizards", q: "Male Sumatran Flying Dragons signal using a…", options: ["Crest", "Dewlap", "Tail flick", "Colour change"], answer: [1], explain: "Dewlap = throat flap." },
    { id: "r12", lesson: "r-lizards", q: "Where is the Sumatran Flying Dragon commonly found?", options: ["Mangroves", "Urban parks", "Coral reefs", "Only primary forest"], answer: [1], explain: "Surprisingly common on park trees." },
    { id: "r13", lesson: "r-snakes", q: "Wagler's Pit Viper is… <i>(select all that apply)</i>", options: ["One of seven highly venomous snakes in Singapore", "Sexually dimorphic", "Found in native species-dominated forests", "Found mainly in mangroves"], answer: [0, 1, 2], explain: "The Shore Pit Viper is the mangrove one." },
    { id: "r14", lesson: "r-snakes", q: "Which reptile would you NOT expect in a mangrove habitat?", options: ["Estuarine Crocodile", "Malayan Water Monitor", "Wagler's Pit Viper", "Shore Pit Viper"], answer: [2], explain: "Wagler's = native forests (BTNR, CCNR)." },
    { id: "r15", lesson: "r-threats", q: "What does the herp lecture identify as a major threat, with 1,000+ reports since 2020?", options: ["Poaching", "Roadkill", "Disease", "Pollution"], answer: [1], explain: "Mitigated by eco-links (BKE, Mandai)." },
    { id: "r16", lesson: "r-threats", q: "Eco-Link@BKE and Mandai Eco-Link help by…", options: ["Feeding animals", "Connecting forest patches across roads so animals avoid traffic", "Breeding frogs", "Monitoring water quality"], answer: [1], explain: "" },
    { id: "r17", lesson: "r-meet", q: "You meet a wild snake on MacRitchie Nature Trail. What should you do?", options: ["Call the police", "Attack it with a branch", "Remain calm and keep a safe distance", "Call ACRES to remove it"], answer: [2], explain: "Only call ACRES/NParks if you or the animal is in danger." },
    { id: "r18", lesson: "r-meet", q: "When SHOULD you contact ACRES or NParks about a herp?", options: ["Whenever you see one", "When you or the animal is in danger", "Never", "Only for frogs"], answer: [1], explain: "ACRES 9783 7782; NParks 1800 476 1600." },
  ],
  cheatsheet: `<ul>
    <li>Herpetology = reptiles (scales) + amphibians (land & water). SG: 31 amphibians, 135 reptiles.</li>
    <li><b>Toads (Bufonidae)</b>: Asian Toad LC (urban, anywhere, far from water); Four-ridged Toad VU (forest, daytime calls).</li>
    <li><b>Frogs</b>: Four-lined Tree Frog LC (parks); Cinnamon Bush Frog VU (forest, NParks breeding); Malayan Horned Frog CR (primary forest, leaf-litter camo).</li>
    <li><b>Reptiles</b>: Estuarine Croc CR (mangroves, largest reptile); Spiny Hill Turtle EN (forest, spines only juveniles); Water Monitor LC (near water, scavenger); Flying Dragon LC (parks, glides, dewlap); Wagler's Pit Viper NT (forest, 1 of 7 venomous, dimorphic).</li>
    <li>Threat: roadkill (1,000+ reports) → eco-links. Meet a snake: calm, distance, call only if danger.</li></ul>`,
});
