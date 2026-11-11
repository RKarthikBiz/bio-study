window.MODULES = window.MODULES || [];
MODULES.push({
  id: "inverts", emoji: "⭐", title: "Marine Invertebrates", short: "Sea inverts",
  blurb: "Flatworms, segmented worms, sea stars and sea cucumbers, crabs and barnacles, and horseshoe crabs.",
  source: "Lecture 11 — Marine invertebrates (Weng Ngai Lam); Lecture 12a — Marine misc",
  lessons: [
    { id: "v-overview", title: "Four groups in one lecture",
      body: `<p>Lecture 11 covered four marine groups:</p>
      <div class="tablewrap"><table class="t"><tr><th>Group</th><th>Phylum</th><th>Body</th><th>Legs</th></tr>
      <tr><td>Marine flatworms (Polycladida)</td><td>Platyhelminthes</td><td>Unsegmented, flat</td><td>None</td></tr>
      <tr><td>Starfish, sea urchins, sea cucumbers</td><td>Echinodermata</td><td>Pentaradial</td><td>Tube feet</td></tr>
      <tr><td>Marine segmented worms</td><td>Annelida</td><td>Many segments</td><td>None</td></tr>
      <tr><td>Crustaceans</td><td>Arthropoda (subphylum Crustacea)</td><td>2 segments</td><td>10 (decapods)</td></tr></table></div>
      <p>Terrestrial annelids and flatworms (earthworms, leeches, hammerhead flatworms) have <b>low diversity</b> and aren't covered. The marine ones are <b>highly diverse</b>.</p>`,
      hook: `<b>“Flat, Star, Segment, Shell”</b> 📄⭐🐛🦀 — flatworms, echinoderms, annelids, crustaceans, in lecture order.` },
    { id: "v-echino", title: "Echinoderms: the hydraulic animals",
      img: "img/sp/knobblystar.jpg", cap: "Knobbly sea star",
      body: `<p><b>Echinodermata</b> share:</p>
      <ul><li>A <b>water vascular system</b>: a hydraulic network of canals connected to <b>tube feet</b>, used to move</li>
      <li>A <b>calcareous skeleton</b> just beneath the skin, made of plates called <b>ossicles</b></li>
      <li><b>Pentaradial</b> (five-part) symmetry</li></ul>
      <p>Classes you need: sea stars, brittle stars, feather stars, sea cucumbers (Holothuroidea), and sea urchins (Echinoidea). <b>Sand dollars (Clypeasteroida) are a type of sea urchin.</b></p>`,
      hook: `Echinoderms run on <b>water pressure</b> 💧 — like a hydraulic digger, the tube feet are its little pistons.` },
    { id: "v-stars", title: "Sea stars, brittle stars & feather stars",
      img: "img/sp/redfeatherstar.jpg", cap: "Red feather star",
      body: `<ul><li><b>Knobbly sea star</b> <i>Protoreaster nodosus</i> · <span class="st st-EN">EN</span>: one of the larger, most recognisable sea stars; habitat & diet generalist (or just poorly documented); <b>good indicator of reef health</b>; <b>over-collected</b> in the past for aquariums and display (skeletons preserve well as decorations). Big and beautiful on intertidal walks, e.g., Cyrene Reef</li>
      <li><b>Little brittle star</b> <i>Ophiactis savignyi</i> · NE (likely LC): detritivore with <b>six arms instead of five</b>; often lives <b>inside sponges</b> (especially chocolate sponge); pantropical; <b>fissiparous</b> — reproduces by splitting</li>
      <li><b>Red feather star</b> <i>Himerometra robustipinna</i> · <span class="st st-LC">LC</span>: filter feeder of coral reefs & rubble; <b>aposematic</b> (chemically defended); can <b>detach and “swim”</b>; <b>grows more arms with age</b>; mostly subtidal. Crinoid shrimps live on it</li></ul>`,
      hook: `<b>Little brittle star = 6 arms, splits in two</b> ✂️ (fissiparous), lives in a sponge flat.<br><b>Red feather star = swims and grows extra arms</b> as it ages.` },
    { id: "v-cukes", title: "Sea cucumbers & sea urchins",
      img: "img/sp/pinkwarty.jpg", cap: "Pink warty sea cucumber",
      body: `<p><b>Sea cucumbers</b> (Holothuroidea; ~80 spp in Singapore): “<b>vacuum cleaners of the ocean floor</b>” — deposit/filter feeders using tentacles around the mouth. Their <b>bioturbation, alkalinisation and nutrient cycling</b> matter; they directly <b>help seagrass grow</b>. Can <b>eviscerate</b> (eject guts) for defence. Valued in Chinese cuisine & medicine; <i>Holothuria scabra</i> and <i>Actinopyga lecanora</i> are collected locally.</p>
      <ul><li><b>Pink warty sea cucumber</b> <i>Cercodemas anceps</i> · <span class="st st-VU">VU</span>: <b>brightly coloured (aposematic)</b>; relatively common on <b>northern shores</b> (Changi, Pasir Ris), often in <b>seagrass meadows</b>. Not the thorny sea cucumber (thorny, no yellow splotches)</li></ul>
      <p><b>Sea urchins & sand dollars</b> (~20 spp): mostly <b>herbivorous algae grazers</b>, protected by spines (venomous in some families). Sand dollars are common on sandy shores (cake sand dollar at East Coast Park); urchins mostly subtidal.</p>
      <ul><li><b>Sea urchin</b> <i>Diadema setosum</i> · NE: long black spines; <b>has blue spots (iridophores)</b></li></ul>`,
      hook: `<b>Pink warty</b> = pink with warts, warning colours, sits in seagrass 🌸.<br><b>Diadema</b> = a black crown of spines with <b>blue jewel spots</b> 💎 (iridophores).` },
    { id: "v-flatworms", title: "Marine flatworms (Polycladida)",
      img: "img/sp/purpleflatworm.jpg", cap: "Purple spotted flatworm",
      body: `<ul><li>~<b>120 species</b> in Singapore; unsegmented, bilaterally symmetrical; usually <b>active at night</b>; mostly <b>predatory</b>; many toxic with <b>aposematic</b> colours</li>
      <li><b>Eyespots</b> are clusters of photoreceptors, not image-forming eyes</li>
      <li><b>Branching gut</b> visible under thin skin (the name: poly-clad = many branches)</li>
      <li><b>External digestion, no respiratory system</b> — being very flat lets oxygen diffuse in; also lets them slip into cracks</li>
      <li>Huge <b>regeneration</b> (even fission); <b>hermaphrodites</b> that “penis fence”</li></ul>
      <p><b>Flatworm vs nudibranch</b>: both use warning colours, but <b>only flatworms undulate their whole body edge</b>; most nudibranchs crawl without doing so.</p>
      <ul><li><b>Purple spotted flatworm</b> <i>Pseudoceros laingensis</i> · <span class="st st-VU">VU</span>: often on intertidal night walks (northern shores); 4–6 cm</li>
      <li><b>Bayer's flatworm</b> <i>Nymphozoon bayeri</i> · <span class="st st-DD">DD</span>: not that common; seagrass and coral rubble; large (up to 8 cm); <b>very frilly edges</b></li></ul>`,
      hook: `<b>Poly-clad = many branches</b> (its gut) 🌳. Wavy edges = flatworm; crawling slug = nudibranch.` },
    { id: "v-annelids", title: "Marine segmented worms (Annelida)",
      img: "img/sp/fireworm.jpg", cap: "Golden fireworm",
      body: `<p>~<b>120 species</b> around Singapore. Many have tiny bristles (<b>setae/chaetae</b>) → “polychaete” worms; many build and live in <b>tubes</b>.</p>
      <ul><li><b>Sarong worms</b> <i>Diopatra</i> spp. · NE: build <b>sand tubes that wrap around them like a sarong</b>; on <b>sandy beaches</b>, often <b>collected as fishing bait</b>; iridescent; scavengers & detritivores; <b>ecosystem engineers</b> stabilising sediment; related to bobbit worms</li>
      <li><b>Indian featherduster worm</b> <i>Sabellastarte spectabilis</i> · NE: <b>filter feeder with beautiful fans</b> (modified head appendages); mud/sand tube attached to hard substrate on coral reefs & rubble; <b>retracts very fast</b> if startled</li>
      <li><b>Golden fireworm</b> <i>Chloeia flava</i> · NE: aposematic, with <b>calcareous, venomous bristles</b> — burning if touched; 37 segments each with eyespots; preys on coral polyps, sponges, anemones; can swim</li></ul>`,
      hook: `<b>Sarong worm</b> wears a sand sarong 🩱 and ends up as bait. <b>Fireworm</b> = touch it and it burns 🔥.` },
    { id: "v-crust", title: "Marine crustaceans",
      img: "img/sp/orangehermit.jpg", cap: "Orange striped hermit crab",
      body: `<p>Crustaceans are hugely diverse; most classes aren't tested. <b>Freshwater crustaceans (lecture 9) are ALL decapods.</b></p>
      <ul><li><b>Snapping/pistol shrimps</b> (Alpheidae, infraorder Caridea): the clicks you hear on Singapore beaches; hard to spot</li>
      <li><b>Mantis shrimps</b>: their own order (<b>Stomatopoda</b>), 17 spp in SG; high-speed spearing/clubbing — unrelated to snapping shrimps, but a similar mechanism</li>
      <li><b>Anomura</b> = hermit crabs, porcelain crabs, squat lobsters (“fake crabs”); <b>Brachyura</b> = true crabs. Decapod pincers are <b>legs</b>, but scorpion pincers are head appendages (pedipalps)</li></ul>
      <p>Hermit crabs: 40+ spp; scavengers in snail shells; mostly asymmetrical. <b>Orange striped hermit crab</b> <i>Clibanarius infraspinatus</i>: <b>symmetrical pincers</b>, orange leg stripes, large (5 cm), on <b>sandy beaches</b> & seagrass.</p>`,
      hook: `<b>Fake crabs = Anomura</b> (anomalous) 🐚; <b>true crabs = Brachyura</b>. Orange hermit = <b>orange stripes, equal claws</b>.` },
    { id: "v-crabs", title: "Crabs & barnacles you must know",
      img: "img/sp/flowercrab.jpg", cap: "Flower crab",
      body: `<ul><li><b>Mud crabs</b> <i>Scylla</i> spp.: LARGE, heavily built crabs of <b>mangroves</b> that crush hard-shelled molluscs; not evaluated but most species likely VU–CR; <b>threatened by over-exploitation</b>. <i>S. serrata</i> on beaches is likely from mercy releases (放生)</li>
      <li><b>Flower crab</b> <i>Portunus pelagicus</i>: <b>very fast swimming crab</b>; fully aquatic (can't survive long out of water); generalist predator; seagrass, sandy & rocky beaches; moults wash up on beaches; inferior meat to mud crabs</li>
      <li><b>Coral guard crab</b> <i>Trapezia cymodoce</i>: lives in corals on reefs (not seen on intertidal walks); <b>protects its coral symbiont</b> (mutualism)</li>
      <li><b>Striped barnacle</b> <i>Amphibalanus amphitrite</i>: <b>common hull-fouling species worldwide</b></li></ul>`,
      hook: `<b>Mud crab = mangrove, over-eaten.</b> 🦀 <b>Flower crab = Formula 1 swimmer.</b> 🏎️ <b>Guard crab = coral's bodyguard.</b> 🛡️ <b>Barnacle = ship hitchhiker.</b> 🚢` },
    { id: "v-horseshoe", title: "Horseshoe crabs (marine chelicerates)",
      img: "img/sp/horseshoecrab.jpg", cap: "Mangrove horseshoe crab",
      body: `<p>Horseshoe crabs (class <b>Merostomata</b>) are <b>chelicerates</b> — closer to arachnids than to crabs. Only <b>4 species globally</b>, <b>2 common in Singapore</b>:</p>
      <ul><li><b>Coastal horseshoe crab</b> <i>Tachypleus gigas</i> · <span class="st st-EN">EN</span></li>
      <li><b>Mangrove horseshoe crab</b> <i>Carcinoscorpius rotundicauda</i> · <span class="st st-VU">VU</span></li></ul>
      <p>Bottom feeders, <b>not venomous</b>, often met in intertidal habitats, and <b>vulnerable to entanglement</b> in debris (e.g., abandoned nets).</p>`,
      hook: `<b>Coastal = EN, Mangrove = VU.</b> Horseshoe crabs aren't crabs — they're <b>sea arachnid cousins</b> with chelicerae. 🐴👞` },
    { id: "v-protect", title: "Enjoying & protecting marine inverts",
      img: "img/sp/h-chekjawa.jpg",
      body: `<ul><li><b>Intertidal walks</b>: know your tides; low tides <b>below 0.2 m at night</b> are best</li>
      <li><b>Diving</b>: Sisters' Islands Marine Park and other southern islands, with local dive operators</li>
      <li><b>“Loving the beach to death?”</b> — trampling seriously harms intertidal invertebrates, especially small and burrowing ones; collecting marine life <b>even dead shells</b> has a negative impact</li>
      <li>Marine invertebrate populations are <b>resilient and strong dispersers</b> (unlike many land animals), so <b>habitat restoration works wonders</b>. Join a coastal clean-up!</li></ul>`,
      hook: `<b>Take nothing, not even a dead shell</b> 🐚 — hermit crabs need those shells.` },
  ],
  species: [
    { id: "purpleflatworm", common: "Purple spotted flatworm", sci: "Pseudoceros laingensis", family: "Polycladida", group: "Flatworm", status: "VU", where: "Intertidal night walks, especially northern shores", fact: "Polyclad with aposematic colours (white with purple spots)", hook: "Purple polka dots on a paper napkin." },
    { id: "bayerflatworm", common: "Bayer's flatworm", sci: "Nymphozoon bayeri", family: "Polycladida", group: "Flatworm", status: "DD", where: "Seagrass meadows and coral reefs/rubble", fact: "Large aposematic polyclad (up to 8 cm) with very frilly edges", hook: "Frilly dark dress." },
    { id: "sarongworm", common: "Sarong worms", sci: "Diopatra spp.", family: "Onuphidae (Annelida)", group: "Segmented worm", status: "NE", where: "Sandy beaches", fact: "Builds sand tubes wrapped around it like a sarong; often collected as fishing bait", hook: "Wears a sand sarong, ends up as bait." },
    { id: "featherduster", common: "Indian featherduster worm", sci: "Sabellastarte spectabilis", family: "Sabellidae (Annelida)", group: "Segmented worm", status: "NE", where: "Coral reefs and coral rubble", fact: "Tube-dwelling filter feeder with beautiful fans; retracts very fast", hook: "A feather duster that vanishes." },
    { id: "fireworm", common: "Golden fireworm", sci: "Chloeia flava", family: "Amphinomidae (Annelida)", group: "Segmented worm", status: "NE", where: "Shores (occasionally) and dives", fact: "Aposematic worm with venomous calcareous bristles that burn if touched", hook: "Touch it and it burns." },
    { id: "knobblystar", common: "Knobbly sea star", sci: "Protoreaster nodosus", family: "Oreasteridae (Echinodermata)", group: "Echinoderm", status: "EN", where: "Seagrass and reefs on intertidal walks (e.g., Cyrene Reef)", fact: "Big beautiful sea star seen on intertidal walks; over-collected for display; reef-health indicator", hook: "Star wearing studs." },
    { id: "littlebrittlestar", common: "Little brittle star", sci: "Ophiactis savignyi", family: "Ophiactidae (Echinodermata)", group: "Echinoderm", status: "NE", where: "Inside sponges", fact: "Six-armed detritivore that often lives inside sponges and reproduces by splitting", hook: "Six arms, splits in two." },
    { id: "redfeatherstar", common: "Red feather star", sci: "Himerometra robustipinna", family: "Himerometridae (Echinodermata)", group: "Echinoderm", status: "LC", where: "Coral reefs and coral rubble (mostly subtidal)", fact: "Filter feeder that can ‘swim’ and grows more arms with age", hook: "Swims and grows extra arms." },
    { id: "pinkwarty", common: "Pink warty sea cucumber", sci: "Cercodemas anceps", family: "Cucumariidae (Echinodermata)", group: "Echinoderm", status: "VU", where: "Seagrass meadows on northern shores (Changi, Pasir Ris)", fact: "Brightly coloured (aposematic) sea cucumber", hook: "Pink with warts." },
    { id: "diadema", common: "Sea urchin", sci: "Diadema setosum", family: "Diadematidae (Echinodermata)", group: "Echinoderm", status: "NE", where: "Reefs and rubble (mostly subtidal)", fact: "Long-spined urchin with blue spots (iridophores)", hook: "Black crown, blue jewels." },
    { id: "barnacle", common: "Striped barnacle", sci: "Amphibalanus amphitrite", family: "Balanidae (Crustacea)", group: "Crustacean", where: "Hard surfaces, ship hulls, sea walls", fact: "Common hull-fouling species worldwide", hook: "Ship hitchhiker." },
    { id: "orangehermit", common: "Orange striped hermit crab", sci: "Clibanarius infraspinatus", family: "Diogenidae (Anomura)", group: "Crustacean", where: "Sandy beaches and seagrass meadows", fact: "Large hermit crab with symmetrical pincers and orange leg stripes", hook: "Orange stripes, equal claws." },
    { id: "mudcrab", common: "Mud crabs", sci: "Scylla spp.", family: "Portunidae (Brachyura)", group: "Crustacean", where: "Mangroves", fact: "Large crabs whose populations are threatened by over-exploitation", hook: "Mangrove crab, over-eaten." },
    { id: "flowercrab", common: "Flower crab", sci: "Portunus pelagicus", family: "Portunidae (Brachyura)", group: "Crustacean", where: "Seagrass meadows, sandy and rocky beaches", fact: "Very fast swimming crab that cannot survive long out of water", hook: "Formula 1 swimmer." },
    { id: "guardcrab", common: "Coral guard crab", sci: "Trapezia cymodoce", family: "Trapeziidae (Brachyura)", group: "Crustacean", where: "Coral reefs (inside corals)", fact: "Protects its coral symbiont", hook: "Coral's bodyguard." },
    { id: "coastalhorseshoe", common: "Coastal horseshoe crab", sci: "Tachypleus gigas", family: "Limulidae (Merostomata)", group: "Horseshoe crab", status: "EN", where: "Sandy and muddy coasts", fact: "Non-venomous chelicerate bottom feeder, vulnerable to entanglement in debris", hook: "Coastal = EN." },
  ],
  questions: [
    { id: "v1", lesson: "v-overview", q: "Marine flatworms (Polycladida) belong to which phylum?", options: ["Annelida", "Platyhelminthes", "Mollusca", "Echinodermata"], answer: [1], explain: "" },
    { id: "v2", lesson: "v-overview", q: "Why were terrestrial annelids and flatworms not covered?", options: ["They're all invasive", "They have low diversity on land; marine ones are highly diverse", "They're not animals", "They're extinct in Singapore"], answer: [1], explain: "" },
    { id: "v3", lesson: "v-echino", q: "Echinoderms move using…", options: ["Parapodia", "A water vascular system and tube feet", "Jointed legs", "A muscular foot"], answer: [1], explain: "A hydraulic network of canals connected to tube feet." },
    { id: "v4", lesson: "v-echino", q: "Which features describe echinoderms? <i>(select all that apply)</i>", options: ["Pentaradial symmetry", "Calcareous plates (ossicles) under the skin", "Water vascular system", "Segmented body"], answer: [0, 1, 2], explain: "" },
    { id: "v5", lesson: "v-echino", type: "tf", q: "True or false: sand dollars are a type of sea urchin.", options: ["True", "False"], answer: [0], keepOrder: true, explain: "Order Clypeasteroida, class Echinoidea." },
    { id: "v6", lesson: "v-stars", q: "Why was the knobbly sea star over-collected in the past?", options: ["Food", "For aquariums and display/decorations", "Medicine", "Fishing bait"], answer: [1], explain: "Their calcium-based skeletons preserve well. It's now EN." },
    { id: "v7", lesson: "v-stars", q: "The little brittle star <i>Ophiactis savignyi</i> is unusual because it… <i>(select all that apply)</i>", options: ["Has six arms instead of five", "Can reproduce by splitting (fissiparous)", "Often lives inside sponges", "Has venomous bristles"], answer: [0, 1, 2], explain: "Venomous bristles = golden fireworm." },
    { id: "v8", lesson: "v-stars", q: "Which echinoderm can ‘swim’ and grows more arms with age?", options: ["Knobbly sea star", "Red feather star", "Pink warty sea cucumber", "Little brittle star"], answer: [1], explain: "<i>Himerometra robustipinna</i>, LC." },
    { id: "v9", lesson: "v-stars", q: "The knobbly sea star is a good indicator of…", options: ["Water temperature", "Reef health", "Mangrove loss", "Rainfall"], answer: [1], explain: "" },
    { id: "v10", lesson: "v-cukes", q: "Sea cucumbers are important because they… <i>(select all that apply)</i>", options: ["Clean the seafloor as deposit feeders", "Cause bioturbation and nutrient cycling", "Facilitate seagrass growth", "Build coral reefs"], answer: [0, 1, 2], explain: "" },
    { id: "v11", lesson: "v-cukes", q: "Sea cucumbers can defend themselves by…", options: ["Stinging", "Eviscerating (ejecting their guts)", "Spraying ink", "Swimming away fast"], answer: [1], explain: "" },
    { id: "v12", lesson: "v-cukes", q: "Where is the pink warty sea cucumber commonly found?", options: ["Hill streams", "Seagrass meadows on northern shores", "Inside sponges", "Mangrove trees"], answer: [1], explain: "Changi and Pasir Ris. It's VU and aposematic." },
    { id: "v13", lesson: "v-cukes", q: "<i>Diadema setosum</i> has blue spots made by…", options: ["Chromatophores", "Iridophores", "Zooxanthellae", "Bioluminescent bacteria"], answer: [1], explain: "" },
    { id: "v14", lesson: "v-cukes", q: "Sea urchins are mostly…", options: ["Predators of fish", "Herbivorous algae grazers", "Filter feeders", "Parasites"], answer: [1], explain: "" },
    { id: "v15", lesson: "v-flatworms", q: "How can you tell a polyclad flatworm from a nudibranch?", options: ["Only flatworms have warning colours", "Only flatworms undulate their entire body edge", "Only nudibranchs are flat", "Flatworms have shells"], answer: [1], explain: "Both groups use aposematic colours." },
    { id: "v16", lesson: "v-flatworms", q: "Which statements about marine flatworms are true? <i>(select all that apply)</i>", options: ["They have no respiratory system", "Their eyespots are not image-forming eyes", "They are mostly predatory and active at night", "They are segmented"], answer: [0, 1, 2], explain: "They're unsegmented." },
    { id: "v17", lesson: "v-flatworms", q: "Bayer's flatworm (<i>Nymphozoon bayeri</i>) is recognised by its…", options: ["Purple spots", "Very frilly edges and large size", "Six arms", "Bright red fans"], answer: [1], explain: "DD status; seagrass and coral rubble." },
    { id: "v18", lesson: "v-annelids", q: "Which marine worm is often collected on sandy beaches as fishing bait?", options: ["Indian featherduster worm", "Sarong worm (<i>Diopatra</i>)", "Golden fireworm", "Purple spotted flatworm"], answer: [1], explain: "Named for its sand tube wrapped like a sarong." },
    { id: "v19", lesson: "v-annelids", q: "Why should you not touch a golden fireworm?", options: ["It bites", "Its venomous calcareous bristles cause burning", "It's electric", "It sprays acid"], answer: [1], explain: "" },
    { id: "v20", lesson: "v-annelids", q: "The Indian featherduster worm feeds by…", options: ["Filter feeding with its fans", "Hunting coral polyps", "Grazing algae", "Scavenging carcasses"], answer: [0], explain: "The fans are modified head appendages." },
    { id: "v21", lesson: "v-annelids", q: "Sarong worms are considered ecosystem engineers because they…", options: ["Build reefs", "Stabilise substrate and alter flow dynamics", "Pollinate seagrass", "Eat invasive species"], answer: [1], explain: "" },
    { id: "v22", lesson: "v-crust", q: "Mantis shrimps belong to which order?", options: ["Decapoda", "Stomatopoda", "Isopoda", "Caridea"], answer: [1], explain: "An order of their own, unrelated to snapping shrimps." },
    { id: "v23", lesson: "v-crust", q: "Which crustaceans make the snapping sounds you hear on Singapore beaches?", options: ["Mantis shrimps", "Snapping/pistol shrimps (Alpheidae)", "Barnacles", "Hermit crabs"], answer: [1], explain: "" },
    { id: "v24", lesson: "v-crust", q: "Hermit crabs belong to…", options: ["Brachyura (true crabs)", "Anomura (“fake crabs”)", "Stomatopoda", "Merostomata"], answer: [1], explain: "With porcelain crabs and squat lobsters." },
    { id: "v25", lesson: "v-crust", q: "How is the orange striped hermit crab different from most hermit crabs?", options: ["It has symmetrical pincers", "It lives in mangrove trees", "It has no shell", "It swims"], answer: [0], explain: "Plus orange leg stripes; on sandy beaches." },
    { id: "v26", lesson: "v-crust", q: "The freshwater crustaceans taught in lecture 9 are all…", options: ["Isopods", "Decapods", "Amphipods", "Barnacles"], answer: [1], explain: "Crabs, prawn and crayfish." },
    { id: "v27", lesson: "v-crabs", q: "Which crustacean's populations are threatened by over-exploitation?", options: ["Striped barnacle", "Mud crabs (<i>Scylla</i>)", "Coral guard crab", "Orange striped hermit crab"], answer: [1], explain: "Large mangrove crabs." },
    { id: "v28", lesson: "v-crabs", q: "Which crab is a very fast swimmer that can't survive long out of water?", options: ["Mud crab", "Flower crab", "Coral guard crab", "Orange striped hermit crab"], answer: [1], explain: "<i>Portunus pelagicus</i>." },
    { id: "v29", lesson: "v-crabs", q: "The coral guard crab <i>Trapezia cymodoce</i> is known for…", options: ["Hull fouling", "Protecting its coral symbiont", "Being used as bait", "Living in snail shells"], answer: [1], explain: "Mutualism." },
    { id: "v30", lesson: "v-crabs", q: "<i>Amphibalanus amphitrite</i> is a…", options: ["Hull-fouling barnacle", "Hermit crab", "Mantis shrimp", "Sea cucumber"], answer: [0], explain: "Common hull-fouling species worldwide." },
    { id: "v31", lesson: "v-horseshoe", q: "Horseshoe crabs are…", options: ["True crabs", "Chelicerates (class Merostomata)", "Molluscs", "Insects"], answer: [1], explain: "Only 4 species globally, 2 common in Singapore." },
    { id: "v32", lesson: "v-horseshoe", q: "What are the Singapore statuses of the two horseshoe crabs?", options: ["Coastal EN, mangrove VU", "Both LC", "Coastal VU, mangrove EN", "Both CR"], answer: [0], explain: "<i>Tachypleus gigas</i> EN; <i>Carcinoscorpius rotundicauda</i> VU." },
    { id: "v33", lesson: "v-horseshoe", q: "Which statements about horseshoe crabs are true? <i>(select all that apply)</i>", options: ["Not venomous", "Bottom feeders", "Vulnerable to entanglement in debris", "Have venomous tails"], answer: [0, 1, 2], explain: "" },
    { id: "v34", lesson: "v-protect", q: "Why does habitat restoration work well for marine invertebrates?", options: ["They're all endemic", "Their populations are resilient and strong dispersers", "They don't need habitat", "They breed only in captivity"], answer: [1], explain: "Unlike many terrestrial animal populations." },
    { id: "v35", lesson: "v-protect", q: "Which actions harm intertidal invertebrates? <i>(select all that apply)</i>", options: ["Trampling", "Collecting dead shells", "Collecting live animals", "Joining a coastal clean-up"], answer: [0, 1, 2], explain: "" },
  ],
  cheatsheet: `<ul>
    <li>4 groups: polyclads (Platyhelminthes), echinoderms, annelids, crustaceans.</li>
    <li><b>Echinoderms</b>: water vascular system + tube feet, ossicles, pentaradial. Sand dollars = urchins.</li>
    <li>Knobbly sea star EN (over-collected, reef-health indicator) · Little brittle star NE (6 arms, splits, in sponges) · Red feather star LC (swims, more arms with age) · Pink warty sea cucumber VU (aposematic, seagrass, north shores) · <i>Diadema</i> NE (blue spots = iridophores).</li>
    <li>Sea cucumbers (~80 spp): ocean vacuum cleaners, help seagrass, eviscerate.</li>
    <li><b>Polyclads</b> (~120 spp): night predators, aposematic, no respiratory system, undulating edges (≠ nudibranch). Purple spotted VU · Bayer's DD (frilly).</li>
    <li><b>Annelids</b> (~120 spp): sarong worms (bait, sand beaches) · Indian featherduster (filter fans) · golden fireworm (venomous bristles).</li>
    <li><b>Crustaceans</b>: snapping shrimps (Alpheidae), mantis shrimps (Stomatopoda), Anomura (hermits) vs Brachyura. Barnacle (hull-fouling) · orange striped hermit (symmetrical pincers) · mud crabs (over-exploited) · flower crab (fast swimmer) · coral guard crab (protects coral).</li>
    <li><b>Horseshoe crabs</b>: chelicerates; coastal EN, mangrove VU; not venomous; entanglement.</li></ul>`,
});
