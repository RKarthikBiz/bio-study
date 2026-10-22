window.MODULES = window.MODULES || [];
MODULES.push({
  id: "arachnids", emoji: "🕷️", title: "Arachnids, Myriapods & Isopods", short: "Arachnids",
  blurb: "Eight legs and many legs: spiders, scorpions, harvestmen, mites, millipedes, centipedes and pill bugs.",
  source: "Lecture 7 — Miscellaneous terrestrial arthropods (Weng Ngai Lam)",
  lessons: [
    { id: "a-groups", title: "Who's who among invertebrates",
      body: `<div class="tablewrap"><table class="t"><tr><th>Group</th><th>Body segments</th><th>Legs</th><th>Habitat</th></tr>
      <tr><td>Insects</td><td>3</td><td>6</td><td>Mostly terrestrial</td></tr>
      <tr><td>Arachnids</td><td>2</td><td>8</td><td>Mostly terrestrial</td></tr>
      <tr><td>Myriapods</td><td>Many</td><td>Many</td><td>All terrestrial</td></tr>
      <tr><td>Crustaceans</td><td>2</td><td>10 (isopods 14)</td><td>Mostly marine</td></tr>
      <tr><td>Annelids</td><td>Many</td><td>None</td><td>Marine diverse</td></tr>
      <tr><td>Molluscs</td><td>One (unsegmented)</td><td>None</td><td>Mostly marine</td></tr></table></div>
      <p>Terrestrial annelids, flatworms and snails have low diversity (not covered), e.g., the Temasek green tree snail <i>Amphidromus atricallosus</i> in NSDFs.</p>`,
      hook: `Count the legs: <b>6 = insect, 8 = arachnid, 14 = isopod, loads = myriapod</b>. 🦵` },
    { id: "a-what", title: "What is an arachnid?",
      body: `<ul><li><b>Eight legs</b>; mostly <b>predators</b></li>
      <li>Usually <b>two body segments</b>: <b>cephalothorax + abdomen</b></li>
      <li>Many have <b>chelicerae</b> and <b>raptorial pedipalps</b> for hunting</li>
      <li><b>No antennae and no wings</b></li><li>~100k described species; mostly terrestrial</li></ul>
      <p>Most dangerous arachnid group in Singapore? <b>Mites (Acari)</b> — specifically <b>ticks</b>, which are only a small group of mites. Singapore forests have relatively <b>high tick densities</b> (but unusually <b>low leech</b> densities).</p>
      <p><b>Except for mites, all arachnids are predators.</b></p>`,
      hook: `Arachnids: <b>“8 legs, 2 parts, 0 antennae, 0 wings.”</b> 🕷️` },
    { id: "a-mites", title: "Mites & ticks (Acari)",
      body: `<div class="tablewrap"><table class="t"><tr><th>Order</th><th>Feeding</th><th>Diversity</th></tr>
      <tr><td><b>Oribatida</b> (moss/beetle mites)</td><td>Detritivores (decomposers)</td><td>Very high</td></tr>
      <tr><td><b>Mesostigmata</b></td><td>Predators & parasites of invertebrates</td><td>High</td></tr>
      <tr><td><b>Trombidiformes</b></td><td>Detritivores, predators, parasites of plants & animals</td><td>Medium</td></tr>
      <tr><td><b>Ixodida</b> (ticks)</td><td>Parasites of (large) animals</td><td>Medium/low</td></tr></table></div>
      <p>Soil mites are hugely diverse and essential to ecosystems. Oribatid mites have <b>pteromorphs</b> protecting legs; chemically & physically defended. Predatory mites control plant pests like aphids.</p>`,
      hook: `<b>Mites are the odd ones out</b>: the only arachnids that aren't all predators (many eat dead stuff). 🍂` },
    { id: "a-small", title: "Whip spiders, whip scorpions & pseudoscorpions",
      img: "img/sp/amblypygi.jpg", cap: "Amblypygi — tailless whip scorpion",
      body: `<p><b>Amblypygi</b> (tailless whip scorpion / whip spider): <b>NOT a spider — no silk</b>; generalist nocturnal predator; <b>first pair of legs are antenna-like</b> (antenniform) for sensing in the dark; on trees, logs, buttresses; <b>females carry young</b>. 4 spp in SG (<i>Sarax</i>, <i>Charon</i>); even in Bishan-AMK Park.</p>
      <p><b>Uropygi</b> (whip scorpions / vinegaroons): large, long tail, hard-bodied, <b>spray acid</b> (vinegar smell). <b>Schizomida</b> (short-tailed whip scorpions): small, short tail, soft, no acid.</p>
      <p><b>Pseudoscorpions</b>: micropredators, some venomous (venom in pedipalps); often in aggregations hunting large prey together; in all forest microhabitats; poorly studied; hitchhike on other insects = <b>phoresy</b>.</p>`,
      hook: `<b>Ambly-pygi = “blunt rump”</b> → no tail; feelers made from legs. <b>Vinegaroon</b> sprays vinegar 🥗. <b>Phoresy = free ride</b> 🚕 on a beetle.` },
    { id: "a-opiliones", title: "Harvestmen (Opiliones)",
      img: "img/sp/beloniscus.jpg", cap: "Beloniscus albiephippiatus",
      body: `<p>Harvestmen (“daddy long legs”) superficially resemble spiders, but:</p>
      <ul><li><b>Fused body</b> (looks like one segment)</li><li>Much <b>longer legs</b></li><li><b>No silk, no venom</b></li>
      <li>Defence: foul smell, <b>dropping legs</b> (limb autotomy)</li><li>Predators and scavengers in forests</li></ul>
      <p><b><i>Beloniscus albiephippiatus</i></b> · <span class="st st-DD">DD</span> — on the <b>forest floor of native species-dominated forests</b>; easily recognised by <b>bright yellow markings</b>; uses <b>raptorial pedipalps</b> to eat crawling arthropods (spiders, beetles, isopods).</p>`,
      hook: `<b>Beloniscus = “yellow saddle”</b> (<i>albi-ephippiatus</i> ≈ white/pale saddle) 🐎 on the forest floor.` },
    { id: "a-scorpion", title: "Scorpions",
      img: "img/sp/lychas.jpg", cap: "Bark scorpion, Lychas scutilus",
      body: `<p>Generalist predators using a <b>venomous stinging tail</b>; forests across Singapore, active at night; illegally traded as pets. <b>Pectines</b> under the body act as ground-sensing organs. 5+ native species (giant forest scorpions <i>Heterometrus</i>, wood scorpion <i>Liocheles</i>, <i>Chaerilus</i>).</p>
      <p><b>Bark scorpion <i>Lychas scutilus</i></b> · <span class="st st-DD">DD</span>: lives <b>under the bark of large trees</b>; slender appendages, <b>flattened body</b>. Find it with a <b>UV torch at night</b> (scorpions glow!) — but don't tear bark off trees.</p>`,
      hook: `Flat as a <b>bookmark under tree bark</b> 📑 — and glows under UV like a rave. 🔦` },
    { id: "a-spiders", title: "Spiders (Araneae)",
      img: "img/sp/thiania.jpg", cap: "Metallic blue jumper, Thiania bhamoensis",
      body: `<ul><li>~<b>900 species</b> in Singapore (well studied); generalist predators</li>
      <li>Two distinct body segments</li><li>Unique: <b>venomous chelicerae</b> and <b>silk-producing spinnerets</b></li>
      <li>No native species known to cause death</li><li>Many strongly <b>sexually dimorphic (males smaller)</b></li></ul>
      <p><b>Jumping spiders (Salticidae)</b>: active hunters with <b>binocular vision</b> (depth perception); ~200 spp in SG; mating dances and male fights.</p>
      <p><b>Metallic blue jumper / fighting spider <i>Thiania bhamoensis</i></b> · <span class="st st-LC">LC</span>: common in urban parks & gardens; males show <b>ritualised fights</b>. “Spider fighting” was once a popular pastime in rural Singapore — now a niche hobby and cultural memory.</p>`,
      hook: `<b>Thiania = “Tiny-ninja”</b> 🥷 — the metallic blue fighting spider of kampung games.` },
    { id: "a-crab", title: "Crab spiders & the pitcher partner",
      img: "img/sp/thomisus.jpg", cap: "Thomisus nepenthiphilus",
      body: `<p><b>Crab spiders (Thomisidae)</b>: ~50 spp; <b>ambush predators</b> with enlarged front two leg pairs; camouflaged on flowers (high insect traffic).</p>
      <p><b>Pitcher plant crab spider <i>Thomisus nepenthiphilus</i></b> · <span class="st st-VU">VU</span>:</p>
      <ul><li>Lives <b>inside <i>Nepenthes gracilis</i> pitchers</b>, hunts at the mouth (peristome)</li>
      <li><b>Obligate mutualist</b> with <i>N. gracilis</i> — <b>hides in the pitcher fluid</b> when threatened; builds nests inside</li>
      <li>Benefits the plant with remains of large prey</li>
      <li>Most common in <b>resam-dominated scrubland</b> (Singapore/Johor)</li></ul>`,
      hook: `<b>Nepenthi-philus = “pitcher-lover”</b> 💚 — a roommate who pays rent in leftover bug bits.` },
    { id: "a-huntsman", title: "Huntsman spiders",
      img: "img/sp/heteropoda.jpg", cap: "Giant Lichen Huntsman, Heteropoda boiei",
      body: `<p><b>Sparassidae</b> (wandering/huntsman spiders): ~40 spp, many undescribed; <b>fast-moving large spiders that actively search for prey</b>; flat body, long hairy legs; look like “tarantulas”; generally harmless.</p>
      <p><b>Giant Lichen Huntsman <i>Heteropoda boiei</i></b> · <span class="st st-DD">DD</span>:</p>
      <ul><li>Big and beautiful <b>wandering spider</b> on tree bark</li>
      <li>Mottled like <b>lichen</b>; <b>males have beautiful green colouration</b>; females lack green and are slightly larger</li>
      <li><b>Chevron patterns</b> on the abdomen are distinctive</li></ul>`,
      hook: `<b>Lichen huntsman = camouflage jacket of lichen</b> 🧥🌿, flattened on bark, legs spread wide.`,
      why: "Mock Q20 was a photo of this spider." },
    { id: "a-orb", title: "Orb weavers",
      img: "img/sp/nephila.jpg", cap: "Giant golden orb weaver, Nephila pilipes",
      body: `<p><b>Araneidae</b>: ~90 spp in SG; weave <b>circular (orb) webs</b> in airy spots to trap flying insects. <b>Nephilidae</b> (golden orb-weavers, 4 spp) are similar but larger.</p>
      <ul><li><b>Long-horned orb weaver <i>Macracantha arcuata</i></b> · <span class="st st-EN">EN</span> — associated with <b>primary forests</b>; long curved spines (makros = big, akantha = thorn) are anti-predator defence; colours may signal toxicity (<b>aposematism</b>). Its cousin <i>M. hasseltii</i> lives in exotic forests.</li>
      <li><b>Giant golden orb weaver <i>Nephila pilipes</i></b> · <span class="st st-LC">LC</span> — common in <b>(secondary) forests and forested urban parks</b>; huge golden webs in the canopy; painful but harmless bite; <b>strong sexual dimorphism</b> (tiny males); occasionally traps birds.</li></ul>`,
      hook: `<b>Macracantha = Mega thorns</b> 🦄🦄 in the <b>primary</b> forest. <b>Nephila = golden</b> silk, giant lady + tiny husband.` },
    { id: "a-myriapods", title: "Millipedes vs centipedes",
      img: "img/sp/millipede.jpg", cap: "Giant millipede (Harpagophoridae)",
      body: `<div class="tablewrap"><table class="t"><tr><th></th><th>Centipedes (Chilopoda)</th><th>Millipedes (Diplopoda)</th></tr>
      <tr><td>Legs per segment</td><td><b>One</b></td><td><b>Two</b></td></tr>
      <tr><td>Forcipules</td><td>Yes (venomous front legs)</td><td>No</td></tr>
      <tr><td>Diet</td><td><b>Predators</b></td><td><b>Detritivores</b></td></tr>
      <tr><td>Antennae</td><td>Longer</td><td>Shorter</td></tr><tr><td>Speed</td><td>Fast</td><td>Slow</td></tr></table></div>
      <p>Recognise all Diplopoda/Chilopoda despite different looks (order names not tested). Also: Symphyla, Pauropoda (tiny soil animals).</p>
      <ul><li><b>Giant millipede (Harpagophoridae)</b> · <span class="st st-DD">DD</span> — large, in <b>good (mature) forests</b>, <b>often arboreal</b>; detritivore/fungivore; toxic</li>
      <li><b><i>Cormocephalus</i> sp.</b> · <span class="st st-LC">LC</span> — common <b>urban centipede</b> in gardens & parks, <b>under rocks</b>; painful bite; likely top predator of urban soil food webs</li>
      <li>House centipede <i>Thereuopoda longicornis</i> — fast nocturnal hunter, forests only</li></ul>`,
      hook: `<b>DI-plopoda = DOUBLE legs</b> (2 per segment) & <b>DEcomposer</b>. <b>CHILO-poda = CHILLI</b> 🌶️ — spicy venom, 1 leg per segment, hunter.` },
    { id: "a-isopods", title: "Isopods & conglobation",
      img: "img/sp/armadillo.jpg", cap: "Armadillo intermixtus",
      body: `<p><b>Isopoda</b> (crustaceans): <b>7 pairs of legs</b>; most are marine/aquatic, some terrestrial.</p>
      <p><b><i>Armadillo intermixtus</i></b> · <span class="st st-LC">LC</span>: detritivore in leaf litter and low plants; common in forests and parks — <b>especially exotic species-dominated forests</b>; able to <b>conglobate</b> (roll into a ball; not all isopods can); camouflage colouration.</p>
      <p><b>Conglobation</b> evolved many times: pill bugs, pill millipedes, pill beetles, pill cockroaches — and pangolins!</p>`,
      hook: `<b>Armadillo</b> 🛡️ — named for rolling into an armoured ball, like the mammal. Lives in <b>exotic</b> forests.` },
    { id: "a-protect", title: "Enjoying & protecting invertebrates",
      body: `<ul><li>Invertebrates are everywhere but hide well — <b>night walks</b> are best</li><li>Macrophotography is a great skill; a clip-on macro lens is enough</li></ul>
      <p><b>Threats</b>: shared with other wildlife — habitat degradation, pollution. Specific to arachnids: <b>pet trade (poaching)</b> e.g. Singapore blue tarantula, scorpions; and <b>pollution from fogging</b>.</p>`,
      hook: `Go at <b>night with a torch</b> 🔦 — that's when the eight-legged world comes out.` },
    { id: "a-table", title: "Must-know arachnids & inverts (table)",
      body: `<div class="tablewrap"><table class="t"><tr><th>Species</th><th>Status</th><th>Group</th><th>Significance</th></tr>
      <tr><td>Metallic blue jumper <i>Thiania bhamoensis</i></td><td>LC</td><td>Araneae (active hunter)</td><td>Fighting spider</td></tr>
      <tr><td>Giant Lichen Huntsman <i>Heteropoda boiei</i></td><td>DD</td><td>Araneae (active hunter)</td><td>Big beautiful wandering spider</td></tr>
      <tr><td>Pitcher plant crab spider <i>Thomisus nepenthiphilus</i></td><td>VU</td><td>Araneae (ambush hunter)</td><td>Obligate mutualist of <i>N. gracilis</i>, resam scrubland</td></tr>
      <tr><td>Long horned orb weaver <i>Macracantha arcuata</i></td><td>EN</td><td>Araneae (orb weaver)</td><td>Spiny & colourful, primary forests</td></tr>
      <tr><td>Giant golden orb weaver <i>Nephila pilipes</i></td><td>LC</td><td>Araneae (orb weaver)</td><td>Big web, secondary forests</td></tr>
      <tr><td>Bark scorpion <i>Lychas scutilus</i></td><td>DD</td><td>Scorpiones</td><td>Under bark of big trees</td></tr>
      <tr><td><i>Beloniscus albiephippiatus</i></td><td>DD</td><td>Opiliones</td><td>Forest floor, NSDF</td></tr>
      <tr><td>Giant millipede (Harpagophoridae)</td><td>DD</td><td>Diplopoda</td><td>Good forests, often arboreal</td></tr>
      <tr><td><i>Cormocephalus</i> sp.</td><td>LC</td><td>Chilopoda</td><td>Parks/gardens under rocks</td></tr>
      <tr><td><i>Armadillo intermixtus</i></td><td>LC</td><td>Isopoda</td><td>Exotic species-dominated forests</td></tr></table></div>`,
      hook: `The <b>DD</b> (data deficient) club: lichen huntsman, bark scorpion, Beloniscus, giant millipede — “<b>D</b>on't <b>D</b>ocument well”. Only <b>EN</b>: spiky Macracantha; only <b>VU</b>: pitcher crab spider.` },
  ],
  species: [
    { id: "thiania", common: "Metallic blue jumper", sci: "Thiania bhamoensis", family: "Salticidae", group: "Spider", status: "LC", where: "Urban parks and gardens", fact: "The ‘fighting spider’ — males show ritualised fights", hook: "Tiny ninja of kampung games." },
    { id: "heteropoda", common: "Giant Lichen Huntsman", sci: "Heteropoda boiei", family: "Sparassidae", group: "Spider", status: "DD", where: "Tree bark in forests", fact: "Big, beautiful lichen-patterned wandering spider; males green, chevrons on abdomen", id_tip: "Flat, long legs, lichen camouflage.", hook: "Wears a lichen jacket." },
    { id: "thomisus", common: "Pitcher plant crab spider", sci: "Thomisus nepenthiphilus", family: "Thomisidae", group: "Spider", status: "VU", where: "Nepenthes gracilis pitchers in resam-dominated scrubland", fact: "Obligate mutualist of Nepenthes gracilis; hides in pitcher fluid", hook: "Pitcher-lover roommate." },
    { id: "macracantha", common: "Long-horned orb weaver", sci: "Macracantha arcuata", family: "Araneidae", group: "Spider", status: "EN", where: "Primary forests", fact: "Well defended with long spines and warning colours", hook: "Mega thorns." },
    { id: "nephila", common: "Giant golden orb weaver", sci: "Nephila pilipes", family: "Nephilidae", group: "Spider", status: "LC", where: "Secondary forests and forested urban parks", fact: "Big spider with huge golden web; strong sexual dimorphism", hook: "Giant lady, tiny husband." },
    { id: "lychas", common: "Bark scorpion", sci: "Lychas scutilus", family: "Buthidae", group: "Scorpion", status: "DD", where: "Under the bark of big trees", fact: "Slender, flattened scorpion living under bark; glows under UV", hook: "Bookmark under the bark." },
    { id: "beloniscus", common: "Beloniscus harvestman", sci: "Beloniscus albiephippiatus", family: "Opiliones", group: "Harvestman", status: "DD", where: "Forest floor in native species-dominated forests", fact: "Harvestman with bright yellow markings and raptorial pedipalps", hook: "Yellow saddle on the forest floor." },
    { id: "millipede", common: "Giant millipede", sci: "Harpagophoridae sp.", family: "Spirobolida: Harpagophoridae", group: "Myriapod", status: "DD", where: "Good (mature) forests, often arboreal", fact: "Large toxic detritivore/fungivore millipede", hook: "Two legs per segment, slow eater of dead stuff." },
    { id: "cormocephalus", common: "Cormocephalus centipede", sci: "Cormocephalus sp.", family: "Scolopendromorpha: Scolopendridae", group: "Myriapod", status: "LC", where: "Parks and gardens, under rocks", fact: "Common urban centipede, likely top predator of urban soil food webs", hook: "Chilli under the rock." },
    { id: "armadillo", common: "Pill bug", sci: "Armadillo intermixtus", family: "Isopoda: Armadillidae", group: "Isopod", status: "LC", where: "Exotic species-dominated forests (leaf litter)", fact: "Detritivorous isopod that can conglobate (roll into a ball)", hook: "Rolls up like an armadillo." },
  ],
  questions: [
    { id: "a1", lesson: "a-groups", q: "How many pairs of legs do isopods have?", options: ["3", "4", "5", "7"], answer: [3], explain: "7 pairs = 14 legs." },
    { id: "a2", lesson: "a-what", q: "Which features describe arachnids? <i>(select all that apply)</i>", options: ["Eight legs", "Two body segments (cephalothorax + abdomen)", "No antennae", "Wings"], answer: [0, 1, 2], explain: "No antennae, no wings." },
    { id: "a3", lesson: "a-what", q: "Which arachnid group is the most dangerous in Singapore?", options: ["Spiders", "Scorpions", "Mites (ticks)", "Harvestmen"], answer: [2], explain: "Ticks (a small group of mites); SG forests have high tick densities." },
    { id: "a4", lesson: "a-mites", q: "Which arachnids are NOT all predators?", options: ["Spiders", "Mites", "Scorpions", "Pseudoscorpions"], answer: [1], explain: "Many mites are detritivores; all other arachnids are predators." },
    { id: "a5", lesson: "a-mites", q: "Oribatid mites are mainly…", options: ["Parasites of large animals", "Detritivores (decomposers)", "Plant pests", "Predators of birds"], answer: [1], explain: "Very high diversity in soil." },
    { id: "a6", lesson: "a-small", q: "Which statements about Amblypygi are true? <i>(select all that apply)</i>", options: ["They are not spiders and cannot make silk", "Their first legs are antenna-like", "Females carry their young", "They spray acid"], answer: [0, 1, 2], explain: "Acid spraying = Uropygi (vinegaroons)." },
    { id: "a7", lesson: "a-small", q: "Pseudoscorpions hitchhiking on other insects for dispersal is called…", options: ["Phoresy", "Conglobation", "Autotomy", "Aposematism"], answer: [0], explain: "" },
    { id: "a8", lesson: "a-opiliones", q: "How do harvestmen differ from spiders? <i>(select all that apply)</i>", options: ["Fused body segments", "No silk or venom", "Much longer legs", "Eight eyes"], answer: [0, 1, 2], explain: "" },
    { id: "a9", lesson: "a-opiliones", q: "Dropping legs to escape predators is called…", options: ["Phoresy", "Limb autotomy", "Conglobation", "Stridulation"], answer: [1], explain: "" },
    { id: "a10", lesson: "a-opiliones", q: "Where would you find <i>Beloniscus albiephippiatus</i>?", options: ["Under bark of big trees", "Forest floor of native species-dominated forests", "Inside pitcher plants", "Urban gardens under rocks"], answer: [1], explain: "Bright yellow markings." },
    { id: "a11", lesson: "a-scorpion", q: "The bark scorpion <i>Lychas scutilus</i> is best found…", options: ["Under the bark of large trees, using UV at night", "In mangrove mud", "Inside pitcher plants", "On flowers"], answer: [0], explain: "Don't tear off bark!" },
    { id: "a12", lesson: "a-spiders", q: "Spiders' unique features include… <i>(select all that apply)</i>", options: ["Venomous chelicerae", "Silk-producing spinnerets", "Antennae", "Fused single body segment"], answer: [0, 1], explain: "" },
    { id: "a13", lesson: "a-spiders", q: "Jumping spiders rely on ___ for active hunting.", options: ["Webs", "Binocular vision (depth perception)", "Echolocation", "Antennae"], answer: [1], explain: "" },
    { id: "a14", lesson: "a-spiders", q: "Which spider was used in a once-popular rural Singapore pastime?", options: ["<i>Nephila pilipes</i>", "<i>Thiania bhamoensis</i>", "<i>Heteropoda boiei</i>", "<i>Thomisus nepenthiphilus</i>"], answer: [1], explain: "Spider fighting with the metallic blue jumper." },
    { id: "a15", lesson: "a-crab", q: "<i>Thomisus nepenthiphilus</i> is an obligate mutualist of…", options: ["<i>Nepenthes gracilis</i>", "Rafflesia", "Albizia", "Resam fern"], answer: [0], explain: "Found mostly in resam scrubland." },
    { id: "a16", lesson: "a-crab", q: "When threatened, the pitcher plant crab spider…", options: ["Bites", "Hides in the pitcher fluid", "Drops a leg", "Sprays acid"], answer: [1], explain: "" },
    { id: "a17", lesson: "a-huntsman", q: "Which features identify the Giant Lichen Huntsman? <i>(select all that apply)</i>", options: ["Lichen-like mottled colouring", "Males with green colouration", "Chevron pattern on abdomen", "Builds orb webs"], answer: [0, 1, 2], explain: "Huntsmen actively hunt; no orb webs." },
    { id: "a18", lesson: "a-orb", q: "The long-horned orb weaver <i>Macracantha arcuata</i> is associated with…", options: ["Primary forests", "Exotic forests", "Mangroves", "Urban turf"], answer: [0], explain: "<i>M. hasseltii</i> is the exotic-forest cousin." },
    { id: "a19", lesson: "a-orb", q: "Bright colours signalling toxicity, as in spiny orb weavers, is called…", options: ["Crypsis", "Aposematism", "Batesian mimicry", "Phoresy"], answer: [1], explain: "" },
    { id: "a20", lesson: "a-orb", q: "Which is TRUE of <i>Nephila pilipes</i>?", options: ["Males are larger than females", "Strong sexual dimorphism; females huge", "It's endangered", "Its bite is deadly"], answer: [1], explain: "Painful but harmless bite; LC." },
    { id: "a21", lesson: "a-myriapods", q: "Which describe CENTIPEDES? <i>(select all that apply)</i>", options: ["One pair of legs per segment", "Venomous forcipules", "Predatory and fast", "Detritivores"], answer: [0, 1, 2], explain: "Millipedes are the detritivores." },
    { id: "a22", lesson: "a-myriapods", q: "Millipedes are class…", options: ["Chilopoda", "Diplopoda", "Symphyla", "Isopoda"], answer: [1], explain: "Di = two legs per segment." },
    { id: "a23", lesson: "a-myriapods", q: "Where is the giant millipede (Harpagophoridae) mostly found?", options: ["Urban gardens", "Good forests, often arboreal", "Mangroves", "Beaches"], answer: [1], explain: "" },
    { id: "a24", lesson: "a-isopods", q: "Rolling into a ball is called…", options: ["Conglobation", "Autotomy", "Phoresy", "Masting"], answer: [0], explain: "Pill bugs, pill millipedes, pill beetles, pill cockroaches, pangolins." },
    { id: "a25", lesson: "a-isopods", q: "<i>Armadillo intermixtus</i> is especially common in…", options: ["Primary forests", "Exotic species-dominated forests", "Coral reefs", "Hill streams"], answer: [1], explain: "" },
    { id: "a26", lesson: "a-protect", q: "Threats specific to arachnids include… <i>(select all that apply)</i>", options: ["Pet trade / poaching", "Pollution from fogging", "Coral bleaching", "Masting"], answer: [0, 1], explain: "" },
    { id: "a27", lesson: "a-table", q: "Which of these arachnids are listed as Data Deficient? <i>(select all that apply)</i>", options: ["Giant Lichen Huntsman", "Bark scorpion", "<i>Beloniscus albiephippiatus</i>", "Metallic blue jumper"], answer: [0, 1, 2], explain: "Metallic blue jumper is LC." },
  ],
  cheatsheet: `<ul>
    <li>Legs: insect 6, arachnid 8, isopod 14, myriapod many. Arachnids: 2 segments, no antennae/wings; all predators except mites.</li>
    <li>Mites: Oribatida (detritivores, very diverse), Mesostigmata, Trombidiformes, Ixodida (ticks = most dangerous).</li>
    <li>Amblypygi (no silk, antenniform legs, carry young); Uropygi (acid); Schizomida; pseudoscorpions (phoresy); Opiliones (fused body, no silk/venom, autotomy).</li>
    <li>Spiders: ~900 SG spp, venomous chelicerae, spinnerets, males smaller. Jumpers binocular vision.</li>
    <li>Must-knows: Thiania LC (fighting) · Heteropoda DD (lichen, green males) · Thomisus VU (Nepenthes mutualist, RDS) · Macracantha EN (spines, primary forest) · Nephila LC (secondary forest) · Lychas DD (under bark) · Beloniscus DD (NSDF floor).</li>
    <li>Centipede (Chilopoda): 1 leg/segment, forcipules, predator. Millipede (Diplopoda): 2 legs/segment, detritivore. Giant millipede DD (good forest, arboreal); Cormocephalus LC (gardens under rocks); Armadillo LC (ESDF, conglobates).</li></ul>`,
});
