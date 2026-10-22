window.MODULES = window.MODULES || [];
MODULES.push({
  id: "birds", emoji: "🐦", title: "Birds of Singapore", short: "Birds",
  blurb: "~430 species, the major families, the 10 must-know birds, and why dead birds are valuable data.",
  source: "Lecture by Dr Tan Yen Yi (LKCNHM) — Birds of Singapore",
  lessons: [
    { id: "bd-numbers", title: "Birds by the numbers",
      img: "img/sp/kingfisher.jpg", cap: "Collared Kingfisher",
      body: `<p>Birds = Kingdom Animalia, Phylum Chordata, <b>Class Aves</b>: <b>46 orders, 252 families, ~11,131 species</b> worldwide (AviList).</p>
      <p>Singapore: <span class="key">c. 430 species of 83 families</span> recorded (incl. migrants & visitors) — about 450 to the nearest fifty.</p>
      <p>And endemic birds? <span class="key">ZERO</span>. Singapore is tiny and connected to the mainland.</p>
      <p>Why birds? Feathers, flight, hard-shelled eggs, cute & fluffy… a “superpower” group for natural history.</p>`,
      hook: `“<b>4-3-0</b>” 🎯: about <b>430</b> species, <b>0</b> endemics. (83 families — “8-3, like a birthday cake for birds.”)`,
      why: "Mock Q6 (nearest fifty → 450) and Q14 (endemics → 0)." },
    { id: "bd-shorebirds", title: "Shorebirds: champion migrants",
      img: "img/sp/redshank.jpg", cap: "Common Redshank",
      body: `<p>Order <b>Charadriiformes</b> (shorebirds), ~390 species, many <b>prolific long-distance migrants</b>: plovers, lapwings, sandpipers, whimbrels, godwits, shanks.</p>
      <p>Record: a <b>Bar-tailed Godwit</b> flew <b>13,560 km non-stop</b> from Alaska to Tasmania.</p>
      <p><b>Scolopacidae</b> (sandpipers & allies, 34 spp in SG): long-legged waders, wetland specialists, <b>highly migratory — many don't breed in Singapore</b>. E.g., Common Redshank, Asian Dowitcher, Curlew Sandpiper, Eurasian Whimbrel.</p>
      <p>Research: genomics of <b>Common Redshanks</b> showed decades-long genetic stability and family-level site fidelity in Singapore — informing <b>flyway conservation</b>.</p>`,
      hook: `<b>Red</b>shank = <b>red</b> legs, <b>shank</b> = leg 🦵. A <b>migrant</b> that visits our <b>mudflats</b>.` },
    { id: "bd-families1", title: "Family album part 1",
      img: "img/sp/egret.jpg", cap: "Little Egret",
      body: `<ul>
      <li><b>Columbidae</b> — doves & pigeons (15 spp): chunky, deceptively good fliers, <b>drink by peristalsis</b> (suck water). Rock Dove, <b>Pink-necked Green Pigeon</b>, Pied Imperial Pigeon, Spotted & Zebra Doves.</li>
      <li><b>Ardeidae</b> — herons, egrets, bitterns (19 spp): long necks & legs, water-associated. <b>Little Egret</b> (black bill, yellow feet), Purple & Grey Herons. Tip: <b>egrets are all-white herons</b>.</li>
      <li><b>Strigidae</b> — owls (9 spp): <b>Buffy Fish Owl</b> eats fish, near waterbodies, urban-adapted; Spotted Wood Owl in parks with big trees.</li>
      <li><b>Accipitridae</b> — kites, eagles, hawks (30 spp): <b>Brahminy Kite</b> (brown body, white head, M-shaped silhouette); <b>White-bellied Sea Eagle</b> (Singapore's heaviest resident bird, <b>V-shaped</b> flight silhouette).</li></ul>`,
      hook: `<b>Little Egret = “yellow socks”</b> 🧦: black bill + bright yellow feet.<br>Sea eagle flies in a <b>V for Victory</b>; the kite flies in an <b>M</b>.` },
    { id: "bd-families2", title: "Family album part 2",
      img: "img/sp/hornbill.jpg", cap: "Oriental Pied Hornbill",
      body: `<ul>
      <li><b>Bucerotidae</b> — hornbills (1 sp): <b>Oriental Pied Hornbill</b> — <b>nearly extirpated</b> from Singapore, now back; male has larger casque; known terroriser of smaller birds (eats eggs/chicks).</li>
      <li><b>Alcedinidae</b> — kingfishers (9 spp): water-adjacent but not necessarily; eat crustaceans (crabs) and insects. <b>Collared Kingfisher</b> & White-throated Kingfisher are year-round residents; Black-backed Dwarf Kingfisher is migratory.</li>
      <li><b>Picidae</b> — woodpeckers (10 spp): very vocal (heard before seen), climb along trunks, <b>cavity nesters</b>, insectivorous. <b>Common Flameback</b>, Laced, Banded.</li>
      <li><b>Psittaculidae</b> — Old World parrots (6 spp): only the <b>Long-tailed Parakeet</b> is native. All are CITES Appendix II except one (the introduced Rose-ringed Parakeet).</li></ul>`,
      hook: `<b>Flameback</b> = a bird with its back on fire 🔥 that drums on trunks. <b>Long-tailed = Local</b> (the only native parakeet).` },
    { id: "bd-common", title: "Common city birds",
      img: "img/sp/bulbul.jpg", cap: "Yellow-vented Bulbul",
      body: `<ul><li><b>Pycnonotidae</b> — bulbuls (13 spp): <b>Yellow-vented Bulbul</b> — everywhere</li>
      <li><b>Sturnidae</b> — starlings & mynas (12 spp): Javan Myna, Common Myna, Asian Glossy Starling</li>
      <li><b>Corvidae</b> — crows (3 spp): House Crow</li>
      <li><b>Passeridae</b> — sparrows (2 spp): Eurasian Tree Sparrow, House Sparrow</li>
      <li><b>Nectariniidae</b> — sunbirds & spiderhunters (9 spp): Ornate (olive-backed) Sunbird</li></ul>
      <p>Many are <b>human commensals</b> (rock doves, Javan mynas, the “lupsup” hawker birds). For more interesting birds visit nature areas: Sungei Buloh, Kent Ridge, Pasir Ris, BTNR, Dairy Farm, SBG, Bishan-AMK…</p>
      <p>Best times: <b>dawn chorus</b> or <b>dusk foraging</b>. Migrants only appear in migratory season. Gear: binoculars; look high, ahead and low. Use eBird hotspots.</p>`,
      hook: `<b>Yellow-vented</b> = yellow under the tail (the “vent”) 💛 — the bird with the yellow underpants.` },
    { id: "bd-museum", title: "Dead birds, living data",
      body: `<p>Natural history collections are <b>reference material for now and forever</b>. The Raffles collection at LKCNHM: ~34,300 bird specimens of ~1,060 species. Most are <b>pre-WWII</b>.</p>
      <ul><li>Records of extinct/extirpated birds (Passenger Pigeon; Green Broadbill & others now very rare visitors). LKCNHM holds specimens of ~31 of 59 formerly resident species.</li>
      <li>Oldest specimen collected in Singapore: Daurian Starlings (1879)</li>
      <li><b>Museomics</b>: compare historic vs modern DNA and morphology</li></ul>
      <p><b>Carcass salvage</b>: birds killed by window strikes, vehicles etc. become data. The <b>Dead Bird Hotline 9876 4997 / @deadbirdhotline</b> is a citizen science project building a digital & physical library of Singapore's birds — giving first specimens (e.g., Eurasian Sparrowhawk 2022) and records of hard-to-detect species.</p>
      <p><b>Reporting bias</b> favours charismatic, large birds over drab ones. Scientific specimens (standard, for research) ≠ taxidermy (lifelike, for display).</p>`,
      hook: `<b>“Die already, got use meh?” — YES!</b> 📦 Every dead bird reported is a library book for science.` },
    { id: "bd-ten", title: "The 10 must-know birds",
      body: `<div class="tablewrap"><table class="t"><tr><th>Bird</th><th>Status</th><th>Where</th><th>Res/Mig</th></tr>
      <tr><td>Common Redshank <i>Tringa totanus</i></td><td>VU</td><td>Mudflats</td><td rowspan="2">Migrants</td></tr>
      <tr><td>Little Egret <i>Egretta garzetta</i></td><td>LC</td><td>Mudflats</td></tr>
      <tr><td>Pink-necked Green Pigeon <i>Treron vernans</i></td><td>LC</td><td>Urban parks & forests</td><td rowspan="8">Residents</td></tr>
      <tr><td>Buffy Fish Owl <i>Ketupa ketupu</i></td><td>CR</td><td>Near waterbodies (forest & urban)</td></tr>
      <tr><td>White-bellied Sea Eagle <i>Icthyophaga leucogaster</i></td><td>LC</td><td>Near water; nests in albizia (ESDF)</td></tr>
      <tr><td>Oriental Pied Hornbill <i>Anthracoceros albirostris</i></td><td>NT</td><td>Urban parks & forests</td></tr>
      <tr><td>Collared Kingfisher <i>Todiramphus chloris</i></td><td>LC</td><td>Parks, scrub, mangroves, near water</td></tr>
      <tr><td>Common Flameback <i>Dinopium javanense</i></td><td>LC</td><td>Urban parks & forests</td></tr>
      <tr><td>Long-tailed Parakeet <i>Psittacula longicauda</i></td><td>NT</td><td>Urban parks & forests</td></tr>
      <tr><td>Yellow-vented Bulbul <i>Pycnonotus goiaver</i></td><td>LC</td><td>Everywhere</td></tr></table></div>`,
      hook: `Only the <b>two mudflat waders are migrants</b> (Redshank & Egret — “they wade, then they fade”). The rest live here year-round.<br>The only <b>CR</b> one is the <b>Buffy Fish Owl</b> — “owl in danger”. 🦉` },
  ],
  species: [
    { id: "redshank", common: "Common Redshank", sci: "Tringa totanus", family: "Scolopacidae", group: "Bird", status: "VU", where: "Mudflats", fact: "Migratory wader with red legs; genomics shows decades of site fidelity in Singapore", hook: "Red shanks, migrates to our mudflats." },
    { id: "egret", common: "Little Egret", sci: "Egretta garzetta", family: "Ardeidae", group: "Bird", status: "LC", where: "Mudflats", where_tip: "It's a migrant wader here.", fact: "All-white migrant heron with a black bill and yellow feet", hook: "Yellow socks." },
    { id: "greenpigeon", common: "Pink-necked Green Pigeon", sci: "Treron vernans", family: "Columbidae", group: "Bird", status: "LC", where: "Urban parks and forests", fact: "Colourful resident pigeon; males have a pink neck and orange breast", hook: "Pink neck, green body." },
    { id: "fishowl", common: "Buffy Fish Owl", sci: "Ketupa ketupu", family: "Strigidae", group: "Bird", status: "CR", where: "Near waterbodies (forests and urban areas)", fact: "Critically endangered fish-eating owl that is surprisingly urban-adapted", hook: "Owl in danger (CR) that goes fishing." },
    { id: "seaeagle", common: "White-bellied Sea Eagle", sci: "Icthyophaga leucogaster", family: "Accipitridae", group: "Bird", status: "LC", where: "Near waterbodies; often nests in albizia (exotic forests)", fact: "Singapore's heaviest resident bird; V-shaped flight silhouette", hook: "V for Victory in the sky." },
    { id: "hornbill", common: "Oriental Pied Hornbill", sci: "Anthracoceros albirostris", family: "Bucerotidae", group: "Bird", status: "NT", where: "Urban parks and forests", fact: "Once nearly extirpated, now back; males have bigger casques; raids smaller birds' nests", hook: "Comeback king with a big casque." },
    { id: "kingfisher", common: "Collared Kingfisher", sci: "Todiramphus chloris", family: "Alcedinidae", group: "Bird", status: "LC", where: "Urban parks, scrublands, mangroves, near water", fact: "Year-round resident kingfisher with a white collar; eats crabs and insects", hook: "White collar, blue suit." },
    { id: "flameback", common: "Common Flameback", sci: "Dinopium javanense", family: "Picidae", group: "Bird", status: "LC", where: "Urban parks and forests", fact: "Vocal woodpecker that climbs trunks, nests in cavities and eats insects", hook: "Back on fire, drumming on trees." },
    { id: "parakeet", common: "Long-tailed Parakeet", sci: "Psittacula longicauda", family: "Psittaculidae", group: "Bird", status: "NT", where: "Urban parks and forests", fact: "The only parakeet native to Singapore", hook: "Long-tailed = Local." },
    { id: "bulbul", common: "Yellow-vented Bulbul", sci: "Pycnonotus goiaver", family: "Pycnonotidae", group: "Bird", status: "LC", where: "Everywhere", fact: "Ubiquitous resident songbird with yellow under the tail", hook: "Yellow underpants." },
  ],
  questions: [
    { id: "bd1", lesson: "bd-numbers", q: "Approximately how many bird species have been recorded in Singapore?", options: ["~130", "~230", "~430", "~1,100"], answer: [2], explain: "c. 430 species of 83 families." },
    { id: "bd2", lesson: "bd-numbers", q: "How many bird species are endemic to Singapore?", options: ["0", "3", "10", "40"], answer: [0], explain: "None — Singapore is small and connected to the mainland." },
    { id: "bd3", lesson: "bd-numbers", q: "Birds belong to which class?", options: ["Mammalia", "Aves", "Reptilia", "Chordata"], answer: [1], explain: "Chordata is the phylum; Aves the class." },
    { id: "bd4", lesson: "bd-shorebirds", q: "Which statements about Scolopacidae (sandpipers) are true? <i>(select all that apply)</i>", options: ["Long-legged wading birds", "Wetland specialists", "Highly migratory; many don't breed in Singapore", "Cavity nesters"], answer: [0, 1, 2], explain: "Cavity nesting = woodpeckers." },
    { id: "bd5", lesson: "bd-shorebirds", q: "The record 13,560 km non-stop flight (Alaska → Tasmania) belongs to a…", options: ["Common Redshank", "Bar-tailed Godwit", "Little Egret", "Whimbrel"], answer: [1], explain: "Bar-tailed Godwit (<i>Limosa lapponica</i>)." },
    { id: "bd6", lesson: "bd-families1", q: "How do you recognise a Little Egret?", options: ["Yellow bill, black feet", "Black bill, yellow feet", "Grey body, long crest", "Purple neck"], answer: [1], explain: "All white with black bill and yellow feet." },
    { id: "bd7", lesson: "bd-families1", q: "Egrets are…", options: ["A kind of stork", "All-white herons", "Shorebirds", "Kingfishers"], answer: [1], explain: "Family Ardeidae." },
    { id: "bd8", lesson: "bd-families1", q: "Which bird is Singapore's heaviest resident bird?", options: ["Brahminy Kite", "White-bellied Sea Eagle", "Oriental Pied Hornbill", "Grey Heron"], answer: [1], explain: "The “chonkiest” resident; V-shaped flight silhouette." },
    { id: "bd9", lesson: "bd-families1", q: "A raptor with a brown body, white head and M-shaped silhouette is the…", options: ["White-bellied Sea Eagle", "Brahminy Kite", "Buffy Fish Owl", "Changeable Hawk-eagle"], answer: [1], explain: "Brahminy Kite (<i>Haliastur indus</i>)." },
    { id: "bd10", lesson: "bd-families1", q: "Pigeons and doves can drink by…", options: ["Lapping like dogs", "Peristalsis (sucking water up)", "Absorbing through skin", "They never drink"], answer: [1], explain: "Columbidae drink by peristalsis." },
    { id: "bd11", lesson: "bd-families2", q: "Which parakeet is the only one native to Singapore?", options: ["Rose-ringed Parakeet", "Red-breasted Parakeet", "Long-tailed Parakeet", "Monk Parakeet"], answer: [2], explain: "<i>Psittacula longicauda</i>." },
    { id: "bd12", lesson: "bd-families2", q: "Woodpeckers are… <i>(select all that apply)</i>", options: ["Cavity nesters", "Insectivorous", "Very vocal", "Fish-eaters"], answer: [0, 1, 2], explain: "Often heard before seen." },
    { id: "bd13", lesson: "bd-families2", q: "Which is TRUE about the Oriental Pied Hornbill in Singapore?", options: ["It is endemic", "It was nearly extirpated but has recovered", "Females have the larger casque", "It's a migrant"], answer: [1], explain: "Males have larger casques; it's a resident." },
    { id: "bd14", lesson: "bd-families2", q: "Which kingfisher is migratory?", options: ["Collared Kingfisher", "White-throated Kingfisher", "Black-backed Dwarf Kingfisher", "All are residents"], answer: [2], explain: "Collared & White-throated are year-round residents." },
    { id: "bd15", lesson: "bd-common", q: "Which families contain common urban birds? <i>(select all that apply)</i>", options: ["Pycnonotidae (bulbuls)", "Sturnidae (mynas)", "Corvidae (crows)", "Bucerotidae (hornbills)"], answer: [0, 1, 2], explain: "Hornbills: just 1 species, parks & forests." },
    { id: "bd16", lesson: "bd-common", q: "Best times of day to see birds are…", options: ["Midday", "Dawn chorus and dusk foraging", "Midnight", "Any time equally"], answer: [1], explain: "" },
    { id: "bd17", lesson: "bd-museum", q: "Why are dead birds valuable? <i>(select all that apply)</i>", options: ["They become museum specimens for research", "They record when and where species lived", "They can be first specimens for Singapore", "They're used for taxidermy art only"], answer: [0, 1, 2], explain: "Scientific specimens preserve biological information; taxidermy is for display." },
    { id: "bd18", lesson: "bd-museum", q: "The Dead Bird Hotline is run by…", options: ["NParks", "ACRES", "Lee Kong Chian Natural History Museum", "Bird Society of Singapore"], answer: [2], explain: "LKCNHM: 9876 4997 / @deadbirdhotline." },
    { id: "bd19", lesson: "bd-museum", q: "Common causes of bird death that feed carcass salvage include: <i>(select all that apply)</i>", options: ["Window strikes", "Vehicle collisions", "Other human-caused mortality", "Coral bleaching"], answer: [0, 1, 2], explain: "" },
    { id: "bd20", lesson: "bd-museum", q: "Biodiversity reporting tends to be biased towards…", options: ["Drab small birds", "Charismatic and larger birds", "Nocturnal birds", "Seabirds"], answer: [1], explain: "e.g., Pink-necked Green Pigeon gets reported more than drab species." },
    { id: "bd21", lesson: "bd-ten", q: "Which of the 10 must-know birds are MIGRANTS? <i>(select all that apply)</i>", options: ["Common Redshank", "Little Egret", "Collared Kingfisher", "Yellow-vented Bulbul"], answer: [0, 1], explain: "Both mudflat waders." },
    { id: "bd22", lesson: "bd-ten", q: "Which of the must-know birds often nests in Moluccan albizia in exotic-dominated forests?", options: ["White-bellied Sea Eagle", "Common Flameback", "Little Egret", "Common Redshank"], answer: [0], explain: "Large birds use tall albizia — one reason ESDFs matter." },
    { id: "bd23", lesson: "bd-ten", q: "Which must-know bird is Critically Endangered in Singapore?", options: ["Oriental Pied Hornbill", "Buffy Fish Owl", "Long-tailed Parakeet", "Common Redshank"], answer: [1], explain: "Hornbill & parakeet NT; Redshank VU." },
    { id: "bd24", lesson: "bd-ten", q: "Which must-know birds are Near Threatened? <i>(select all that apply)</i>", options: ["Oriental Pied Hornbill", "Long-tailed Parakeet", "Common Flameback", "Pink-necked Green Pigeon"], answer: [0, 1], explain: "The rest are LC." },
  ],
  cheatsheet: `<ul>
    <li>Aves: 46 orders, 252 families, ~11,131 spp. <b>SG: ~430 spp, 83 families, 0 endemics.</b></li>
    <li>Shorebirds (Charadriiformes): migrants; Bar-tailed Godwit 13,560 km non-stop.</li>
    <li>Families: Columbidae (peristalsis drinking), Scolopacidae (34, migratory waders), Ardeidae (egrets = white herons), Strigidae, Accipitridae (sea eagle V, kite M), Bucerotidae (1 sp), Alcedinidae, Picidae, Psittaculidae (only Long-tailed native).</li>
    <li>Migrants: Redshank (VU), Little Egret (LC) on mudflats. CR: Buffy Fish Owl. NT: Hornbill, Long-tailed Parakeet.</li>
    <li>Museum: specimens = data; Dead Bird Hotline 9876 4997; reporting bias toward charismatic birds.</li></ul>`,
});
