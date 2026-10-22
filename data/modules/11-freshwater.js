window.MODULES = window.MODULES || [];
MODULES.push({
  id: "freshwater", emoji: "🏞️", title: "Freshwater Habitats & Species", short: "Freshwater",
  blurb: "Hill streams, forest streams, swamp forests, reservoirs and drains — and the native vs invasive species in each.",
  source: "Lecture 9a — Singapore's fresh waters (Asst Prof Zeng Yiwen)",
  lessons: [
    { id: "f-why", title: "Why fresh waters matter",
      img: "img/sp/h-macritchie.jpg",
      body: `<p>Freshwater systems give us much more than “wet, non-salty habitats”:</p>
      <ul><li><b>Water supply & regulation</b>: drinking water, filtration, flood control</li>
      <li><b>Food, culture & livelihood</b>: fisheries, angling, aquarium trade, natural heritage</li>
      <li><b>Biodiversity & ecosystem processes</b>: carbon storage, temperature regulation</li></ul>
      <p>Two ways to classify habitats:</p>
      <ul><li><b>Lotic</b> (flowing: streams, rivers, drains, canals) vs <b>lentic</b> (still: swamps, ponds, reservoirs)</li>
      <li><b>Natural</b> (hill streams, forest streams, freshwater swamps — native species) vs <b>artificial</b> (reservoirs, drains, canals, ponds — non-native species)</li></ul>
      <p>Species are strongly linked to habitat type; natives and non-natives <b>rarely cross over</b> (but sometimes do).</p>`,
      hook: `<b>Lotic = LOcomotion</b> (moving water) 🏃. <b>Lentic = LENT, like resting during Lent</b> (still water) 🧘.` },
    { id: "f-hill", title: "Hill streams",
      img: "img/sp/sgcrab.jpg", cap: "Singapore freshwater crab",
      body: `<p>Where: <b>Bukit Timah, Bukit Batok, Bukit Gombak</b>. Coarse sand, gravel, pebbles, <b>granite boulders</b>, leaf litter; <b>cool</b>, <b>high flow + high dissolved oxygen</b>, pH 6–8.</p>
      <ul><li><b>Singapore freshwater crab</b> <i>Johora singaporensis</i> — true crab (Brachyura), nocturnal detritivore/omnivore, <span class="st st-CR">CR</span>, <b>endemic</b>; lost from its type locality</li>
      <li><b>Muff river prawn</b> <i>Macrobrachium pilimanus</i> — found in <b>only one hill stream</b> in Singapore (same stream as a new crab population). Earlier swamp records were misidentified (<i>M. platycheles</i>); correct species found ~2015; captive breeding → ~200 released</li>
      <li>Malayan trumpet snail <i>Melanoides tuberculata</i> — one of few native freshwater snails</li></ul>`,
      hook: `<b>Hill = Hard rocks, High oxygen, Home of the endemic crab</b> 🦀⛰️.` },
    { id: "f-forest", title: "Forest streams",
      img: "img/sp/betta.jpg", cap: "Forest betta",
      body: `<p>Where: <b>CCNR, BTNR, Windsor Nature Park, SBG</b>; upstream of reservoirs. Fine sand, silt, clay, leaf litter; cool; slow to high flow, high oxygen; pH 4.5–7. Don't go off the path!</p>
      <ul><li><b>Pygmy rasbora</b> <i>Boraras maculatus</i> — tiny, gregarious; <b>CR in Singapore but LC elsewhere</b>; threatened by habitat loss + <b>poaching</b> for aquariums</li>
      <li><b>Penang betta / forest fighting fish</b> <i>Betta pugnax</i> — in most forest streams (even trashy ones, even a pig wallow); <b>air-breather</b>, <b>mouthbrooder</b> (male holds eggs in mouth), predator of macroinvertebrates</li></ul>`,
      hook: `<b>Betta pugnax = pugnacious (fighty)</b> 🥊 — a fighter that babysits eggs in its mouth.` },
    { id: "f-swamp", title: "Freshwater swamp forest",
      img: "img/sp/h-swamp.jpg",
      body: `<p>Where: <b>Nee Soon Swamp Forest (CCNR)</b> — the biggest — plus small patches. Lots of organic matter (piled leaf litter); cool; <b>low flow, low dissolved oxygen</b>; <b>acidic (pH < 4.5)</b> from tannins & humic acids. Think “a super young peat swamp”.</p>
      <p>A stronghold: <b>~700 native plant species (>1/3 of native flora)</b> and 1/3–2/3 of other major taxa. Yet it sits next to a highway, a golf course and a reservoir outflow.</p>
      <ul><li><i>Encheloclarias kelioides</i> — catfish only found there in <b>2023</b> after 30 years of sampling</li>
      <li><b>Reticulated swamp crab</b> <i>Parathelphusa reticulata</i> — known <b>only from Nee Soon</b> worldwide; described 1990s; nocturnal; eats plant matter & litter; SG EN, global CR; ex-situ breeding at SBG → 20 released</li></ul>`,
      hook: `<b>Swamp = Sour tea</b> 🍵 — tannins make the water acidic and brown, low oxygen. Nee Soon is a <b>biodiversity vault</b>.` },
    { id: "f-change", title: "How Singapore's waters changed",
      img: "img/sp/h-marina.jpg", cap: "Marina Barrage",
      body: `<p>Why did waterways change?</p>
      <ul><li><b>Floods</b> (1960s, up to 2 m) → <b>widening, straightening and concretising</b> to move water to sea fast</li>
      <li><b>Water security</b>: dry spells and reliance on Malaysia → build reservoirs (e.g., <b>Marina Barrage</b>, 2008)</li>
      <li><b>Food</b>: post-war reservoirs used for aquaculture</li></ul>
      <p>Reservoir types:</p>
      <ul><li><b>Dammed inland streams</b> (CCNR: MacRitchie — first, late 1860s — Upper Seletar, Peirce): more organic matter, lower pH, <b>better water quality</b></li>
      <li><b>Dammed coastal deltas</b>: bigger, more <b>nutrient pollution</b>, sometimes higher salinity</li>
      <li><b>Holes in the ground</b>: e.g., <b>Bedok Reservoir</b>, a former sand quarry (sand for reclamation); prone to insect “outbreaks”</li></ul>
      <p><b>Drains & canals</b>: straightened, concrete, high flow, hard impermeable bed, occasional drying — harsh, variable habitats.</p>`,
      hook: `<b>3 F's that reshaped our rivers</b>: <b>F</b>loods, <b>F</b>reshwater security, <b>F</b>ood. 🌧️🚰🐟` },
    { id: "f-invasive", title: "Non-native freshwater species",
      img: "img/sp/redclaw.jpg", cap: "Red-claw crayfish",
      body: `<ul><li><b>African sharptooth catfish</b> <i>Clarias gariepinus</i> — air-breathing “walking” catfish from Africa/Asia Minor; introduced for food & aquarium trade; impacts: competition, predation, hybridisation, pathogens</li>
      <li><b>Red-claw crayfish</b> <i>Cherax quadricarinatus</i> — from northern Australia/PNG; aquaculture (1980s) then aquarium trade; in 3 reservoirs by 2007 and spreading; larger crayfish outcompete native crabs — <b>first evidence of ecological impacts by a non-native species in Singapore</b></li>
      <li><b>Guppy</b> <i>Poecilia reticulata</i> — from South America; introduced for <b>mosquito bio-control</b> but natives are better mosquito-larva predators; <b>live-bearer</b>; disrupts food webs</li>
      <li><b>Armoured catfish / “pleco”</b> <i>Pterygoplichthys disjunctivus</i> — Amazon/Orinoco; aquarium escapee; bony plates, air-breathing (survives polluted/stagnant water), <b>burrows into banks → erosion</b>, up to 50 cm, lives >10 years</li>
      <li><b>Nile tilapia “Ji Pun He”</b> <i>Oreochromis niloticus</i> — Hokkien “Japanese fish”: introduced by the <b>Japanese during WWII</b> (stock from Java) to feed people; reservoirs became aquaculture sites; now being replaced by other cichlids</li></ul>`,
      hook: `<b>Ji Pun He = “Japanese fish”</b> 🇯🇵🐟 — WWII food fish.<br><b>Guppy = “mosquito-cop” that failed</b> — native fish do the job better.<br><b>Red-claw = first proven invader impact</b> in SG.` },
    { id: "f-abc", title: "ABC Waters & conservation",
      body: `<p><b>Active, Beautiful, Clean (ABC) Waters Programme</b> — launched <b>2006 by PUB</b>: transform canals, drains, rivers and reservoirs beyond drainage into living, recreational, green spaces.</p>
      <ul><li><b>Active</b> — bring people closer to water (parks, trails)</li><li><b>Beautiful</b> — landscaped, green waterscapes instead of concrete</li><li><b>Clean</b> — better water quality, natural stormwater management</li></ul>
      <p>~100 potential projects by 2030 (e.g., Bishan-AMK Park, Pandan & Alexandra canals).</p>
      <p>Other efforts: <b>ex-situ captive breeding</b> (SBG facility) and reintroduction of crabs/prawns. Water transfer from Malaysia can also bring new species (some newly described).</p>
      <p>Freshwater in short: <b>6 native species highlighted, 5 locally threatened, 2 endemic</b> — many native freshwater species are threatened.</p>`,
      hook: `<b>ABC = Active, Beautiful, Clean</b> — as easy as ABC! 🔤 (PUB, 2006)`,
      why: "Mock Q7: “Many of Singapore's native freshwater species are threatened.”" },
  ],
  species: [
    { id: "sgcrab", common: "Singapore freshwater crab", sci: "Johora singaporensis", family: "Potamidae", group: "Freshwater native", status: "CR", where: "Hill streams (Bukit Timah, Bukit Batok, Bukit Gombak)", fact: "Endemic, nocturnal true crab lost from its type locality", hook: "Hill crab, Singapore's own." },
    { id: "muffprawn", common: "Muff river prawn", sci: "Macrobrachium pilimanus", family: "Palaemonidae", group: "Freshwater native", where: "One hill stream only", fact: "Found in a single hill stream; earlier records were misidentified; captive-bred and released", hook: "Hairy-handed (pili-manus) prawn." },
    { id: "pygmyrasbora", common: "Pygmy rasbora", sci: "Boraras maculatus", family: "Cyprinidae", group: "Freshwater native", status: "CR", where: "Forest streams in CCNR", fact: "Tiny gregarious fish, CR in Singapore but LC elsewhere; poached for aquariums", hook: "Tiny, rare here, common elsewhere." },
    { id: "betta", common: "Forest betta (Penang betta)", sci: "Betta pugnax", family: "Osphronemidae", group: "Freshwater native", where: "Forest streams around CCNR and BTNR", fact: "Air-breathing mouthbrooding fighting fish", hook: "Fighter babysitting eggs in its mouth." },
    { id: "swampcrab", common: "Reticulated swamp crab", sci: "Parathelphusa reticulata", family: "Gecarcinucidae", group: "Freshwater native", status: "EN", where: "Nee Soon freshwater swamp forest only", fact: "Known only from Nee Soon worldwide; captive-bred and released", hook: "Nee Soon's own crab." },
    { id: "africancatfish", common: "African sharptooth catfish", sci: "Clarias gariepinus", family: "Clariidae", group: "Freshwater non-native", status: "NA", where: "Reservoirs, canals, modified waterways", fact: "Introduced air-breathing ‘walking’ catfish; competes, preys, hybridises, spreads pathogens", hook: "Walking catfish from Africa." },
    { id: "redclaw", common: "Red-claw crayfish", sci: "Cherax quadricarinatus", family: "Parastacidae", group: "Freshwater non-native", status: "NA", where: "Reservoirs (spreading)", fact: "Australian invader; first evidence of ecological impact by a non-native species in Singapore", hook: "First proven invader impact." },
    { id: "guppy", common: "Guppy", sci: "Poecilia reticulata", family: "Poeciliidae", group: "Freshwater non-native", status: "NA", where: "Drains and canals", fact: "Introduced for mosquito bio-control (natives do it better); live-bearer", hook: "The mosquito-cop that failed." },
    { id: "pleco", common: "Armoured catfish (pleco)", sci: "Pterygoplichthys disjunctivus", family: "Loricariidae", group: "Freshwater non-native", status: "NA", where: "Canals, drains and reservoirs", fact: "Aquarium escapee with bony plates that burrows into banks causing erosion", hook: "Armoured bank-digger." },
    { id: "tilapia", common: "Nile tilapia (Ji Pun He)", sci: "Oreochromis niloticus", family: "Cichlidae", group: "Freshwater non-native", status: "NA", where: "Reservoirs and modified waterways", fact: "Introduced by the Japanese in WWII as food — hence ‘Ji Pun He’", hook: "Japanese fish." },
  ],
  questions: [
    { id: "f1", lesson: "f-why", q: "Lotic systems are…", options: ["Still-water systems like ponds", "Flowing-water systems like streams", "Saltwater systems", "Underground aquifers"], answer: [1], explain: "Lentic = still." },
    { id: "f2", lesson: "f-why", q: "Which are ARTIFICIAL freshwater habitats? <i>(select all that apply)</i>", options: ["Reservoirs", "Drains", "Canals", "Hill streams"], answer: [0, 1, 2], explain: "" },
    { id: "f3", lesson: "f-why", q: "Which statement best describes freshwater biodiversity in Singapore?", options: ["Most species are endemic", "All species are introduced", "All species are in the Red Data Book", "Many native freshwater species are threatened"], answer: [3], explain: "" },
    { id: "f4", lesson: "f-hill", q: "Hill streams are characterised by… <i>(select all that apply)</i>", options: ["High flow and high dissolved oxygen", "Granite boulders and gravel", "Very acidic pH < 4.5", "Cool temperatures"], answer: [0, 1, 3], explain: "pH 6–8; very acidic = swamp forest." },
    { id: "f5", lesson: "f-hill", q: "The Singapore freshwater crab is… <i>(select all that apply)</i>", options: ["Critically Endangered", "Found in hill streams", "Mostly nocturnal", "Found only in Nee Soon swamp"], answer: [0, 1, 2], explain: "Nee Soon only = reticulated swamp crab." },
    { id: "f6", lesson: "f-forest", q: "The pygmy rasbora is CR in Singapore but… elsewhere.", options: ["Extinct", "Least Concern", "Endangered", "Unknown"], answer: [1], explain: "Threatened locally by habitat loss and poaching." },
    { id: "f7", lesson: "f-forest", q: "<i>Betta pugnax</i> is… <i>(select all that apply)</i>", options: ["An air breather", "A mouthbrooder", "Found in forest streams", "Invasive"], answer: [0, 1, 2], explain: "Native forest fish." },
    { id: "f8", lesson: "f-swamp", q: "Why is freshwater swamp forest water so acidic?", options: ["Industrial pollution", "Tannins and humic acids from leaf litter", "Seawater intrusion", "Limestone"], answer: [1], explain: "pH < 4.5." },
    { id: "f9", lesson: "f-swamp", q: "Roughly what fraction of Singapore's native plants occur in freshwater swamp forest?", options: ["1/10", "More than 1/3 (~700 spp)", "All", "1/20"], answer: [1], explain: "" },
    { id: "f10", lesson: "f-swamp", q: "<i>Parathelphusa reticulata</i> is found…", options: ["Throughout Southeast Asia", "Only in Nee Soon Swamp Forest", "In hill streams", "In reservoirs"], answer: [1], explain: "The only known location in the world." },
    { id: "f11", lesson: "f-change", q: "Why were Singapore's waterways widened, straightened and concretised?", options: ["For boating", "To manage floods by moving water to sea faster", "For fishing", "To create habitats"], answer: [1], explain: "" },
    { id: "f12", lesson: "f-change", q: "Bedok Reservoir started as…", options: ["A dammed river", "A sand quarry", "A mangrove", "A swamp forest"], answer: [1], explain: "Sand used for land reclamation." },
    { id: "f13", lesson: "f-change", q: "Which was Singapore's first reservoir?", options: ["Marina Reservoir", "MacRitchie Reservoir", "Bedok Reservoir", "Upper Seletar"], answer: [1], explain: "Late 1860s; named after engineer James MacRitchie." },
    { id: "f14", lesson: "f-change", q: "Reservoirs formed from dammed coastal deltas tend to have…", options: ["Better water quality", "More nutrient pollution and sometimes higher salinity", "Lower pH", "Granite beds"], answer: [1], explain: "Inland dammed reservoirs have better quality." },
    { id: "f15", lesson: "f-invasive", q: "Why is the Nile tilapia called “Ji Pun He” in Hokkien?", options: ["It's from Japan", "It was introduced by the Japanese during WWII", "It's eaten raw", "It's red"], answer: [1], explain: "To feed starving people; stock from Java." },
    { id: "f16", lesson: "f-invasive", q: "Guppies were introduced to Singapore to…", options: ["Feed people", "Control mosquitoes", "Clean algae", "Aquarium shows"], answer: [1], explain: "Native fish are actually better mosquito-larva predators." },
    { id: "f17", lesson: "f-invasive", q: "Which non-native species provided the first evidence of ecological impact by a non-native species in Singapore?", options: ["Guppy", "Red-claw crayfish", "Tilapia", "Armoured catfish"], answer: [1], explain: "Larger crayfish outcompete native crabs." },
    { id: "f18", lesson: "f-invasive", q: "Impacts of the armoured catfish include… <i>(select all that apply)</i>", options: ["Bank erosion from burrowing", "Competition", "Damage to fishing gear", "Pollinating plants"], answer: [0, 1, 2], explain: "" },
    { id: "f19", lesson: "f-abc", q: "The ABC Waters Programme stands for…", options: ["Aquatic Biodiversity Conservation", "Active, Beautiful, Clean Waters", "Algae, Bacteria, Crustaceans", "All Basins Covered"], answer: [1], explain: "Launched by PUB in 2006." },
  ],
  cheatsheet: `<ul>
    <li>Lotic (flowing) vs lentic (still); natural (native spp) vs artificial (non-native spp).</li>
    <li><b>Hill streams</b> (Bt Timah/Batok/Gombak): boulders, high flow & O₂, pH 6–8 → SG freshwater crab (CR, endemic), muff river prawn (one stream).</li>
    <li><b>Forest streams</b> (CCNR, BTNR, Windsor): pH 4.5–7 → pygmy rasbora (CR here, LC elsewhere), <i>Betta pugnax</i> (air-breathing mouthbrooder).</li>
    <li><b>Swamp forest</b> (Nee Soon): low flow & O₂, pH &lt;4.5 tannins; ~700 plant spp; reticulated swamp crab (only Nee Soon), <i>Encheloclarias</i> (2023).</li>
    <li>Changes: floods → concrete canals; water security → reservoirs (MacRitchie 1860s first; Marina Barrage 2008; Bedok = sand quarry); food → aquaculture.</li>
    <li>Non-natives: African catfish, red-claw crayfish (first proven impact), guppy (mosquito control), armoured catfish (bank erosion), tilapia “Ji Pun He” (WWII Japanese).</li>
    <li>ABC Waters (PUB 2006). Captive breeding at SBG. Many native FW species threatened.</li></ul>`,
});
