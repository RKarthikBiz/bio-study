window.MODULES = window.MODULES || [];
MODULES.push({
  id: "plants", emoji: "🌺", title: "Plants of Singapore", short: "Plants",
  blurb: "How to ID plants, the major plant groups, and the 10 must-know species from staghorn fern to belinjau.",
  source: "Lecture 3 — Terrestrial Plants; Lecture 4A — Revision",
  lessons: [
    { id: "p-id", title: "How to identify a plant",
      body: `<p>A <b>leaf</b> is the photosynthetic organ that <b>subtends an axillary bud</b> along a stem. A <b>compound leaf</b> also has just one axillary bud at its base — the leaflets don't.</p>
      <p>Leaf arrangement: <b>alternate</b> (distichous), <b>spiral</b>, <b>opposite</b>, <b>whorled</b>.</p>
      <p>Most specimens you meet are <b>sterile</b> (no flowers/fruit). With a phone camera:</p>
      <ul><li><b>Photograph</b>: leaf upper & undersides (veins, glands), young growing tips (stipules, hairs), bark & twigs</li>
      <li><b>Record</b>: growth form (tree/climber/shrub), simple vs compound leaf, leaf arrangement, sap</li></ul>
      <p>Plant <b>families</b> share traits and are often easier to ID than species. Singapore has ~<b>180 angiosperm, 25 fern and 3 gymnosperm families</b>. The most species-rich family is <b>Rubiaceae</b> (coffee family).</p>
      <p>Why learn? Plants feed and house animals; ID is a marketable skill; Singapore has the world's densest plant collections — a great place to learn.</p>`,
      hook: `To find where a leaf starts, <b>hunt for the bud in the armpit</b> (axil). One bud = one leaf, no matter how many leaflets. 💪` },
    { id: "p-groups", title: "The major plant groups",
      body: `<p>Nested groups (mosses, liverworts and hornworts are <b>not</b> in ES5008):</p>
      <ul><li><b>Vascular plants</b> = ferns & fern allies + seed plants</li>
      <li><b>Seed plants</b> = gymnosperms + angiosperms</li>
      <li><b>Angiosperms</b> (flowering plants) = monocots + dicots</li></ul>
      <p>Singapore's ~1,800 native plants: <b>~120 ferns & allies, ~8 gymnosperms, 1,600+ angiosperms</b>.</p>
      <p><b>Ferns</b>: non-flowering, <b>spore-producing</b>, slow-growing; many have compound leaves (<b>fronds</b>) and creeping rhizomes; common in understorey and as epiphytes.</p>
      <p><b>Gymnosperms</b>: “naked seeds”, <b>no flowers or fruits</b> (conifers, ginkgo, cycads). In Singapore: 3 families — <b>Gnetaceae (4)</b>, Podocarpaceae (2), Cycadaceae (1).</p>`,
      hook: `<b>Gymno = naked</b> (like a gym-nasium where Greeks trained naked 😳) → naked seeds. <b>Angio = vessel</b> → seeds enclosed in a fruit.` },
    { id: "p-monocot", title: "Monocots: never woody",
      body: `<p><b>Monocots</b> = aroids, gingers, orchids, yams, grasses, <b>palms</b>. <span class="key">Monocots are never truly woody — no true trees</span>. Mostly understorey herbs, some climbers and epiphytes.</p>
      <p><b>Dicots</b> = everything else among angiosperms (most trees).</p>
      <p>The key limiting resource in Singapore's primeval forests is <b>LIGHT</b> — not water (high, non-seasonal rain) and only sometimes nutrients. So growth forms are all about light:</p>
      <ul><li><b>Trees</b> race up to it</li><li><b>Climbers</b> borrow others' trunks</li><li><b>Epiphytes</b> perch on branches</li><li><b>Herbs/shrubs</b> tolerate shade on the floor (many monocots)</li></ul>`,
      hook: `Monocots are the <b>“ground-floor tenants”</b> (gingers, aroids, palms) — they never build a wooden tower. Palms look like trees but aren't truly woody.` },
    { id: "p-staghorn", title: "Staghorn fern",
      img: "img/sp/platycerium.jpg", cap: "Platycerium coronarium",
      body: `<p><b><i>Platycerium coronarium</i></b> (Polypodiaceae) · <span class="st st-EN">EN</span> · Fern · Epiphyte</p>
      <ul><li>Epiphytic fern in <b>branch forks of large trees</b> — often on <b>roadside trees</b>. Look up!</li>
      <li>Two types of fronds: <b>shield fronds</b> (collect leaf litter → decomposing litter feeds the fern; microhabitat for small animals) and <b>antler fronds</b> (pendulous, hanging down, in this species)</li>
      <li>The other Singapore species, <i>P. ridleyi</i>, is nationally extinct — named after H.N. Ridley, first director of SBG</li></ul>`,
      hook: `A <b>stag</b> with a <b>crown</b> (<i>coronarium</i>) sitting in a tree: the <b>shield</b> is its compost bin 🗑️, the <b>antlers</b> dangle down.` },
    { id: "p-tiger", title: "Tiger orchid",
      img: "img/sp/grammatophyllum.jpg", cap: "Grammatophyllum speciosum",
      body: `<p><b><i>Grammatophyllum speciosum</i></b> (Orchidaceae) · <span class="st st-NEx">NEx</span> · Monocot · Epiphyte</p>
      <ul><li>Large epiphytic orchid — possibly the <b>world's largest/heaviest orchid</b></li>
      <li>Flowers once every few years; tiger-striped flowers</li>
      <li><b>Nationally extinct</b> in the wild, brought back by the <b>orchid breeding/reintroduction programme</b> (Dr Yam Tim Wing)</li>
      <li>Where: urban parks (SBG, Upper Peirce), streetscapes</li></ul>
      <p>Orchids in general: very diverse; in the tropics many are epiphytes storing water in <b>pseudobulbs</b>; some need specialist pollinators. <i>Vanda</i> ‘Miss Joaquim’ is <b>not native</b>.</p>`,
      hook: `<b>Tiger = gone wild, back in town.</b> 🐯 Extinct in the wild (NEx) but roaring back on park trees thanks to breeding.` },
    { id: "p-nypa", title: "Nypa palm",
      img: "img/sp/nypa.jpg", cap: "Nypa fruticans",
      body: `<p><b><i>Nypa fruticans</i></b> (Arecaceae) · <span class="st st-VU">VU</span> · Monocot · Understorey/shrub</p>
      <ul><li><b>Mangrove palm</b> forming monodominant stands at edges of estuarine rivers (<b>brackish</b> water)</li>
      <li>Fibrous, buoyant, <b>water-dispersed</b> fruits</li>
      <li>Many uses: <b>attap roofs</b> (thatch), edible seed <b>attap chee</b> (in ice kacang, cendol), sap → sugar, alcohol, vinegar</li>
      <li>Where: Sungei Buloh, Pasir Ris Park, Chek Jawa</li></ul>`,
      hook: `<b>Nypa = attap chee in your ice kacang</b> 🍧. Mangrove palm → you'd never find it in a dry inland forest like CCNR.`,
      why: "Mock Q3: Nypa is unlikely in CCNR's native forests (it's a mangrove plant)." },
    { id: "p-tacca", title: "Bat lily",
      img: "img/sp/tacca.jpg", cap: "Tacca cristata",
      body: `<p><b><i>Tacca cristata</i></b> (syn. <i>T. integrifolia</i>; Taccaceae) · <span class="st st-VU">VU</span> · Monocot · Understorey herb</p>
      <ul><li>Related to true yams (Taccaceae was once in Dioscoreaceae)</li>
      <li>Highly modified, bat-like inflorescence with big <b>bracts</b> and long filaments — “weird and wonderful flower”</li>
      <li><b>Understorey herb of native species-dominated forests</b></li>
      <li>Pollinated by <b>midges</b> (Ceratopogonidae)</li>
      <li>Where: BTNR, CCNR — easily seen along trails</li></ul>`,
      hook: `A <b>bat</b> 🦇 hanging in the dark forest floor — but it's <b>midges</b>, not bats, that pollinate it.` },
    { id: "p-nepenthes", title: "Slender pitcher plant",
      img: "img/sp/nepenthes.jpg", cap: "Nepenthes gracilis",
      body: `<p><b><i>Nepenthes gracilis</i></b> (Nepenthaceae) · <span class="st st-LC">LC</span> · Dicot · Climber</p>
      <ul><li><b>Carnivorous</b>: modified leaves (pitchers) trap insects, mostly <b>ants</b></li>
      <li>Found in <b>nutrient-poor</b> habitats, especially <b>resam scrubland and Adinandra belukar</b></li>
      <li><b>Heteroblastic</b>: different pitcher types in rosette vs climbing stages</li>
      <li>Partner: the pitcher plant crab spider <i>Thomisus nepenthiphilus</i> lives in its pitchers</li>
      <li>Where: Kent Ridge Park, MacRitchie reservoir edges, NTU and NUS</li></ul>
      <p>Singapore has <b>3 native <i>Nepenthes</i></b>; ~180 species worldwide, centred in SE Asia.</p>`,
      hook: `Poor soil = <b>hungry plant</b> → it orders <b>ant takeaway</b> 🐜 in its pitcher. Slender (gracilis) = slim pitchers.` },
    { id: "p-macaranga", title: "Common mahang",
      img: "img/sp/macaranga.jpg", cap: "Macaranga bancana",
      body: `<p><b><i>Macaranga bancana</i></b> (Euphorbiaceae) · <span class="st st-LC">LC</span> · Dicot · Tree</p>
      <ul><li><b>Early-successional pioneer / gap species</b> — fast-growing small tree in treefall gaps and edges</li>
      <li><b>Tri-lobed leaves with long petioles</b></li>
      <li><b>Ant-mutualist</b> pioneer (ants live in it and defend it)</li>
      <li>An “acquisitive” species (thin leaves, light wood, small seeds) — the opposite of slow dipterocarps</li></ul>`,
      hook: `<b>Mahang = “ma-HANG out in the gaps”</b> with its ant bodyguards 🐜🛡️. Three-lobed leaf like a duck's foot.` },
    { id: "p-sterculia", title: "Sterculia macrophylla",
      img: "img/sp/sterculia.jpg", cap: "Sterculia macrophylla",
      body: `<p><b><i>Sterculia macrophylla</i></b> (Malvaceae, cacao family) · <span class="st st-CR">CR</span> · Dicot · Tree</p>
      <ul><li><b>Late-successional</b>, loosely associated with swamp forests</li>
      <li>Bright red fruits → likely mammal/bird dispersed</li>
      <li><b>Deciduous</b>: leaves shed and produced synchronously (sheds leaves while fruiting)</li>
      <li><b>Heteroblastic</b>: seedling leaves are <b>lobed</b>, adult leaves <b>unlobed</b></li>
      <li>Increasingly planted along streets/parks. Where: MacRitchie, BTNR, Bishan-AMK Park</li></ul>`,
      hook: `<b>“Macro-phylla” = big leaves</b> that <b>change outfit</b>: lobed as a baby, smooth as an adult (heteroblastic) and drops them all at once (deciduous). 👶➡️🧑` },
    { id: "p-keruing", title: "Keruing (Dipterocarpus)",
      img: "img/sp/dipterocarpus.jpg",
      body: `<p><b><i>Dipterocarpus</i> spp.</b> (Dipterocarpaceae) · <span class="st st-EN">EN</span> · Dicot · Tree</p>
      <ul><li><b>Canopy species in primary forests</b> — dominant in <b>BTNR primary forest</b></li>
      <li>Important timber (“keruing”)</li>
      <li>ID: <b>double-kneed petioles</b> (swollen pulvini), large “<b>corrugated-sheet</b>” leaves, long <b>stipules</b></li>
      <li>Where: BTNR, CCNR, planted in parks and roadsides; heritage tree <i>D. sublamellatus</i> at Changi</li></ul>`,
      hook: `Keruing leaf = <b>zinc roof</b> (corrugated) on a stalk with <b>two knees</b> 🦵🦵.` },
    { id: "p-rhu", title: "Common Rhu",
      img: "img/sp/casuarina.jpg", cap: "Casuarina equisetifolia",
      body: `<p><b><i>Casuarina equisetifolia</i></b> (Casuarinaceae) · <span class="st st-LC">LC</span> · Dicot · Tree</p>
      <ul><li><b>Native coastal tree</b> — <b>looks like a conifer but isn't one</b> (needle-like green parts are photosynthetic stems/cladodes; leaves are tiny)</li>
      <li>Highly tolerant of <b>salt spray, sandy soils, dry conditions</b></li>
      <li>Forms monodominant forests on <b>reclaimed land</b>; common roadside tree (e.g., Coney Island, Yuan Ching Road)</li>
      <li>Where: everywhere — naturally on coasts</li></ul>`,
      hook: `<b>Rhu by the sea, a pine it's not to be.</b> 🌲❌ Beach + sand + reclaimed land.`,
      why: "Mock Q3: Rhu is unlikely in native forests of CCNR (coastal species)." },
    { id: "p-gnetum", title: "Belinjau",
      img: "img/sp/gnetum.jpg", cap: "Gnetum gnemon",
      body: `<p><b><i>Gnetum gnemon</i></b> (Gnetaceae) · <span class="st st-CR">CR</span> · <b>Gymnosperm</b> · Tree</p>
      <ul><li>Gnetaceae: tropical gymnosperm genus; in Singapore <b>4 liana species</b> only in forests (3 CR, 1 EN) + <b>one tree species</b>, <i>G. gnemon</i></li>
      <li>Distinct trunk, twigs and leaves; <b>dioecious</b> (separate male and female plants)</li>
      <li>Cultivated for edible nuts → <b>melinjo crackers (emping), a CNY snack</b></li>
      <li>Where: planted along roads & parks; <b>abandoned plantation forests</b> (Thomson Nature Park, SBG learning forest)</li></ul>`,
      hook: `<b>Belinjau = Chinese New Year crackers</b> 🧧 from a <b>gymnosperm</b> (the only gymnosperm on the list!).`,
      why: "Mock Q18: Gnetaceae → gymnosperms." },
    { id: "p-ten", title: "The 10 must-know plants (table)",
      body: `<div class="tablewrap"><table class="t"><tr><th>Species</th><th>Status</th><th>Group</th><th>Life form</th><th>Significance</th></tr>
      <tr><td>Staghorn fern <i>Platycerium coronarium</i></td><td>EN</td><td>Fern</td><td>Epiphyte</td><td>Often on roadside trees</td></tr>
      <tr><td>Tiger orchid <i>Grammatophyllum speciosum</i></td><td>NEx</td><td>Monocot</td><td>Epiphyte</td><td>Giant orchid back from extinction</td></tr>
      <tr><td>Nypa palm <i>Nypa fruticans</i></td><td>VU</td><td>Monocot</td><td>Understorey herb/shrub</td><td>Attap chee, attap roofs</td></tr>
      <tr><td>Bat lily <i>Tacca cristata</i></td><td>VU</td><td>Monocot</td><td>Understorey herb</td><td>Weird and wonderful flower</td></tr>
      <tr><td>Slender pitcher plant <i>Nepenthes gracilis</i></td><td>LC</td><td>Dicot</td><td>Climber</td><td>Carnivorous plant</td></tr>
      <tr><td>Common mahang <i>Macaranga bancana</i></td><td>LC</td><td>Dicot</td><td>Tree</td><td>Ant-mutualist pioneer</td></tr>
      <tr><td><i>Sterculia macrophylla</i></td><td>CR</td><td>Dicot</td><td>Tree</td><td>Heteroblastic & deciduous</td></tr>
      <tr><td>Keruing <i>Dipterocarpus</i> spp.</td><td>EN</td><td>Dicot</td><td>Tree</td><td>Dominant in BTNR primary forest</td></tr>
      <tr><td>Rhu <i>Casuarina equisetifolia</i></td><td>LC</td><td>Dicot</td><td>Tree</td><td>Dominant in reclaimed land forest</td></tr>
      <tr><td>Belinjau <i>Gnetum gnemon</i></td><td>CR</td><td>Gymnosperm</td><td>Tree</td><td>CNY snack, abandoned plantations</td></tr></table></div>`,
      hook: `Story time 📖: A <b>stag</b> and a <b>tiger</b> sit up in a tree (epiphytes). Below, a <b>bat</b> hides by a <b>Nypa</b> palm (monocots). A hungry <b>pitcher</b> climbs a <b>mahang</b> full of ants, past a shape-shifting <b>Sterculia</b> and a giant <b>Keruing</b>. At the beach a fake pine (<b>Rhu</b>) watches someone eat <b>belinjau</b> crackers.` },
    { id: "p-enjoy", title: "Enjoying & protecting plants",
      body: `<ul><li>Use binoculars, walk slowly and <b>look up</b>; carry a macro lens or loupe</li>
      <li>Resources: iNaturalist, Flora & Fauna Web, uforest.org, The Plant Observatory</li>
      <li>Citizen science: phenology (flowering/fruiting), plant–animal interactions — even new records from phone photos (e.g., the bee <i>Amegilla insularis</i> on <i>Chassalia</i>)</li></ul>
      <p><b>Loving the forest to death?</b> Trampling and <b>illegal trails</b> harm regeneration — seedlings of late-successional trees are very vulnerable. <b>Poaching</b> of ornamental plants still happens (e.g., <i>Labisia pumila</i> for terrariums, <i>Nepenthes ampullaria</i> cuttings).</p>`,
      hook: `Trails are like <b>footpaths on a baby nursery floor</b> — step off and you crush the next generation of giants. 👣🌱` },
  ],
  species: [
    { id: "platycerium", common: "Staghorn fern", sci: "Platycerium coronarium", family: "Polypodiaceae", group: "Fern", status: "EN", where: "Branch forks of large trees, often roadside trees", fact: "Epiphytic fern with litter-collecting shield fronds and pendulous antler fronds", hook: "Stag with a crown in the tree." },
    { id: "grammatophyllum", common: "Tiger orchid", sci: "Grammatophyllum speciosum", family: "Orchidaceae", group: "Monocot", status: "NEx", where: "Urban parks and streetscapes (reintroduced)", fact: "Possibly the world's largest orchid; nationally extinct but brought back by an orchid breeding programme", hook: "Tiger gone wild, back in town." },
    { id: "nypa", common: "Nypa palm", sci: "Nypa fruticans", family: "Arecaceae", group: "Monocot", status: "VU", where: "Mangroves / brackish estuary edges", fact: "Mangrove palm used for attap roofs and attap chee; water-dispersed fruits", hook: "Ice kacang palm." },
    { id: "tacca", common: "Bat lily", sci: "Tacca cristata", family: "Taccaceae", group: "Monocot", status: "VU", where: "Understorey of native species-dominated forests (BTNR, CCNR)", fact: "Weird and wonderful bat-shaped inflorescence pollinated by midges; related to yams", hook: "Bat-shaped, midge-pollinated." },
    { id: "nepenthes", common: "Slender pitcher plant", sci: "Nepenthes gracilis", family: "Nepenthaceae", group: "Dicot", status: "LC", where: "Resam scrubland & Adinandra belukar (nutrient-poor soil)", fact: "Carnivorous climber trapping mostly ants in modified leaves; heteroblastic pitchers", hook: "Hungry plant on poor soil orders ant takeaway." },
    { id: "macaranga", common: "Common mahang", sci: "Macaranga bancana", family: "Euphorbiaceae", group: "Dicot", status: "LC", where: "Forest gaps and edges (early succession)", fact: "Ant-mutualist pioneer tree with tri-lobed leaves on long petioles", hook: "Hangs out in gaps with ant bodyguards." },
    { id: "sterculia", common: "Sterculia macrophylla", sci: "Sterculia macrophylla", family: "Malvaceae", group: "Dicot", status: "CR", where: "MacRitchie, BTNR, planted in urban parks", fact: "Heteroblastic (lobed seedling leaves) and deciduous late-successional tree with red fruits", hook: "Changes leaf outfit as it grows up." },
    { id: "dipterocarpus", common: "Keruing", sci: "Dipterocarpus spp.", family: "Dipterocarpaceae", group: "Dicot", status: "EN", where: "Primary forest canopy (BTNR, CCNR)", fact: "Dominant in BTNR primary forest; double-kneed petioles, corrugated leaves, long stipules", hook: "Zinc-roof leaf with two knees." },
    { id: "casuarina", common: "Common Rhu", sci: "Casuarina equisetifolia", family: "Casuarinaceae", group: "Dicot", status: "LC", where: "Coasts, reclaimed land, roadsides", fact: "Native coastal tree that looks like a conifer; dominant in reclaimed land forest", hook: "Rhu by the sea, a pine it's not to be." },
    { id: "gnetum", common: "Belinjau", sci: "Gnetum gnemon", family: "Gnetaceae", group: "Gymnosperm", status: "CR", where: "Abandoned plantations, planted along roads", fact: "Dioecious gymnosperm tree whose nuts make melinjo crackers (CNY snack)", hook: "The only gymnosperm on the list — CNY crackers." },
  ],
  questions: [
    { id: "p1", lesson: "p-id", q: "How can you tell where a single compound leaf begins?", options: ["Each leaflet has an axillary bud", "Only the whole compound leaf subtends an axillary bud", "Compound leaves have no buds", "By counting veins"], answer: [1], explain: "One axillary bud at the base of the whole leaf — leaflets don't have their own." },
    { id: "p2", lesson: "p-id", q: "When photographing a sterile plant for ID, which are useful? <i>(select all that apply)</i>", options: ["Upper and lower leaf surfaces", "Young growing tips (stipules, hairs)", "Bark and twigs", "Only the soil"], answer: [0, 1, 2], explain: "Also record growth form, leaf type, arrangement and sap." },
    { id: "p3", lesson: "p-id", q: "Which is the most species-rich plant family in Singapore?", options: ["Orchidaceae", "Rubiaceae", "Dipterocarpaceae", "Arecaceae"], answer: [1], explain: "Rubiaceae (coffee family)." },
    { id: "p4", lesson: "p-groups", q: "Which group produces spores and no seeds?", options: ["Gymnosperms", "Ferns and fern allies", "Monocots", "Dicots"], answer: [1], explain: "Ferns are non-flowering, spore-producing vascular plants." },
    { id: "p5", lesson: "p-groups", q: "Gymnosperms are characterised by… <i>(select all that apply)</i>", options: ["Naked seeds", "No flowers or fruits", "Producing spores only", "Being monocots"], answer: [0, 1], explain: "Naked-seeded plants without flowers or fruits." },
    { id: "p6", lesson: "p-groups", q: "Which family has the most native gymnosperm species in Singapore?", options: ["Podocarpaceae", "Cycadaceae", "Gnetaceae", "Pinaceae"], answer: [2], explain: "Gnetaceae (4–5), Podocarpaceae (2), Cycadaceae (1). Pines aren't native." },
    { id: "p7", lesson: "p-groups", q: "Which plant groups are NOT covered in ES5008?", options: ["Ferns", "Mosses, liverworts, hornworts", "Gymnosperms", "Monocots"], answer: [1], explain: "Bryophytes are excluded." },
    { id: "p8", lesson: "p-monocot", q: "Which statement about monocots is correct?", options: ["Most are large woody trees", "They are never truly woody — mostly understorey herbs, some climbers and epiphytes", "They are gymnosperms", "They don't flower"], answer: [1], explain: "Aroids, gingers, orchids, yams, grasses, palms." },
    { id: "p9", lesson: "p-monocot", q: "The key limiting resource for plant growth in Singapore's primeval forests is…", options: ["Water", "Light", "Nitrogen", "Temperature"], answer: [1], explain: "High, non-seasonal rainfall → light is what plants compete for." },
    { id: "p10", lesson: "p-monocot", q: "Which of these are monocots? <i>(select all that apply)</i>", options: ["Tiger orchid", "Nypa palm", "Bat lily", "Slender pitcher plant"], answer: [0, 1, 2], explain: "Nepenthes is a dicot." },
    { id: "p11", lesson: "p-staghorn", q: "What do the shield fronds of the staghorn fern do?", options: ["Produce seeds", "Accumulate leaf litter that decomposes into nutrients", "Trap insects", "Store water in pseudobulbs"], answer: [1], explain: "Litter in shield fronds feeds the fern and shelters small animals." },
    { id: "p12", lesson: "p-staghorn", q: "Where are you most likely to spot <i>Platycerium coronarium</i>?", options: ["Forest floor", "Branch forks of large (often roadside) trees", "Mangrove mud", "Reservoir edges"], answer: [1], explain: "Epiphyte — look up!" },
    { id: "p13", lesson: "p-tiger", q: "The tiger orchid's Singapore status is NEx. How is it found in Singapore today?", options: ["Wild in BTNR", "Reintroduced via an orchid breeding programme, in urban parks and streetscapes", "Only in herbaria", "In mangroves"], answer: [1], explain: "Brought back from extinction by orchid breeding (Dr Yam Tim Wing)." },
    { id: "p14", lesson: "p-tiger", q: "Many tropical epiphytic orchids store water in…", options: ["Pitchers", "Pseudobulbs", "Shield fronds", "Cladodes"], answer: [1], explain: "Pseudobulbs." },
    { id: "p15", lesson: "p-tiger", type: "tf", q: "True or false: <i>Vanda</i> ‘Miss Joaquim’ is a native Singapore orchid.", options: ["True", "False"], answer: [1], keepOrder: true, explain: "It's a hybrid/cultivated orchid, not native." },
    { id: "p16", lesson: "p-nypa", q: "Which products come from the Nypa palm? <i>(select all that apply)</i>", options: ["Attap roofs", "Attap chee", "Sugar, vinegar and alcohol from sap", "Melinjo crackers"], answer: [0, 1, 2], explain: "Melinjo crackers come from belinjau (<i>Gnetum gnemon</i>)." },
    { id: "p17", lesson: "p-nypa", q: "Nypa fruits are dispersed by…", options: ["Bats", "Wind", "Water", "Ants"], answer: [2], explain: "Fibrous, buoyant, water-dispersed." },
    { id: "p18", lesson: "p-tacca", q: "The bat lily is pollinated by…", options: ["Bats", "Midges", "Bees", "Birds"], answer: [1], explain: "Midges (Ceratopogonidae)." },
    { id: "p19", lesson: "p-tacca", q: "In which habitat do you find the bat lily?", options: ["Mangroves", "Understorey of native species-dominated forests", "Reclaimed land", "Resam scrubland"], answer: [1], explain: "BTNR/CCNR trails." },
    { id: "p20", lesson: "p-nepenthes", q: "Why do <i>Nepenthes</i> pitcher plants thrive in resam scrubland and Adinandra belukar?", options: ["They need full shade", "Nutrient-poor soils favour plants that get nutrients from prey", "They need salt water", "They are planted there"], answer: [1], explain: "Carnivory supplies N and P lacking in poor soil." },
    { id: "p21", lesson: "p-nepenthes", q: "“Heteroblastic” in <i>Nepenthes gracilis</i> means…", options: ["It's a hybrid", "It produces different pitcher types at rosette vs climbing stages", "It sheds leaves synchronously", "It has separate male and female plants"], answer: [1], explain: "Heteroblasty = juvenile and adult forms differ." },
    { id: "p22", lesson: "p-macaranga", q: "<i>Macaranga bancana</i> is best described as…", options: ["A late-successional canopy giant", "An early-successional ant-mutualist pioneer of gaps", "A mangrove palm", "An epiphyte"], answer: [1], explain: "Fast-growing gap species with tri-lobed leaves." },
    { id: "p23", lesson: "p-sterculia", q: "<i>Sterculia macrophylla</i> is both… <i>(select all that apply)</i>", options: ["Heteroblastic", "Deciduous", "Carnivorous", "A gymnosperm"], answer: [0, 1], explain: "Lobed seedling leaves vs unlobed adult leaves; sheds leaves synchronously." },
    { id: "p24", lesson: "p-sterculia", q: "<i>Sterculia macrophylla</i> belongs to which family?", options: ["Malvaceae (cacao family)", "Dipterocarpaceae", "Euphorbiaceae", "Gnetaceae"], answer: [0], explain: "Malvaceae." },
    { id: "p25", lesson: "p-keruing", q: "Which features help identify <i>Dipterocarpus</i> (keruing)? <i>(select all that apply)</i>", options: ["Double-kneed petioles", "Large corrugated leaves", "Long stipules", "Tri-lobed leaves"], answer: [0, 1, 2], explain: "Tri-lobed leaves = Macaranga." },
    { id: "p26", lesson: "p-keruing", q: "Keruing is dominant in which habitat?", options: ["BTNR primary forest", "Reclaimed land", "Abandoned plantations", "Mangroves"], answer: [0], explain: "Canopy of primary forest." },
    { id: "p27", lesson: "p-rhu", q: "Which is TRUE about <i>Casuarina equisetifolia</i>?", options: ["It's a conifer", "It's a native coastal tree tolerant of salt spray and sandy soils", "It's invasive from Africa", "It grows in swamp forests"], answer: [1], explain: "Looks like a conifer but isn't; native; reclaimed land forests." },
    { id: "p28", lesson: "p-gnetum", q: "Belinjau (<i>Gnetum gnemon</i>) is… <i>(select all that apply)</i>", options: ["A gymnosperm", "Dioecious", "A source of a Chinese New Year snack", "A liana"], answer: [0, 1, 2], explain: "It's the one TREE species of Gnetaceae here; the other 4 are lianas." },
    { id: "p29", lesson: "p-gnetum", q: "Where might you find belinjau in Singapore? <i>(select all that apply)</i>", options: ["Abandoned plantation forests", "Planted along roads and parks", "Coral reefs", "Mudflats"], answer: [0, 1], explain: "Thomson Nature Park, SBG learning forest, Sungei Tengah Rd." },
    { id: "p30", lesson: "p-ten", q: "Which of the 10 must-know plants are EPIPHYTES? <i>(select all that apply)</i>", options: ["Staghorn fern", "Tiger orchid", "Bat lily", "Slender pitcher plant"], answer: [0, 1], explain: "Bat lily = understorey herb; pitcher plant = climber." },
    { id: "p31", lesson: "p-ten", q: "Which of the 10 must-know plants are Critically Endangered? <i>(select all that apply)</i>", options: ["<i>Sterculia macrophylla</i>", "Belinjau", "Nypa palm", "Common mahang"], answer: [0, 1], explain: "Nypa VU; mahang LC." },
    { id: "p32", lesson: "p-enjoy", q: "Why is going off-trail harmful to forests?", options: ["It scares birds only", "Trampling kills vulnerable seedlings of late-successional trees and creates illegal trails", "It spreads fire", "It's not harmful"], answer: [1], explain: "“Loving the forest to death.”" },
    { id: "p33", lesson: "p-enjoy", q: "Which plants were given as examples of poaching? <i>(select all that apply)</i>", options: ["<i>Labisia pumila</i>", "<i>Nepenthes ampullaria</i>", "<i>Falcataria falcata</i>", "<i>Hevea brasiliensis</i>"], answer: [0, 1], explain: "Popular for terrariums / collectors." },
  ],
  cheatsheet: `<ul>
    <li><b>Leaf</b> subtends an axillary bud. Arrangements: alternate, spiral, opposite, whorled.</li>
    <li>~1,800 native plants: ~120 ferns, ~8 gymnosperms, 1,600+ angiosperms. Families: 180 / 25 / 3. Rubiaceae largest.</li>
    <li><b>Ferns</b> spores; <b>gymnosperms</b> naked seeds (Gnetaceae, Podocarpaceae, Cycadaceae); <b>monocots</b> never woody.</li>
    <li><b>Light</b> is the limiting resource → growth forms: trees, climbers, epiphytes, understorey herbs.</li>
    <li>Epiphytes: staghorn fern (EN), tiger orchid (NEx). Understorey: Nypa (VU, mangrove), bat lily (VU, midges).</li>
    <li>Climber: slender pitcher (LC, poor soil, ants). Trees: mahang (LC, ant pioneer), Sterculia (CR, heteroblastic & deciduous), keruing (EN, BTNR), Rhu (LC, reclaimed), belinjau (CR, gymnosperm, CNY).</li>
    <li>Threats: trampling, illegal trails, poaching (<i>Labisia</i>, <i>Nepenthes</i>).</li></ul>`,
});
