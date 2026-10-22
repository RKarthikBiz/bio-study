window.MODULES = window.MODULES || [];
MODULES.push({
  id: "basics", emoji: "🔬", title: "Taxonomy & Biodiversity Basics", short: "Basics",
  blurb: "Naming life, what a species is, what biodiversity means, and the tools used to protect it.",
  source: "Lecture 1 — Biodiversity of Singapore",
  lessons: [
    { id: "b-course", title: "What the quiz wants from you",
      body: `<p>ES5008's final exam is a <span class="key">closed-book MCQ</span> (12 Nov). The mock had <b>20 questions in 20 minutes</b> — about one minute each — and several were “select all that apply”.</p>
      <p>The course goals you'll be tested on:</p>
      <ul><li><b>Identify</b> ~100+ must-know plant & animal species (often from a photo)</li><li>Know their <b>biology & natural history</b></li><li><b>Describe habitats</b> and which species live in each — and <i>why</i></li><li>Discuss biodiversity & conservation issues</li></ul>
      <p>Slides labelled <b>“CONTENT NOT TESTED”</b> or <b>“ES7033 CONTENT ONLY”</b> are not examined for ES5008 — this app skips them or marks them.</p>`,
      hook: `The exam's favourite question shape is <b>species ↔ habitat</b>. Whenever you learn a species, ask: “Where does it live, and why there?”`,
      why: "Questions like “Which species are unlikely in the native forests of CCNR?” test species + habitat together." },
    { id: "b-ranks", title: "Taxonomy: the filing system for life",
      body: `<p><b>Taxonomy</b> = the science of naming and classifying organisms. Any group at any rank is a <b>taxon</b> (plural <b>taxa</b>).</p>
      <p>The ranks, biggest to smallest: <b>Domain → Kingdom → Phylum → Class → Order → Family → Genus → Species</b>.</p>
      <ul><li>Mosses are a <b>phylum</b> of their own</li><li>Mammals and insects are <b>classes</b></li><li>Decapoda (crabs + lobsters) is an <b>order</b></li><li>Crabs (Brachyura) are an infraorder — <b>no main rank</b></li></ul>
      <p>Species is <span class="key">the only rank with a biological basis</span>; all others are human groupings.</p>`,
      hook: `<b>D</b>umb <b>K</b>ids <b>P</b>refer <b>C</b>heese <b>O</b>ver <b>F</b>ried <b>G</b>reen <b>S</b>pinach<br>(or the lecturer's: <b>D</b>ear <b>K</b>ing <b>P</b>hilip <b>C</b>ame <b>O</b>ver <b>F</b>or <b>G</b>ood <b>S</b>oup 🍲)`,
      why: "Expect “which rank…” or “which of these is a class/order” style items." },
    { id: "b-species", title: "What is a species?",
      body: `<p>The <b>biological species concept</b>: a species is a group that <span class="key">can produce fertile offspring</span> and is <span class="key">reproductively isolated</span> from other species.</p>
      <p>Writing tip: <b>sp.</b> = one species, <b>spp.</b> = several species.</p>
      <p>A <b>hybrid</b> is the offspring of two different species, often intermediate in looks. Example: <i>Nepenthes</i> × <i>hookeriana</i> = <i>N. rafflesiana</i> × <i>N. ampullaria</i>.</p>
      <p>Species is the <b>basic unit of biodiversity</b>.</p>`,
      hook: `Think of a species as a <b>“closed WhatsApp group for genes”</b>: members can share (fertile babies), outsiders can't get in (reproductive isolation).` },
    { id: "b-names", title: "Writing scientific names",
      body: `<p><b>Binomial nomenclature</b> = two-part name, e.g. <i>Amorphophallus prainii</i> Hook.f.</p>
      <ul><li><b>Genus</b> (generic epithet): <i>Italicised</i>, <b>Capitalised</b></li>
      <li><b>Specific epithet</b>: <i>italicised</i>, <b>NEVER capitalised</b></li>
      <li><b>Taxonomic authority</b> (botany, e.g. “Hook.f.”): Capitalised, <b>not</b> italicised</li>
      <li>Zoology often adds (Order: Family), e.g. <i>Anomala cupripes</i> (Coleoptera: Scarabaeidae) — capitalised, not italicised</li></ul>
      <p>Rules: <b>ICN</b> (algae, fungi, plants) and <b>ICZN</b> (animals).</p>
      <p><b>Common names</b> are ambiguous and inconsistent — “grouper/garoupa/kerapu” covers ~30 Serranidae species around Singapore.</p>`,
      hook: `<b>“Big Genus, small species”</b> — the genus wears the capital-letter hat; the species epithet is always lowercase, even if named after a place (<i>singaporensis</i>).` },
    { id: "b-describe", title: "Species descriptions, keys & collections",
      body: `<p>Species are described by taxonomists in <b>peer-reviewed journals</b>. A species description:</p>
      <ul><li>Assigns a <b>name</b></li><li>Gives a full description of the plant/animal's <b>characters</b></li><li>Clarifies how it <b>differs from its closest relatives</b></li><li>Notes on <b>ecology</b> (natural history)</li><li>Lists the <b>museum specimens examined</b></li></ul>
      <p>It does <b>not</b> record the full genome, nor tally the authors' other species.</p>
      <p><b>Dichotomous keys</b> identify taxa step by step — at every step only <b>two mutually exclusive choices</b>. Good keys are unambiguous and use multiple, easy-to-see characters.</p>
      <p>Reference collections: <b>Flora</b> → Singapore Botanic Gardens Herbarium. <b>Fauna</b> → Lee Kong Chian Natural History Museum (NUS).</p>`,
      hook: `A description is a <b>NAME-tag</b>: <b>N</b>ame, <b>A</b>ppearance (characters), <b>M</b>useum specimens, <b>E</b>cology… + how it differs from its look-alike cousins.`,
      why: "Mock Q1 asked what is NOT a purpose of a species description (genome record, tally of authors' species)." },
    { id: "b-biodiv", title: "What is biodiversity?",
      body: `<p>Biodiversity has two ingredients:</p>
      <ul><li><b>Richness</b> — how many species</li><li><b>Evenness</b> — how equally individuals are spread among species</li></ul>
      <p>Most diverse = high richness <b>and</b> high evenness. Least diverse = low richness and low evenness.</p>
      <p><b>Functional diversity</b> = variety of traits/roles, e.g. fish mouth position (superior, terminal, inferior) reflects feeding habits.</p>
      <p>Species are usually <b>strongly associated with certain habitats</b> (rainforest, mangrove, rocky shore) and occupy narrow niches within them.</p>`,
      hook: `A bag of sweets: 10 flavours (<b>richness</b>) but 95% are lemon → low <b>evenness</b>. A truly diverse bag has many flavours in fair amounts. 🍬` },
    { id: "b-hotspots", title: "Hotspots & Singapore's records",
      body: `<p><b>Biodiversity hotspots</b> = regions with <b>high endemic biodiversity AND high habitat loss/population growth</b> → high conservation importance. (Tropical wilderness areas: high endemism but low pressure.)</p>
      <p>The <b>Coral Triangle</b> (Singapore sits at its edge) covers only <b>1.6%</b> of ocean area but holds <b>76%</b> of zooxanthellate coral species, <b>37%</b> of reef fishes and <b>6 of 7</b> sea turtle species.</p>
      <p>Singapore's bragging rights:</p>
      <ul><li><b>Highest ant diversity in the world</b> (recorded)</li><li><b>Highest density of plant (herbarium) collections</b> in the world</li><li>Very high recorded biodiversity for its size — and species (re)discovery rates have <b>increased</b> recently</li></ul>
      <p>Why so diverse? <b>Equatorial</b>, hot & wet (high-energy system), <b>lowland</b>, and <b>well connected to mainland Asia</b>.</p>`,
      hook: `Hotspot = <b>“Hot” (under threat) + “Spot” (special endemics)</b> — it needs BOTH.<br>Coral Triangle numbers: <b>1.6 → 76 → 37 → 6/7</b> (“tiny area, huge share”).` },
    { id: "b-numbers", title: "How many species does Singapore have?",
      body: `<p>Approximate native species counts (Red Data Book 2024; * = loose estimate):</p>
      <div class="tablewrap"><table class="t"><tr><th>Group</th><th>Species</th></tr>
      <tr><td>Plants (angiosperms, gymnosperms, ferns)</td><td><b>~1,800</b></td></tr>
      <tr><td>Mammals</td><td><b>67</b></td></tr><tr><td>Birds</td><td><b>~360 native</b> (≈430 recorded incl. visitors)</td></tr>
      <tr><td>Amphibians / Reptiles</td><td><b>31 / 135</b></td></tr><tr><td>Insects</td><td>~10,000*</td></tr>
      <tr><td>Arachnids</td><td>~1,000*</td></tr><tr><td>Freshwater fish / crustaceans</td><td>35 / 23</td></tr>
      <tr><td>Marine molluscs</td><td>1,264</td></tr><tr><td>Marine fish</td><td>730</td></tr></table></div>
      <p>Numbers change constantly — guest lecturers may quote newer figures.</p>`,
      hook: `Remember the shape, not every digit: <b>plants ≈ 2k</b>, <b>birds ≈ 400</b>, <b>mammals ≈ 70</b>, <b>frogs ≈ 30</b>, <b>reptiles ≈ 135</b>, <b>insects ≈ 10k+</b>.`,
      why: "Number questions use round options (e.g., birds to the nearest 50). Know the ballpark." },
    { id: "b-native", title: "Native, endemic, exotic… invasive",
      body: `<ul><li><b>Native</b> (indigenous): found naturally in an area</li>
      <li><b>Endemic</b>: found <b>ONLY</b> in that area</li>
      <li><b>Exotic</b> (alien, non-native): not native. Exotics can be:
        <ul><li><b>Casual</b> — survive but don't reproduce</li><li><b>Naturalised</b> — survive <b>and reproduce</b> (self-sustaining)</li><li><b>Invasive</b> — survive, reproduce, <b>spread and cause harm</b></li></ul></li></ul>
      <p>Invasive examples in Singapore: <i>Miconia crenata</i> (syn. <i>Clidemia hirta</i>, a shrub) and <i>Paratrechina longicornis</i> (longhorn crazy ant).</p>`,
      hook: `Exotic ladder <b>C → N → I</b>: “<b>C</b>an't breed, <b>N</b>ow breeds, <b>I</b>nvades.” Each step adds one ability.`,
      why: "Status words (native, naturalised, invasive) appear constantly in habitat and species questions." },
    { id: "b-naturalhistory", title: "Natural history & naturalists",
      body: `<p><b>Natural history</b> = the study of species in their natural environments: how they interact with their surroundings and other species. Descriptive, observational, “old-school” science.</p>
      <p>Past naturalists were often Western aristocrats/academics (e.g., <b>Alfred Russel Wallace</b> and his assistant <b>Ali</b>, statue at LKCNHM). Today, many experts are <b>amateurs</b>:</p>
      <ul><li>Beetles — Cheong Loong Fah (electrical engineering prof)</li><li>Spiders — Joseph Koh (diplomat)</li><li>Stick & leaf insects — Francis Seow-Choen (colorectal surgeon)</li></ul>
      <p><b>Citizen science</b>: phone photos + platforms like <b>iNaturalist</b> and Flickr; biodiversity records in <i>Nature in Singapore</i> archive new knowledge.</p>`,
      hook: `You don't need a PhD — a <b>surgeon</b> studies stick insects and a <b>diplomat</b> studies spiders. A phone camera makes YOU a naturalist too.` },
    { id: "b-conserve", title: "Red lists and CITES",
      body: `<p><b>IUCN Red List</b> = global threat assessment (IUCN = International Union for Conservation of Nature).</p>
      <p><b>Singapore Red Data Book (RDB)</b> = <b>national</b> threat status. Latest: <b>3rd edition (2024)</b>, online. It does <b>not</b> assess all groups; amateurs contribute too.</p>
      <p>Categories you'll see: <span class="st st-CR">CR</span> <span class="st st-EN">EN</span> <span class="st st-VU">VU</span> <span class="st st-NT">NT</span> <span class="st st-LC">LC</span> <span class="st st-DD">DD</span> <span class="st st-NEx">NEx</span> (nationally extinct).</p>
      <p><b>CITES</b> = treaty regulating international wildlife trade:</p>
      <ul><li><b>Appendix I</b> — trade NOT allowed (e.g., hawksbill turtle, Sunda pangolin)</li><li><b>Appendix II</b> — permits needed (hard)</li><li><b>Appendix III</b> — permits, easier</li></ul>
      <p>Singapore is an important <b>node in illegal wildlife trafficking</b>, but CITES does little for Singapore's own wildlife, which isn't heavily harvested for trade.</p>`,
      hook: `CITES appendices go <b>1 = No, 2 = Tough, 3 = Easier</b>. A national status can be scarier than the global one — local populations are tiny.`,
      why: "Don't confuse IUCN (global) with RDB (national, Singapore)." },
    { id: "b-dont", title: "Nature reserve rules & who to call",
      body: `<p>Singapore has <b>4 nature reserves</b>: Central Catchment (CCNR), Bukit Timah (BTNR), Sungei Buloh Wetland, Labrador — plus ~24 nature areas.</p>
      <p><b>Nature reserve DON'Ts</b>:</p>
      <ul><li>Don't leave the trail (trampling kills seedlings)</li><li>Don't handle animals</li><li>Don't litter — even biodegradable trash</li><li>Don't leave rocks/wood overturned</li><li>Don't take anything — even fallen seeds/fruits</li></ul>
      <p><b>Wildlife help</b>: ACRES Wildlife Rescue <b>9783 7782</b>; NParks 24h Animal Response Centre <b>1800 476 1600</b>; LKCNHM <b>Dead Bird Hotline 9876 4997</b> / @deadbirdhotline.</p>`,
      hook: `“<b>Stay, Don't Touch, Leave No Trace, Put It Back, Take Nothing</b>” — five fingers, five rules ✋.` },
  ],
  questions: [
    { id: "b1", lesson: "b-ranks", q: "Which taxonomic rank is the only one with a biological basis?", options: ["Genus", "Family", "Species", "Order"], answer: [2], explain: "Species are defined biologically (interbreeding, reproductive isolation). All other ranks are human groupings." },
    { id: "b2", lesson: "b-ranks", q: "Arrange from largest to smallest: Order, Class, Family, Phylum", options: ["Phylum → Class → Order → Family", "Class → Phylum → Order → Family", "Phylum → Order → Class → Family", "Order → Class → Phylum → Family"], answer: [0], explain: "D-K-<b>P-C-O-F</b>-G-S: Dumb Kids <b>Prefer Cheese Over Fried</b> Green Spinach." },
    { id: "b3", lesson: "b-ranks", q: "Mammals and insects are both examples of which rank?", options: ["Phylum", "Class", "Order", "Family"], answer: [1], explain: "Mammalia and Insecta are classes. Decapoda is an order; mosses are a phylum." },
    { id: "b4", lesson: "b-ranks", q: "What is a “taxon”?", options: ["Only the species level", "Any taxonomic grouping, regardless of rank", "A group of genera only", "A taxonomic authority"], answer: [1], explain: "Taxon (pl. taxa) = any group at any rank." },
    { id: "b5", lesson: "b-species", q: "Under the biological species concept, a species is a group that… <i>(select all that apply)</i>", options: ["Can produce fertile offspring", "Is reproductively isolated from other species", "Always looks identical", "Lives in the same habitat"], answer: [0, 1], explain: "Fertile offspring + reproductive isolation. Appearance and habitat aren't the definition (variation exists within species)." },
    { id: "b6", lesson: "b-species", q: "A hybrid is…", options: ["A subspecies", "The offspring of two different species", "An invasive species", "A cultivated variety"], answer: [1], explain: "e.g., <i>Nepenthes</i> × <i>hookeriana</i> from <i>N. rafflesiana</i> × <i>N. ampullaria</i> — often intermediate in looks." },
    { id: "b7", lesson: "b-names", q: "Which is the correctly written scientific name?", options: ["<i>Nephila Pilipes</i>", "<i>nephila pilipes</i>", "<i>Nephila pilipes</i>", "Nephila <i>pilipes</i>"], answer: [2], explain: "Genus italic + Capitalised; specific epithet italic + never capitalised." },
    { id: "b8", lesson: "b-names", q: "In “<i>Amorphophallus prainii</i> Hook.f.”, what is “Hook.f.”?", options: ["The specific epithet", "The taxonomic authority", "The family", "A subspecies"], answer: [1], explain: "Botanical authority: capitalised, NOT italicised." },
    { id: "b9", lesson: "b-names", q: "Why are common names unreliable? <i>(select all that apply)</i>", options: ["They are ambiguous", "They are often misapplied", "One name can cover many species", "They must be italicised"], answer: [0, 1, 2], explain: "“Grouper/kerapu” covers ~30 species around Singapore. Common names are never italicised." },
    { id: "b10", lesson: "b-names", q: "Which code governs the names of animals?", options: ["ICN", "ICZN", "CITES", "IUCN"], answer: [1], explain: "ICZN = International Code of Zoological Nomenclature. ICN covers algae, fungi and plants." },
    { id: "b11", lesson: "b-describe", q: "Which of these IS part of a species description? <i>(select all that apply)</i>", options: ["List of museum specimens examined", "How it differs from its closest relatives", "Notes on ecology", "The species' complete genome"], answer: [0, 1, 2], explain: "Genome records are not part of a species description." },
    { id: "b12", lesson: "b-describe", q: "At each step of a dichotomous key you get…", options: ["As many options as needed", "Exactly two mutually exclusive alternatives", "A photo to match", "Three choices"], answer: [1], explain: "Di-chotomous = cut in two." },
    { id: "b13", lesson: "b-describe", q: "Where are Singapore's reference collections of fauna (animals) kept?", options: ["Singapore Botanic Gardens Herbarium", "Lee Kong Chian Natural History Museum", "Sungei Buloh", "NParks HQ"], answer: [1], explain: "Animals → LKCNHM (NUS). Plants → SBG Herbarium." },
    { id: "b14", lesson: "b-biodiv", q: "Which community is MOST diverse?", options: ["Low richness, low evenness", "Low richness, high evenness", "High richness, low evenness", "High richness, high evenness"], answer: [3], explain: "Diversity rises with both richness and evenness." },
    { id: "b15", lesson: "b-biodiv", q: "Evenness describes…", options: ["The number of species", "How equally individuals are spread among species", "The number of habitats", "Body size variation"], answer: [1], explain: "Richness = how many species; evenness = how balanced their abundances are." },
    { id: "b16", lesson: "b-hotspots", q: "A biodiversity hotspot must have… <i>(select all that apply)</i>", options: ["High concentrations of endemic species", "High population growth or habitat loss", "Cold climate", "Low species richness"], answer: [0, 1], explain: "Endemism + threat. Wilderness areas have endemism but low threat." },
    { id: "b17", lesson: "b-hotspots", q: "The Coral Triangle covers ~1.6% of the ocean but contains about what share of zooxanthellate coral species?", options: ["16%", "37%", "50%", "76%"], answer: [3], explain: "76% of corals, 37% of reef fishes, 6 of 7 sea turtle species." },
    { id: "b18", lesson: "b-hotspots", q: "Singapore holds which world record?", options: ["Most bird species per km²", "Highest recorded ant diversity", "Most endemic mammals", "Largest coral reef"], answer: [1], explain: "Singapore has the highest recorded ant diversity in the world (other tropical countries less studied) — and the densest plant collections." },
    { id: "b19", lesson: "b-hotspots", q: "Why is Singapore's biodiversity expected to be high? <i>(select all that apply)</i>", options: ["Equatorial, hot and wet", "Well connected to mainland Asia", "Lowland", "Very high mountains"], answer: [0, 1, 2], explain: "Singapore is lowland, so no mountains." },
    { id: "b20", lesson: "b-numbers", q: "Roughly how many native plant species does Singapore have?", options: ["180", "800", "1,800", "18,000"], answer: [2], explain: "~1,800 (≈120 ferns & allies, 8 gymnosperms, 1,600+ angiosperms)." },
    { id: "b21", lesson: "b-numbers", q: "Roughly how many native mammal species does Singapore have?", options: ["17", "67", "167", "670"], answer: [1], explain: "67 mammals (RDB 2024)." },
    { id: "b22", lesson: "b-native", q: "An exotic species that survives AND reproduces (self-sustaining) but isn't causing harm is…", options: ["Casual", "Naturalised", "Invasive", "Endemic"], answer: [1], explain: "Casual = survives only; Naturalised = + reproduces; Invasive = + spreads & harms." },
    { id: "b23", lesson: "b-native", q: "“Endemic” means a species is…", options: ["Found naturally in an area", "Found ONLY in that area", "Introduced by humans", "Threatened"], answer: [1], explain: "Native = occurs naturally; endemic = occurs nowhere else." },
    { id: "b24", lesson: "b-native", q: "Which are examples of invasive species in Singapore given in lecture? <i>(select all that apply)</i>", options: ["<i>Miconia crenata</i>", "<i>Paratrechina longicornis</i>", "<i>Adinandra dumosa</i>", "<i>Nepenthes gracilis</i>"], answer: [0, 1], explain: "Adinandra and Nepenthes are native." },
    { id: "b25", lesson: "b-naturalhistory", q: "Natural history is best described as…", options: ["Lab-based molecular biology", "The study of species and their natural environments and interactions", "History of museums", "Mathematical modelling"], answer: [1], explain: "Descriptive, observational science of how species live." },
    { id: "b26", lesson: "b-conserve", q: "The Singapore Red Data Book assesses…", options: ["Global threat status of all species", "National threat status, not all taxonomic groups", "Trade permits", "Only plants"], answer: [1], explain: "RDB = national. IUCN Red List = global." },
    { id: "b27", lesson: "b-conserve", q: "Under CITES, Appendix I species…", options: ["Can be traded with easy permits", "Need hard-to-get permits", "Cannot be traded internationally (commercially)", "Are not threatened"], answer: [2], explain: "App. I = cannot; II = permits (hard); III = permits (easier). Sunda pangolin & hawksbill turtle are App. I." },
    { id: "b28", lesson: "b-conserve", q: "Why does CITES do little to protect Singapore's own wildlife?", options: ["Singapore isn't a member", "Singapore's wildlife isn't extensively harvested for trade", "CITES only covers plants", "All Singapore species are LC"], answer: [1], explain: "CITES regulates trade; the main threats to Singapore's wildlife are habitat-related. (Singapore IS a trafficking node though.)" },
    { id: "b29", lesson: "b-dont", q: "Which are nature reserve “don'ts”? <i>(select all that apply)</i>", options: ["Taking fallen seeds home", "Leaving biodegradable trash", "Leaving the trail", "Taking photos"], answer: [0, 1, 2], explain: "Take nothing (even seeds), leave nothing, stay on trails. Photos are fine!" },
    { id: "b30", lesson: "b-dont", q: "Which of these is NOT one of Singapore's four nature reserves?", options: ["Central Catchment", "Bukit Timah", "Sungei Buloh Wetland", "Western Catchment"], answer: [3], explain: "Western Catchment is called a “nature reserve” informally but isn't one. The 4th is Labrador NR." },
    { id: "b31", lesson: "b-dont", q: "Not removing rocks and wood, or turning them back, matters because…", options: ["They are heavy", "They are microhabitats for many animals", "They are illegal to touch", "They contain fossils"], answer: [1], explain: "Overturned rocks/logs destroy shelter for invertebrates, herps etc." },
    { id: "b32", lesson: "b-species", type: "tf", q: "True or false: “spp.” refers to a single species.", options: ["True", "False"], answer: [1], keepOrder: true, explain: "sp. = one species; spp. = several." },
  ],
  cards: [
    { id: "bc1", front: `<div class="big">Taxonomic ranks (largest → smallest)?</div>`, back: `Domain, Kingdom, Phylum, Class, Order, Family, Genus, Species<br><small>Dumb Kids Prefer Cheese Over Fried Green Spinach</small>` },
    { id: "bc2", front: `<div class="big">Casual vs Naturalised vs Invasive?</div>`, back: `Casual: survive only · Naturalised: + reproduce · Invasive: + spread & harm` },
    { id: "bc3", front: `<div class="big">Hotspot = ?</div>`, back: `High endemic biodiversity AND high habitat loss / population growth` },
    { id: "bc4", front: `<div class="big">CITES Appendix I / II / III</div>`, back: `I: cannot trade · II: permits (hard) · III: permits (easier)` },
    { id: "bc5", front: `<div class="big">IUCN Red List vs Singapore RDB</div>`, back: `IUCN = global status. RDB (3rd ed. 2024) = national status, not all groups assessed.` },
    { id: "bc6", front: `<div class="big">Coral Triangle stats</div>`, back: `1.6% of ocean · 76% coral spp · 37% reef fish · 6/7 sea turtles` },
    { id: "bc7", front: `<div class="big">Two Singapore world records</div>`, back: `Highest recorded ant diversity · highest density of plant collections` },
    { id: "bc8", front: `<div class="big">Wildlife hotlines</div>`, back: `ACRES 9783 7782 · NParks 1800 476 1600 · Dead Bird Hotline 9876 4997` },
    { id: "bc9", front: `<div class="big">Writing a binomial</div>`, back: `<i>Genus species</i> — both italic; Genus capitalised, epithet never.` },
  ],
  cheatsheet: `<ul>
    <li><b>Ranks:</b> D-K-P-C-O-F-G-S. Species = only rank with biological basis. Mammals/insects = classes; Decapoda = order; mosses = phylum.</li>
    <li><b>Species</b> = fertile offspring + reproductively isolated. Hybrid = offspring of 2 species.</li>
    <li><b>Binomial:</b> <i>Genus</i> capitalised italic, <i>epithet</i> lowercase italic; authority not italic. ICN plants/fungi/algae, ICZN animals.</li>
    <li><b>Species description:</b> name, characters, differences from relatives, ecology, specimens examined.</li>
    <li><b>Dichotomous key:</b> 2 mutually exclusive choices per step.</li>
    <li><b>Biodiversity</b> = richness + evenness (+ functional diversity).</li>
    <li><b>Hotspot</b> = endemism + threat. Coral Triangle 1.6% / 76% / 37% / 6 of 7 turtles.</li>
    <li><b>SG records:</b> most ants, densest plant collections. Equatorial, lowland, connected.</li>
    <li><b>Native/endemic/exotic</b>; exotic: casual → naturalised → invasive.</li>
    <li><b>IUCN</b> (global) vs <b>RDB3 2024</b> (national). <b>CITES</b> I/II/III.</li>
    <li><b>4 NRs:</b> CCNR, BTNR, Sungei Buloh, Labrador.</li></ul>`,
});
