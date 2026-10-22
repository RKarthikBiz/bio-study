window.MODULES = window.MODULES || [];
MODULES.push({
  id: "insects", emoji: "🦋", title: "Insects", short: "Insects",
  blurb: "Body plan, life cycles, the 10 big orders, 15 must-know species, plus mimicry and sexual selection.",
  source: "Lectures 6 — Insects of Singapore (Choo Ruirong, Lumin Ong, Sean Yap)",
  lessons: [
    { id: "i-body", title: "What is an insect?",
      body: `<ul><li><b>Six legs</b> and <b>three body segments</b>: head, thorax, abdomen</li>
      <li>Usually <b>four wings</b>, a pair of <b>antennae</b>, <b>compound eyes</b></li>
      <li>Invertebrates with an <b>exoskeleton</b>; Phylum Arthropoda, Class Insecta</li></ul>
      <p>Under Pancrustacea, insects are closely related to <b>crustaceans</b>.</p>
      <p>Six-legged but NOT insects: <b>Entognatha</b> (springtails/Collembola, Protura, Diplura). Many-legged non-insects: myriapods, arachnids, isopods; and non-arthropods like snails, velvet worms, worms.</p>`,
      hook: `<b>6-3-2-4</b>: 6 legs, 3 parts, 2 antennae, (usually) 4 wings. 🐞` },
    { id: "i-meta", title: "Complete vs incomplete metamorphosis",
      body: `<div class="tablewrap"><table class="t"><tr><th></th><th>Holometabolous</th><th>Hemimetabolous</th></tr>
      <tr><td>Metamorphosis</td><td><b>Complete</b></td><td><b>Incomplete</b></td></tr>
      <tr><td>Stages</td><td>Egg → <b>larva → pupa</b> → adult</td><td>Egg → <b>nymph</b> → adult</td></tr>
      <tr><td>Examples</td><td>Beetles, butterflies & moths, flies, bees/wasps/ants</td><td>Cockroaches, dragonflies, mantises, bugs, grasshoppers, stick insects</td></tr></table></div>`,
      hook: `<b>HOLO = whOLE makeover</b> (has a Pupa “cocoon” stage) 🦋. <b>HEMI = half</b> — babies (nymphs) look like mini adults. 🦗<br>Holo gang: <b>“Big Lazy Flies Hum”</b> = <b>B</b>eetles, <b>L</b>epidoptera, <b>F</b>lies, <b>H</b>ymenoptera.` },
    { id: "i-diversity", title: "Why so many insects?",
      body: `<p><b>30 extant orders</b> worldwide (two primarily wingless); <b>24 in Singapore</b>. ~6 million insect species globally; a modest estimate of <b>100,000–150,000 in Singapore</b>, most undescribed.</p>
      <p>Why so diverse in the tropics?</p>
      <ul><li>Stable climate, sun & rain year-round → high <b>primary production</b></li>
      <li>Plants diversify and create new <b>niches & habitat layers</b></li>
      <li>Insects have <b>short generation times, high reproduction</b> and modifiable body plans → evolve rapidly; small size means small mutations make big differences</li></ul>
      <p>Roles: <b>pollination, decomposition, population balancing</b>.</p>`,
      hook: `Short lives, lots of kids, tiny bodies = <b>evolution on fast-forward</b> ⏩.` },
    { id: "i-threats", title: "Threats & why insects are ignored",
      body: `<p>Habitat loss since 1965: <b>>87% of mangroves lost</b> (13% → 0.5% of land); only <b>4.3%</b> of land is good-quality forest, <b><1% primary forest</b>. Local extinction rate ~<b>37%</b>; almost half of Singapore's butterflies extirpated in 160 years.</p>
      <p>Only ~1% of described insects (10,441 of ~1 million) are evaluated on the IUCN Red List. Why ignored (“No bones? No go”)?</p>
      <ol><li><b>Lack of charisma</b> — small, “creepy”, feared</li><li><b>Lack of knowledge</b> — benefits unknown, little taxonomic work</li><li><b>Lack of awareness efforts</b></li></ol>
      <p>Other threats: poaching & pet trade, <b>fogging/pesticides</b>, invasive species. Media over-reports negative interactions. The main threat: being <b>understudied and underappreciated</b>.</p>
      <p>Good news: SFA approved <b>16 insect species for food</b> (8 July 2024).</p>`,
      hook: `“<b>We can't protect what we don't know.</b>” The 3 L's: <b>L</b>ooks, <b>L</b>ittle knowledge, <b>L</b>ow awareness.` },
    { id: "i-lep", title: "Lepidoptera & Coleoptera",
      img: "img/sp/plaintiger.jpg", cap: "Plain Tiger",
      body: `<p><b>Lepidoptera</b> (moths & butterflies): large membranous wings covered in <b>coloured scales</b>, long <b>proboscis</b>. 126 families, only 6 are butterflies; ~300 butterflies in SG. Butterflies: <b>clubbed antennae</b>; moths: <b>feathery</b>. Roles: pollinators, bioindicators, conservation icons.</p>
      <ul><li><b>Plain Tiger</b> <i>Danaus chrysippus chrysippus</i> — related to the monarch; feeds on <b>toxic milkweed</b> host plants</li>
      <li><b>Hübner's Wasp Moth</b> <i>Amata huebneri</i> — <b>mimics wasps</b> to deter predators</li></ul>
      <p><b>Coleoptera</b> (beetles): most species-rich animal group (~400,000 spp, 25% of animals). Tough exoskeleton and <b>hardened forewings (elytra)</b>. Roles: decomposers (especially larvae), pest control (lady beetles), pollination.</p>
      <ul><li><b>Beach Tiger Beetle</b> <i>Calomera angulata</i> — <b>very fast runner</b></li></ul>`,
      hook: `<b>Lepido-ptera = scale-wing</b>. <b>Coleo-ptera = sheath-wing</b> (elytra are armour). The <b>tigers</b> (Plain Tiger butterfly, Tiger Beetle) — one's toxic, one's a sprinter. 🐯` },
    { id: "i-odo", title: "Odonata: dragonflies & damselflies",
      img: "img/sp/emperor.jpg", cap: "Emperor dragonfly",
      body: `<p>Predatory insects with an <b>aquatic nymph</b>. ~130 species in Singapore. Bioindicators of habitat & water quality.</p>
      <ul><li><b>Damselflies</b>: wings stalked and usually <b>held up/closed at rest</b>; eyes well separated; slender</li>
      <li><b>Dragonflies</b>: wings <b>spread at rest</b>; stockier</li></ul>
      <p>Must-knows: <b>Emperor</b> <i>Anax guttatus</i> — <b>apex predator among insects</b>. <b>Crenulated (scalloped) Spreadwing</b> <i>Lestes decipiens</i> — a damselfly that <b>holds its wings spread at rest</b>, unique among damselflies.</p>
      <p>Records: Scarlet Pygmy (<i>Nannophya pygmaea</i>, ~2 cm wingspan) and Giant Hawker (<i>Tetracanthagyna plagiata</i>, ~18 cm) both live here.</p>`,
      hook: `<b>Damsels close their wings politely</b> 🙏; <b>dragons spread them</b> like a plane ✈️. The rebel damsel = <b>Spreadwing</b>.` },
    { id: "i-dip", title: "Diptera & Hymenoptera",
      img: "img/sp/giantant.jpg", cap: "Giant Forest Ant",
      body: `<p><b>Diptera</b> (true flies): only <b>one pair of wings</b>; hindwings are <b>halteres</b> (balancers). Major pollinators (2nd to bees), decomposers as larvae. Some mimic hornets. <b>Robberfly</b> <i>Ophionomima solocifemur</i> — predator of mature forests.</p>
      <p><b>Hymenoptera</b> (“membrane wings”; bees, wasps, ants, sawflies): fore & hind wings hooked together; females' ovipositor often a <b>stinger</b>; famous <b>eusociality</b>. Bees fuzzy (pollen), wasps slim with thin waist; ants (Formicidae) evolved from wasps — <b>409 ant species in Singapore</b>.</p>
      <ul><li><b>Giant Honey Bee</b> <i>Apis dorsata</i> — <b>the only honey bee active at night</b></li>
      <li><b>Cricket-hunting Wasp</b> <i>Sphex diabolicus</i> — <b>hunts orthopterans</b></li>
      <li><b>Giant Forest Ant</b> <i>Dinomyrmex gigas</i> — one of the <b>largest ants</b></li></ul>`,
      hook: `<b>Di-ptera = two wings</b> ✌️ (halteres replace the back pair). <b>Hymen-optera = membrane wings</b> hooked together.` },
    { id: "i-hemi", title: "Hemiptera, Orthoptera, Mantodea",
      img: "img/sp/cicada.jpg", cap: "Black and Scarlet Cicada",
      body: `<p><b>Hemiptera</b> (true bugs & allies): <b>piercing-sucking</b> mouthparts (proboscis); ~80,000 spp; hoppers, aphids, cicadas, true bugs. <b>Black and Scarlet Cicada</b> <i>Huechys sanguinea</i> — <b>uniquely coloured among cicadas</b>.</p>
      <p><b>Orthoptera</b> (grasshoppers, crickets, katydids): <b>enlarged jumping hindlegs</b>, <b>stridulate</b> (rub body parts) to make sound. <b>Admiralty Park Cricket</b> <i>Cardiodactylus admirabilis</i> — <b>endemic to Singapore</b>, known only from Admiralty Park.</p>
      <p><b>Mantodea</b> (mantises): predators with <b>raptorial forelegs</b> (“praying”). <b>Golden-armed Mantis</b> <i>Hierodula venosa</i> — common in parks/gardens, ID'd by its golden arm.</p>`,
      hook: `<b>Admiralty cricket lives ONLY in Admiralty Park</b> — the address is in its name! 🏞️ (Endemic.)` },
    { id: "i-blatt", title: "Blattodea & Phasmatodea",
      img: "img/sp/leafinsect.jpg", cap: "Leaf insect",
      body: `<p><b>Blattodea</b> (cockroaches & <b>termites</b>, which descended from cockroaches): flattened body, spiky legs, long antennae & cerci. Only <b>4 urban “pest” roaches</b>, all non-native; many native forest species. Decomposers.</p>
      <ul><li><b>Dead Leaf Cockroach</b> (<i>Pseudophoraspis nebulosa</i>; the summary table lists the forest roach <i>Nocticola pheromosa</i>, named after a Pokémon) — <b>not a pest! Found only in forests</b></li>
      <li><b>Fungus-growing Termite</b> <i>Macrotermes carbonarius</i> — <b>grows fungus gardens</b>; termites are eusocial ecosystem engineers</li></ul>
      <p><b>Phasmatodea</b> (stick & leaf insects): <b>camouflage experts</b>; herbivores; bioindicators. <b>Chris Ang's Leaf Insect</b> <i>Cryptophyllium chrisangi</i> — <b>found in mangroves</b>.</p>`,
      hook: `<b>Not every roach is a pest</b> — forest roaches recycle leaves 🍂. The leaf insect hides in a <b>mangrove</b> — “a leaf among leaves by the sea”.` },
    { id: "i-minor", title: "The lesser-known orders",
      img: "img/sp/mantisfly.jpg", cap: "Mantisfly (Neuroptera)",
      body: `<ul><li><b>Neuroptera</b> (net-winged: lacewings, antlions, owlflies, <b>mantisflies</b>) — long wings cross-hatched with veins; larvae predatory; biocontrol. Mantisflies have <b>mantis-like raptorial front legs</b> and some mimic wasps!</li>
      <li><b>Megaloptera</b> (alderflies) — rare in SG; wings fold over abdomen; water-quality indicators</li>
      <li><b>E-P-T</b>: <b>Ephemeroptera</b> (mayflies; short-lived adults, nymph gills), <b>Plecoptera</b> (stoneflies; need well-oxygenated water), <b>Trichoptera</b> (caddisflies; hairy wings, larvae build cases) — <b>indicators of water quality</b> (sensitive to pollution)</li>
      <li><b>Dermaptera</b> (earwigs) — pincer cerci, parental care; don't enter ears!</li>
      <li><b>Embioptera</b> (webspinners) — silk from front feet</li><li><b>Zoraptera</b> (angel insects) — 1 local sp.</li>
      <li><b>Psocodea</b> (bark/book lice), <b>Thysanoptera</b> (thrips), <b>Siphonaptera</b> (fleas), <b>Strepsiptera</b> (twisted-wing parasites), <b>Archaeognatha</b> (bristletails), <b>Zygentoma</b> (silverfish)</li></ul>`,
      hook: `<b>Neuro = nerve-net wings.</b> A mantisfly is a <b>lacewing wearing mantis arms</b> 🦾 — order Neuroptera, NOT Mantodea.<br><b>EPT</b> = “<b>E</b>xcellent <b>P</b>ure-water <b>T</b>esters”.`,
      why: "Mock Q10 showed a wasp-mimicking mantisfly → Neuroptera." },
    { id: "i-mimic", title: "Camouflage & mimicry",
      img: "img/sp/stickinsect.jpg", cap: "Stick insect — crypsis",
      body: `<p>(Covered in Insects part 2 — key exam vocabulary.)</p>
      <ul><li><b>Crypsis / camouflage</b>: blending in to <b>hide from predators</b> — e.g., stick & leaf insects, dead leaf cockroach, horned frog</li>
      <li><b>Batesian mimicry</b>: a <b>harmless</b> species copies a <b>harmful</b> one — e.g., Hübner's wasp moth, hornet-mimic flies, wasp-mimic mantisflies</li>
      <li><b>Müllerian mimicry</b>: two <b>harmful</b> species look alike — shared warning</li>
      <li><b>Aposematism</b>: bright warning colours advertising toxicity (e.g., Plain Tiger from milkweed; spiny orb-weavers; nudibranchs)</li>
      <li><b>Aggressive mimicry</b>: a <b>predator</b> mimics something harmless/attractive to lure prey</li></ul>
      <p>Stick & leaf insects are <b>herbivores</b>, so their plant disguise is <b>defensive camouflage</b> — not aggressive mimicry.</p>`,
      hook: `<b>Bates = Bluff</b> (fake danger) 🃏. <b>Müller = Mutual</b> (both truly dangerous). <b>Aggressive = Ambush</b> (predator in disguise).`,
      why: "Mock Q9: leaf/stick insects resemble plants for defensive camouflage." },
    { id: "i-sex", title: "Sexual selection made simple",
      img: "img/sp/emperor.jpg",
      body: `<p>Two questions classify any sexual selection:</p>
      <ol><li><b>Who is competing/choosing?</b><br><b>Intra</b>sexual = <b>same sex</b> competes (male vs male). <b>Inter</b>sexual = <b>one sex chooses the other</b> (female choice).</li>
      <li><b>When?</b><br><b>Pre</b>copulatory = before mating (fights, displays, songs). <b>Post</b>copulatory = during/after mating (sperm competition, cryptic female choice).</li></ol>
      <p>Example: male dragonflies <b>scrape out rival males' sperm</b> from the female → male vs male, after mating = <span class="key">intrasexual, postcopulatory</span>.</p>
      <p>Other examples: fighting spider males (intrasexual, pre); male jumping spider dances to females (intersexual, pre).</p>`,
      hook: `<b>INTRA = INside the same team</b> (boys vs boys) ⚔️. <b>INTER = between teams</b> (girls choose boys) 💘. <b>Post</b> = after the date.`,
      why: "Mock Q11." },
    { id: "i-fifteen", title: "The 15 must-know insects",
      body: `<p><b>Holometabolous</b> (complete):</p><div class="tablewrap"><table class="t"><tr><th>Order</th><th>Species</th><th>Fact</th></tr>
      <tr><td>Lepidoptera</td><td>Plain Tiger <i>Danaus chrysippus</i></td><td>Monarch relative, toxic milkweed host</td></tr>
      <tr><td>Lepidoptera</td><td>Hübner's Wasp Moth <i>Amata huebneri</i></td><td>Mimics wasps</td></tr>
      <tr><td>Coleoptera</td><td>Beach Tiger Beetle <i>Calomera angulata</i></td><td>Very fast runner</td></tr>
      <tr><td>Diptera</td><td>Robberfly <i>Ophionomima solocifemur</i></td><td>Predator, mature forests</td></tr>
      <tr><td>Hymenoptera</td><td>Giant Honey Bee <i>Apis dorsata</i></td><td>Only honey bee active at night</td></tr>
      <tr><td>Hymenoptera</td><td>Cricket-hunting Wasp <i>Sphex diabolicus</i></td><td>Hunts orthopterans</td></tr>
      <tr><td>Hymenoptera</td><td>Giant Forest Ant <i>Dinomyrmex gigas</i></td><td>One of the largest ants</td></tr></table></div>
      <p><b>Hemimetabolous</b> (incomplete):</p><div class="tablewrap"><table class="t">
      <tr><td>Odonata</td><td>Emperor <i>Anax guttatus</i></td><td>Apex predator among insects</td></tr>
      <tr><td>Odonata</td><td>Crenulated Spreadwing <i>Lestes decipiens</i></td><td>Damselfly with wings spread at rest</td></tr>
      <tr><td>Hemiptera</td><td>Black & Scarlet Cicada <i>Huechys sanguinea</i></td><td>Uniquely coloured cicada</td></tr>
      <tr><td>Orthoptera</td><td>Admiralty Park Cricket <i>Cardiodactylus admirabilis</i></td><td>Endemic, only Admiralty Park</td></tr>
      <tr><td>Mantodea</td><td>Golden-armed Mantis <i>Hierodula venosa</i></td><td>Parks/gardens, golden arm</td></tr>
      <tr><td>Blattodea</td><td>Dead Leaf Cockroach</td><td>Not a pest! Forest only</td></tr>
      <tr><td>Blattodea</td><td>Fungus-growing Termite <i>Macrotermes carbonarius</i></td><td>Grows fungus gardens</td></tr>
      <tr><td>Phasmatodea</td><td>Chris Ang's Leaf Insect <i>Cryptophyllium chrisangi</i></td><td>Found in mangroves</td></tr></table></div>`,
      hook: `Holo list = <b>“Tiger, Moth, Tiger, Robber, Bee, Wasp, Ant”</b> — “Two tigers met a robber who keeps bees, wasps and ants.” 🐯🐯🦹🐝` },
  ],
  species: [
    { id: "plaintiger", common: "Plain Tiger", sci: "Danaus chrysippus chrysippus", family: "Lepidoptera: Nymphalidae", group: "Insect (holometabolous)", fact: "Monarch relative whose caterpillars feed on toxic milkweed host plants", hook: "Toxic tiger — warning orange." },
    { id: "waspmoth", common: "Hübner's Wasp Moth", sci: "Amata huebneri", family: "Lepidoptera: Erebidae", group: "Insect (holometabolous)", fact: "Moth that mimics wasps to deter predators (Batesian mimicry)", hook: "A moth in a wasp costume." },
    { id: "tigerbeetle", common: "Beach Tiger Beetle", sci: "Calomera angulata", family: "Coleoptera: Carabidae", group: "Insect (holometabolous)", where: "Sandy beaches and shores", fact: "Very fast-running predatory beetle", hook: "Sprinter of the sand." },
    { id: "robberfly", common: "Robberfly", sci: "Ophionomima solocifemur", family: "Diptera: Asilidae", group: "Insect (holometabolous)", where: "Mature forests", fact: "Predatory fly associated with mature forests", hook: "A fly that robs other insects' lives." },
    { id: "honeybee", common: "Giant Honey Bee", sci: "Apis dorsata", family: "Hymenoptera: Apidae", group: "Insect (holometabolous)", fact: "The only honey bee species active at night", hook: "Night-shift honey bee." },
    { id: "sphex", common: "Cricket-hunting Wasp", sci: "Sphex diabolicus", family: "Hymenoptera: Sphecidae", group: "Insect (holometabolous)", fact: "Wasp that hunts orthopterans (crickets, katydids)", hook: "Devilish (diabolicus) cricket hunter." },
    { id: "giantant", common: "Giant Forest Ant", sci: "Dinomyrmex gigas", family: "Hymenoptera: Formicidae", group: "Insect (holometabolous)", fact: "One of the largest ants in the world", hook: "Gigas = giant." },
    { id: "emperor", common: "Emperor (dragonfly)", sci: "Anax guttatus", family: "Odonata: Aeshnidae", group: "Insect (hemimetabolous)", fact: "Apex predator among insects", hook: "The emperor rules the insect sky." },
    { id: "spreadwing", common: "Crenulated (Scalloped) Spreadwing", sci: "Lestes decipiens", family: "Odonata: Lestidae", group: "Insect (hemimetabolous)", fact: "Damselfly that holds its wings spread out at rest — unique for damselflies", hook: "The rebel damselfly." },
    { id: "cicada", common: "Black and Scarlet Cicada", sci: "Huechys sanguinea", family: "Hemiptera: Cicadidae", group: "Insect (hemimetabolous)", fact: "Uniquely coloured among cicadas (black with scarlet)", hook: "Cicada in a red-and-black suit." },
    { id: "cricket", common: "Admiralty Park Cricket", sci: "Cardiodactylus admirabilis", family: "Orthoptera: Gryllidae", group: "Insect (hemimetabolous)", where: "Admiralty Park only", fact: "Endemic to Singapore, known only from Admiralty Park", hook: "Its address is its name." },
    { id: "mantis", common: "Golden-armed Mantis", sci: "Hierodula venosa", family: "Mantodea: Mantidae", group: "Insect (hemimetabolous)", where: "Parks and gardens", fact: "Common mantis identified by its golden arm", hook: "Gold on the raptorial arm." },
    { id: "deadleafroach", common: "Dead Leaf Cockroach", sci: "Pseudophoraspis nebulosa", family: "Blattodea", group: "Insect (hemimetabolous)", where: "Forests only", fact: "Native forest roach — not a pest!", hook: "Looks like a dead leaf, recycles dead leaves." },
    { id: "termite", common: "Fungus-growing Termite", sci: "Macrotermes carbonarius", family: "Blattodea: Termitidae", group: "Insect (hemimetabolous)", fact: "Termite that grows fungus gardens", hook: "Farmers of the forest floor." },
    { id: "leafinsect", common: "Chris Ang's Leaf Insect", sci: "Cryptophyllium chrisangi", family: "Phasmatodea: Phylliidae", group: "Insect (hemimetabolous)", where: "Mangroves", fact: "Leaf insect found in mangroves", hook: "A leaf among mangrove leaves." },
  ],
  questions: [
    { id: "i1", lesson: "i-body", q: "Insects have how many legs and body segments?", options: ["8 legs, 2 segments", "6 legs, 3 segments", "6 legs, 2 segments", "10 legs, 3 segments"], answer: [1], explain: "Head, thorax, abdomen." },
    { id: "i2", lesson: "i-body", q: "Springtails (Collembola) are…", options: ["Insects", "Non-insect hexapods (Entognatha)", "Arachnids", "Myriapods"], answer: [1], explain: "Six legs but not insects." },
    { id: "i3", lesson: "i-meta", q: "Which insects are holometabolous (complete metamorphosis)? <i>(select all that apply)</i>", options: ["Beetles", "Butterflies", "Dragonflies", "Bees"], answer: [0, 1, 3], explain: "Dragonflies are hemimetabolous (nymphs)." },
    { id: "i4", lesson: "i-meta", q: "Hemimetabolous insects go through which stages?", options: ["Egg → larva → pupa → adult", "Egg → nymph → adult", "Egg → adult", "Larva → adult"], answer: [1], explain: "No pupal stage." },
    { id: "i5", lesson: "i-diversity", q: "How many insect orders are found in Singapore?", options: ["10", "24", "30", "54"], answer: [1], explain: "24 of the 30 extant orders." },
    { id: "i6", lesson: "i-diversity", q: "Why can insects evolve so rapidly? <i>(select all that apply)</i>", options: ["Short generation times", "High reproductive rates", "Highly modifiable body plans", "Long lifespans"], answer: [0, 1, 2], explain: "" },
    { id: "i7", lesson: "i-threats", q: "Why do insects receive less conservation attention? <i>(select all that apply)</i>", options: ["Lack of charisma", "Lack of knowledge and understanding", "Lack of awareness efforts", "They are all well protected already"], answer: [0, 1, 2], explain: "“No bones? No go.”" },
    { id: "i8", lesson: "i-threats", q: "About what percentage of Singapore's mangroves had been lost by 2018?", options: ["20%", "50%", ">87%", "100%"], answer: [2], explain: "From 13% of land area to 0.5%." },
    { id: "i9", lesson: "i-lep", q: "How can you tell butterflies from moths by antennae?", options: ["Butterflies have feathery antennae", "Butterflies have clubbed/hooked tips; moths often feathery", "No difference", "Moths have no antennae"], answer: [1], explain: "" },
    { id: "i10", lesson: "i-lep", q: "Beetles' hardened forewings are called…", options: ["Halteres", "Elytra", "Cerci", "Pedipalps"], answer: [1], explain: "Halteres are fly balancers." },
    { id: "i11", lesson: "i-lep", q: "Why is the Plain Tiger butterfly distasteful to predators?", options: ["It mimics wasps", "Its caterpillars feed on toxic milkweed host plants", "It has a sting", "It's nocturnal"], answer: [1], explain: "Related to the monarch." },
    { id: "i12", lesson: "i-odo", q: "How do most damselflies hold their wings at rest?", options: ["Spread flat", "Closed/held up over the body", "Folded like a fan", "They don't rest"], answer: [1], explain: "Dragonflies spread them; the spreadwing damselfly is the exception." },
    { id: "i13", lesson: "i-odo", q: "<i>Lestes decipiens</i> is notable because it…", options: ["Is the largest dragonfly", "Is a damselfly that holds its wings spread at rest", "Is endemic to Admiralty Park", "Is nocturnal"], answer: [1], explain: "" },
    { id: "i14", lesson: "i-odo", q: "Odonata nymphs live…", options: ["In soil", "In water", "In flowers", "Inside other insects"], answer: [1], explain: "Aquatic nymph stage → bioindicators." },
    { id: "i15", lesson: "i-dip", q: "True flies (Diptera) have…", options: ["Four membranous wings", "One pair of wings with hindwings modified into halteres", "No wings", "Hardened forewings"], answer: [1], explain: "" },
    { id: "i16", lesson: "i-dip", q: "Which is the only honey bee species active at night?", options: ["<i>Apis cerana</i>", "<i>Apis dorsata</i>", "<i>Apis mellifera</i>", "<i>Amegilla</i>"], answer: [1], explain: "Giant Honey Bee." },
    { id: "i17", lesson: "i-dip", q: "How many ant species are recorded in Singapore?", options: ["~40", "~409", "~4,000", "~40,000"], answer: [1], explain: "Singapore has the world's highest recorded ant diversity." },
    { id: "i18", lesson: "i-dip", q: "Ants evolved from…", options: ["Termites", "Wasps", "Beetles", "Flies"], answer: [1], explain: "Petiole nodes separate ants from wasps." },
    { id: "i19", lesson: "i-hemi", q: "Hemiptera are defined by…", options: ["Raptorial forelegs", "Piercing-sucking mouthparts (proboscis)", "Jumping hind legs", "Elytra"], answer: [1], explain: "" },
    { id: "i20", lesson: "i-hemi", q: "Which insect is endemic to Singapore?", options: ["Golden-armed Mantis", "Admiralty Park Cricket", "Plain Tiger", "Emperor"], answer: [1], explain: "Known only from Admiralty Park." },
    { id: "i21", lesson: "i-hemi", q: "Orthopterans produce sound by…", options: ["Stridulation (rubbing body parts)", "Buzzing wings", "Vocal cords", "Clicking mandibles"], answer: [0], explain: "" },
    { id: "i22", lesson: "i-blatt", q: "Termites belong to which order?", options: ["Hymenoptera", "Blattodea", "Isoptera only, unrelated to roaches", "Orthoptera"], answer: [1], explain: "Termites descended from cockroaches." },
    { id: "i23", lesson: "i-blatt", q: "<i>Macrotermes carbonarius</i> is known for…", options: ["Mimicking wasps", "Growing fungus gardens", "Living in mangroves", "Being nocturnal bees"], answer: [1], explain: "" },
    { id: "i24", lesson: "i-blatt", q: "Chris Ang's Leaf Insect is found in…", options: ["Mangroves", "Urban gardens", "Hill streams", "Reservoirs"], answer: [0], explain: "" },
    { id: "i25", lesson: "i-minor", q: "A mantisfly belongs to which order?", options: ["Mantodea", "Neuroptera", "Diptera", "Hymenoptera"], answer: [1], explain: "Net-winged insects with raptorial forelegs." },
    { id: "i26", lesson: "i-minor", q: "EPT taxa (Ephemeroptera, Plecoptera, Trichoptera) are used as…", options: ["Pest control agents", "Indicators of water quality", "Food insects", "Pollinators"], answer: [1], explain: "" },
    { id: "i27", lesson: "i-minor", q: "Which order has larvae that build cases and adults with hairy wings?", options: ["Trichoptera (caddisflies)", "Plecoptera", "Ephemeroptera", "Dermaptera"], answer: [0], explain: "" },
    { id: "i28", lesson: "i-mimic", q: "Most leaf and stick insects resemble plant parts in order to…", options: ["Hide from predators (defensive camouflage)", "Lure prey (aggressive mimicry)", "Look like poisonous plants (Batesian)", "All of the above"], answer: [0], explain: "They're herbivores — no prey to lure." },
    { id: "i29", lesson: "i-mimic", q: "Hübner's Wasp Moth resembling a wasp is an example of…", options: ["Batesian mimicry", "Müllerian mimicry", "Aggressive mimicry", "Crypsis"], answer: [0], explain: "Harmless species copying a harmful one." },
    { id: "i30", lesson: "i-mimic", q: "Two distasteful species evolving to look alike is…", options: ["Batesian mimicry", "Müllerian mimicry", "Crypsis", "Phoresy"], answer: [1], explain: "" },
    { id: "i31", lesson: "i-sex", q: "Male dragonflies scraping rival sperm out of a female is…", options: ["Intersexual, precopulatory", "Intersexual, postcopulatory", "Intrasexual, precopulatory", "Intrasexual, postcopulatory"], answer: [3], explain: "Male vs male (intra), after mating starts (post)." },
    { id: "i32", lesson: "i-sex", q: "Female choice of a male based on his courtship dance is…", options: ["Intrasexual, precopulatory", "Intersexual, precopulatory", "Intrasexual, postcopulatory", "Intersexual, postcopulatory"], answer: [1], explain: "Between sexes (inter), before mating (pre)." },
    { id: "i33", lesson: "i-sex", q: "Male fighting spiders battling each other before mating is…", options: ["Intrasexual, precopulatory", "Intersexual, precopulatory", "Intrasexual, postcopulatory", "Natural selection"], answer: [0], explain: "" },
    { id: "i34", lesson: "i-fifteen", q: "Which of these must-know insects are HEMIMETABOLOUS? <i>(select all that apply)</i>", options: ["Golden-armed Mantis", "Fungus-growing Termite", "Giant Forest Ant", "Robberfly"], answer: [0, 1], explain: "Ants and flies are holometabolous." },
    { id: "i35", lesson: "i-fifteen", q: "Which must-know insect hunts orthopterans?", options: ["Robberfly", "<i>Sphex diabolicus</i>", "Emperor", "Golden-armed Mantis"], answer: [1], explain: "Cricket-hunting wasp." },
  ],
  cheatsheet: `<ul>
    <li>6 legs, 3 segments, antennae, usually 4 wings, exoskeleton. Entognatha = non-insect hexapods.</li>
    <li><b>Holo</b> (egg-larva-pupa-adult): Coleoptera, Lepidoptera, Diptera, Hymenoptera, Neuroptera. <b>Hemi</b> (egg-nymph-adult): Odonata, Hemiptera, Orthoptera, Mantodea, Blattodea, Phasmatodea.</li>
    <li>30 orders, 24 in SG; 100–150k SG spp est. Threats: habitat loss (>87% mangroves), being understudied, fogging, pet trade.</li>
    <li>Lepidoptera scales/proboscis · Coleoptera elytra (25% of animals) · Odonata aquatic nymphs (damsels wings closed) · Diptera halteres · Hymenoptera membrane wings, eusocial, 409 SG ants · Hemiptera piercing mouthparts · Orthoptera jumping legs, stridulate · Mantodea raptorial legs.</li>
    <li>EPT = water quality. Mantisfly = Neuroptera.</li>
    <li>Mimicry: crypsis (hide), Batesian (harmless copies harmful), Müllerian (harmful both), aggressive (predator lures). Sexual selection: intra (same sex) vs inter (choice); pre vs post copulatory.</li></ul>`,
});
