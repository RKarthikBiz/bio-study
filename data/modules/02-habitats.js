window.MODULES = window.MODULES || [];
MODULES.push({
  id: "habitats", emoji: "🌳", title: "Terrestrial Habitats", short: "Habitats",
  blurb: "Primary vs secondary forest, scrublands, how succession works in Singapore, and the six plants that define each habitat.",
  source: "Lecture 2 — Terrestrial habitat types (the lecturer's “most important lecture”)",
  lessons: [
    { id: "h-why", title: "Why habitats matter so much",
      body: `<p>The lecturer called this “the most difficult… but also the most important” lecture. Why?</p>
      <ul><li>Most species are <b>strongly tied to one or a few habitat types</b></li>
      <li>Many traits that separate species are <b>adaptations to their habitat</b></li>
      <li>Habitat diversity, history, extent and connectivity decide <b>community composition, endemism and extinction risk</b></li></ul>
      <p>Examples: hornbills need tropical rainforest (year-round large fruits → big bill; big trees to nest). Geckos are super-diverse in isolated <b>limestone karsts</b>.</p>
      <p>Plants are the foundation: they provide food, biotic interactions, and <b>structure</b> that creates habitat and buffers harsh conditions.</p>`,
      hook: `Habitat is the species' <b>address</b>. In this course, knowing the address IS knowing the animal. 🏠` },
    { id: "h-types", title: "The habitat map: closed vs open canopy",
      img: "img/sp/h-btnr.jpg", cap: "Bukit Timah Nature Reserve — closed-canopy forest",
      body: `<p>Memorise this two-column map:</p>
      <div class="tablewrap"><table class="t"><tr><th>🌲 Closed-canopy forest</th><th>☀️ Open-canopy vegetation</th></tr>
      <tr><td><b>Primary forests</b><br>• Lowland / coastal hill dipterocarp forest<br>• Freshwater swamp forest<br><br><b>Secondary forests</b><br>• Native species-dominated forest (NSDF)<br>• Exotic species-dominated forest (ESDF)<br>• Abandoned plantations (AP)</td>
      <td>• Elephant grass-dominated scrubland (EGDS)<br>• Resam fern-dominated scrubland (RDS)<br>• Urban turfs<br>• Other scrublands</td></tr></table></div>
      <p>⚠️ <b>Resam scrubland is OPEN canopy; exotic-dominated forest is CLOSED canopy.</b> Neither is “both”.</p>`,
      hook: `<b>Forest = roof, Scrub = sky.</b> If you could see the sky through it, it's open-canopy (scrubland/turf).`,
      why: "Mock Q16 tested exactly this: RDS (open) vs ESDF (closed forest)." },
    { id: "h-succession", title: "Succession & climax communities",
      body: `<p><b>(Secondary) succession</b> = natural, gradual change in community composition over time after disturbance. In the ever-wet tropics, <span class="key">everything becomes forest eventually</span>.</p>
      <p>The final stage is the <b>climax community</b> (“old growth”, “late successional”, “primary”). Examples: coral reefs, lowland dipterocarp forests, boreal forests, arctic tundra. A climax community is <b>not necessarily woody</b>.</p>
      <p>Natural disturbances: <b>large-scale</b> (landslides) and <b>small-scale</b> (treefalls, windthrows).</p>
      <p>What creates our habitat types?</p>
      <ul><li><b>Primary forest types</b> differ because of <b>abiotic site factors</b> (geography)</li>
      <li><b>Secondary forests</b>: created by past direct human actions (clearing), maintained by <b>dispersal limitation</b></li>
      <li><b>Open-canopy vegetation</b>: created by direct human action; maintained by dispersal/recruitment barriers and biotic interactions</li></ul>`,
      hook: `Think of a <b>forest staircase</b>: cleared land climbs step by step toward the top floor (climax forest). In Singapore some staircases are <b>broken</b> (soil, no seeds) so forests get stuck mid-way.` },
    { id: "h-diptero", title: "Dipterocarps: kings of the canopy",
      img: "img/sp/h-dipterocarp.jpg",
      body: `<p><b>Dipterocarpaceae</b>:</p>
      <ul><li>Slow-growing, long-lived trees — <b>dominant canopy species across Southeast Asia</b></li>
      <li>22 genera, ~700 species; biggest genera <i>Dipterocarpus</i>, <i>Shorea</i>, <i>Hopea</i></li>
      <li>High-quality timber → populations decimated by logging</li>
      <li>Flower and fruit together once every few years: <b>general flowering / masting</b></li>
      <li>Winged fruits (“dipterocarp” = two-winged fruit)</li></ul>
      <p>Dipterocarp forests are structurally complex, <b>dark and easy to walk through</b> (dense canopy shades out undergrowth).</p>`,
      hook: `<b>Di-ptero-carp</b> = “two-wing fruit” 🪁 — like a shuttlecock spinning down. And they <b>mast</b> = everyone flowers at once, like a surprise party every few years.` },
    { id: "h-primary", title: "Primary forests",
      body: `<p><b>Primary forest</b> = original/primeval cover. Climax communities with <b>high competition, few vacant niches</b> → resistant to invasion; <b>extremely high diversity</b>.</p>
      <p>Three main types in Singapore (decided mainly by geography/abiotic factors):</p>
      <ul><li><b>Lowland dipterocarp forest</b> (red meranti–keruing) and <b>coastal hill dipterocarp forest</b> (seraya-ridge)</li><li><b>Freshwater swamp forest</b> (Nee Soon, CCNR)</li><li><b>Mangrove forest</b></li></ul>
      <p>Where: <b>BTNR</b> = coastal hill dipterocarp forest; <b>CCNR</b> = lowland dipterocarp + freshwater swamp forest; <b>Sungei Buloh</b> = mangrove; <b>Labrador</b> = coastal secondary forest, mangrove, rocky shore.</p>
      <p>Forest layers: forest floor (shade-tolerant monocots: palms, aroids, gingers) → sub-canopy → canopy & emergents (dipterocarps) + climbers (lianas, rattans) and epiphytes (ferns, figs, orchids).</p>
      <p><b>Threats</b>: patches are well protected, so the big threats are <b>reproductive & recruitment barriers</b> and <b>increased big-tree mortality</b>.</p>`,
      hook: `<b>B</b>TNR = <b>B</b>ukit = hill → coastal <b>hill</b> dipterocarp. <b>C</b>CNR = <b>C</b>atchment = water → <b>swamp</b> forest + lowland dipterocarp.`,
      why: "Threat questions: primary forest = recruitment barriers & big tree death, NOT development (they're protected)." },
    { id: "h-path", title: "After clearing: the two roads",
      body: `<p>After plantations/clear-felling, the path depends on <b>soil</b> and <b>seed dispersal</b>:</p>
      <ul><li>Natural soils are <b>acidic and nutrient-poor</b>. On depleted, isolated sites → <b>resam fern scrubland → Adinandra belukar → native species-dominated forest (NSDF)</b> 🌿 the “native road”</li>
      <li>On <b>modified soils</b> (nutrient-rich foreign fill, backfilling) → <b>exotic species-dominated scrub & forest (ESDF)</b> 🌴 the “exotic road”</li>
      <li><b>Abandoned plantations</b> near reserves → gradually turn into NSDF</li></ul>
      <p>These are <b>gradual transitions, not neat boxes</b>. Forest succession in Singapore is <b>very slow</b> — possibly due to species that hinder it (resam), low propagule (seed) pressure, and altered below-ground processes.</p>`,
      hook: `<b>Poor soil → Native road. Rich (dumped) soil → Exotic road.</b><br>Counter-intuitive: the natives win on <i>bad</i> soil because they're adapted to it.` },
    { id: "h-rds", title: "Resam fern scrubland (RDS)",
      img: "img/sp/dicranopteris.jpg", cap: "Resam fern, Dicranopteris linearis",
      body: `<p><b>Resam fern</b> (<i>Dicranopteris linearis</i>, Gleicheniaceae) — <span class="st st-LC">native</span>:</p>
      <ul><li>Ground-creeping fern, tolerant of <b>nutrient-poor</b> soil</li><li>Dense thickets may <b>inhibit</b> other plants</li></ul>
      <p>RDS forms spontaneously on cleared, <b>not heavily modified</b> soils. Saplings recruit slowly into the fern, grow and <b>shade the ferns out</b> → RDS <span class="key">naturally transitions into native species-dominated forest</span>.</p>
      <p>As habitat: generally <b>low diversity</b>, but home to specialists — <i>Nepenthes</i> pitcher plants (and their crab spider!), native ground orchids (<i>Dendrobium lobii</i> CR), the CR fern <i>Dipteris conjugata</i>; useful patches for animals in the urban matrix; precursor to NSDF.</p>
      <p><b>Threats</b>: clearance for development, mowing/trampling, nutrient pollution & invasive species.</p>`,
      hook: `<b>Resam = Resting stage</b> on the native road. Pitcher plants love it because the soil is poor — they “eat” insects for nutrients.` },
    { id: "h-adinandra", title: "Adinandra belukar & NSDF",
      img: "img/sp/adinandra.jpg", cap: "Tiup tiup, Adinandra dumosa",
      body: `<p><b>Tiup tiup</b> (<i>Adinandra dumosa</i>, Pentaphylacaceae) — <span class="st st-LC">native</span>: slow-growing pioneer tree, tolerant of nutrient-poor soil, <b>thick waxy leaves with weakly serrated edges</b>, <b>bat-dispersed</b> fruits, unique flower buds.</p>
      <p><b>Adinandra belukar</b> (aka anthropogenic heath forest) = forest dominated by <i>A. dumosa</i> and other long-lived pioneers, forming on <b>nutrient-depleted soils + dispersal limitation</b> → <b>slowed (arrested) succession</b>. Patches near CCNR/BTNR follow normal succession; far ones stay stuck. Example: Kent Ridge Park.</p>
      <p>Adinandra belukar is a <b>special case of NSDF</b>: low plant diversity but relatively high animal diversity.</p>
      <p><b>NSDFs</b>: broad range of forest stages with <b>high plant and animal diversity</b> (e.g., endemic orchid <i>Nervilia singaporensis</i>). Generally well protected; threats = degradation at busy trails and edges, which helps invasives (e.g., <i>Dioscorea sansibarensis</i>, Zanzibar yam, smothering edge trees).</p>`,
      hook: `“<b>Tiup tiup</b>” = blow blow 🌬️ — the tree that keeps blowing on through bad soil. <b>Belukar</b> = Malay for secondary scrub-forest.` },
    { id: "h-esdf", title: "Exotic species-dominated forest (ESDF)",
      img: "img/sp/falcataria.jpg", cap: "Moluccan albizia, Falcataria falcata",
      body: `<p>Once called “<b>waste woodlands</b>” (no longer, due to negative connotation). A <b>recent (post-1960s)</b> phenomenon, dominated by <b>fast-growing invasive trees</b>:</p>
      <ul><li><b>Moluccan albizia</b> <i>Falcataria falcata</i> (Fabaceae) — <span class="st st-NA">invasive</span>, from the Maluku islands; one of the fastest-growing trees in the world; soft wood (matchsticks); <b>branch falls have caused injury and death</b>; has extrafloral nectaries</li>
      <li><b>African tulip</b> <i>Spathodea campanulata</i> (Bignoniaceae) — <span class="st st-NA">invasive</span>, from Africa; planted as ornamental; often forms the <b>subcanopy</b> of ESDFs</li>
      <li><i>Leucaena leucocephala</i> in coastal areas</li></ul>
      <p>Very fast growing, but <b>low carbon storage</b> and relatively low biodiversity. Minimal evidence they recover to native forest.</p>
      <p>Value: important for many animals, <b>especially large birds</b> (changeable hawk-eagle and white-bellied sea eagle nest in albizia), comparable invertebrate numbers to NSDF, rapid carbon accumulation, connectivity in the urban matrix.</p>
      <p><b>Threats</b>: clearance for development (low protection outside nature parks), selective felling, branches breaking easily.</p>`,
      hook: `<b>Albizia = “All-busy-a”</b>: grows super fast, but cheap wood → branches snap. 🌳💥<br><b>African tulip</b> = flaming orange tulip-like flowers under the albizia roof.` },
    { id: "h-egds", title: "Elephant grass scrub & Holland Plains",
      img: "img/sp/elephantgrass.jpg", cap: "Elephant grass, Cenchrus purpureus",
      body: `<p><b>Elephant grass</b> (<i>Cenchrus purpureus</i>) is exotic & naturalised. <b>EGDS</b> is associated with ESDFs (edges, waterlogged areas) but is <b>NOT a successional precursor</b> to ESDF. Low diversity, low conservation value.</p>
      <p><b>Holland Plains case study</b>: part was cleared and <b>backfilled in 2009</b> → ESDF (albizia) formed within 10 years; the unfilled part stayed as Adinandra belukar precursor vegetation. Proof that <b>soil modification switches the succession road</b>.</p>
      <p>History: <b>lalang</b> (<i>Imperata cylindrica</i>) fields were common, maintained by fire (government removed them). <b>Trema belukar</b> was common in the 1980s. Native <i>Glochidion</i> spp. (10 native, <b>8 CR</b>) were once common in open country — likely displaced by ESDF and EGDS.</p>`,
      hook: `Holland Plains = a natural experiment: <b>same place, different soil → different forest.</b> Fill → albizia; no fill → Adinandra.` },
    { id: "h-ap", title: "Abandoned plantations",
      img: "img/sp/hevea.jpg", cap: "Para rubber, Hevea brasiliensis",
      body: `<p>Canopy dominated by <b>relics of plantation history</b>:</p>
      <ul><li><b>Para rubber</b> <i>Hevea brasiliensis</i> (Euphorbiaceae) — <span class="st st-NA">naturalised</span>, the most common</li>
      <li><b>Oil palm</b> <i>Elaeis guineensis</i> (Arecaceae) — casual/naturalised</li>
      <li>Durian <i>Durio zibethinus</i> (naturalised/casual), rambutan (native but mostly cultivated), belinjau, gambir, gutta percha, cacao, ornamentals like <i>Dracaena fragrans</i></li></ul>
      <p>Sites near CCNR/BTNR have <b>many native saplings</b> in the understorey → <span class="key">unassisted succession to NSDF</span> (e.g., <i>Dipterocarpus kunstleri</i> saplings at Windsor).</p>
      <p>Value & threats: important animal habitat, potential to regenerate NSDF. Many lie <b>outside reserves → threatened by development</b>, and far ones may not regenerate unassisted. Same degradation threats as NSDF.</p>`,
      hook: `Abandoned plantation = <b>a kampung orchard the forest is slowly taking back.</b> 🥭 Rubber & oil palm are the old “furniture”; native saplings are the new tenants moving in.`,
      why: "Mock Q2: claiming non-natives ‘prevent recruitment’ is FALSE; durian isn't native." },
    { id: "h-six", title: "The six habitat-defining plants",
      body: `<div class="tablewrap"><table class="t"><tr><th>Plant</th><th>Status</th><th>Signature habitat</th></tr>
      <tr><td>Rubber <i>Hevea brasiliensis</i> (Euphorbiaceae)</td><td>Naturalised</td><td rowspan="2">Abandoned plantations</td></tr>
      <tr><td>Oil palm <i>Elaeis guineensis</i> (Arecaceae)</td><td>Casual/naturalised</td></tr>
      <tr><td>Moluccan albizia <i>Falcataria falcata</i> (Fabaceae)</td><td>Invasive</td><td rowspan="2">Exotic species-dominated forest</td></tr>
      <tr><td>African tulip <i>Spathodea campanulata</i> (Bignoniaceae)</td><td>Invasive</td></tr>
      <tr><td>Tiup tiup <i>Adinandra dumosa</i> (Pentaphylacaceae)</td><td>Native</td><td>Adinandra belukar (NSDF)</td></tr>
      <tr><td>Resam fern <i>Dicranopteris linearis</i> (Gleicheniaceae)</td><td>Native</td><td>Resam fern scrubland</td></tr></table></div>`,
      hook: `Pairs! <b>“Rubber & Oil”</b> = old farm. <b>“Albizia & Tulip”</b> = exotic forest (both invasive, both foreign — Maluku & Africa). <b>“Tiup & Resam”</b> = the native duo on poor soil.` },
    { id: "h-misc", title: "Marshes & reclaimed-land forests",
      img: "img/sp/casuarina.jpg", cap: "Rhu, Casuarina equisetifolia",
      body: `<p><b>Marshes</b>: waterlogged scrublands far from BTNR/CCNR. Not enough seed dispersal for swamp trees, and waterlogging kills intolerant trees → <b>grasses/sedges dominate</b>. Can be high conservation value (e.g., native carnivorous bladderwort <i>Utricularia gibba</i>) but often unprotected and slated for development.</p>
      <p><b>Reclaimed land forests</b>: ecological equivalent of ESDF on sandy marine soils of reclaimed/coastal land — except the native <b>Rhu</b> <i>Casuarina equisetifolia</i> often dominates, with <i>Leucaena leucocephala</i>. Low protection, low conservation value.</p>`,
      hook: `<b>Rhu = Reclaimed.</b> Sandy, salty, new land → the native Rhu (looks like a pine, isn't one).` },
    { id: "h-where", title: "Where to see each habitat",
      img: "img/sp/h-macritchie.jpg", cap: "MacRitchie Reservoir — inside CCNR",
      body: `<ul><li><b>BTNR</b>: primary & secondary coastal hill dipterocarp forest (+ NSDF)</li>
      <li><b>CCNR</b> (MacRitchie, Windsor): primary & secondary lowland dipterocarp forest, freshwater swamp forest, NSDF, abandoned plantations</li>
      <li><b>Sungei Buloh</b>: mangrove · <b>Labrador</b>: coastal secondary forest, mangrove, rocky shore</li>
      <li><b>Dairy Farm, Hindhede, Rifle Range</b> nature parks: ESDF, AP, NSDF</li>
      <li><b>Clementi forest</b>: ESDF + freshwater stream · <b>Kent Ridge Park</b>: Adinandra belukar + resam scrubland</li></ul>
      <p>Don't confuse <b>parks</b> (e.g., MacRitchie/Upper Peirce reservoir parks) with <b>nature reserves</b>. Western Catchment isn't actually a nature reserve.</p>
      <p><b>Heritage trees</b>: many primary forest trees survive in urban areas as relics.</p>`,
      hook: `<b>Kent Ridge = Kampung of poor soil</b> → resam + Adinandra. <b>Clementi = Clumps of exotics</b> (ESDF).` },
  ],
  species: [
    { id: "hevea", common: "Para rubber", sci: "Hevea brasiliensis", family: "Euphorbiaceae", group: "Habitat plant", status: "NA", where: "Abandoned plantations", fact: "Naturalised; the most common relic canopy tree of abandoned plantations", hook: "Rubber → plantations (think of old rubber estates)." },
    { id: "elaeis", common: "Oil palm", sci: "Elaeis guineensis", family: "Arecaceae", group: "Habitat plant", status: "NA", where: "Abandoned plantations", fact: "Casual/naturalised palm left over from plantation agriculture", hook: "Oil palm and rubber = the ‘old farm’ pair." },
    { id: "falcataria", common: "Moluccan albizia", sci: "Falcataria falcata", family: "Fabaceae", group: "Habitat plant", status: "NA", where: "Exotic species-dominated forests", fact: "Invasive, from the Maluku islands; one of the world's fastest-growing trees; brittle branches cause injury", hook: "Fast and fragile — eagles nest in it." },
    { id: "spathodea", common: "African tulip", sci: "Spathodea campanulata", family: "Bignoniaceae", group: "Habitat plant", status: "NA", where: "Exotic species-dominated forests", fact: "Invasive ornamental from Africa with orange tulip-like flowers; often forms the subcanopy of ESDFs", hook: "Orange ‘tulips’ under the albizia roof." },
    { id: "adinandra", common: "Tiup tiup", sci: "Adinandra dumosa", family: "Pentaphylacaceae", group: "Habitat plant", status: "", where: "Adinandra belukar (native species-dominated forests)", fact: "Native slow-growing pioneer tree with thick waxy, weakly serrated leaves and bat-dispersed fruits", hook: "Tiup tiup tolerates poor soil." },
    { id: "dicranopteris", common: "Resam fern", sci: "Dicranopteris linearis", family: "Gleicheniaceae", group: "Habitat plant", status: "", where: "Resam fern-dominated scrublands", fact: "Native ground-creeping fern of nutrient-poor cleared soils; dense thickets may inhibit other plants", hook: "Resam → rests before becoming native forest." },
  ],
  questions: [
    { id: "h1", lesson: "h-types", q: "Which of these are OPEN-canopy vegetation types? <i>(select all that apply)</i>", options: ["Resam fern-dominated scrubland", "Elephant grass-dominated scrubland", "Exotic species-dominated forest", "Urban turf"], answer: [0, 1, 3], explain: "ESDF is a closed-canopy secondary forest." },
    { id: "h2", lesson: "h-types", q: "Which of these are types of SECONDARY forest? <i>(select all that apply)</i>", options: ["Native species-dominated forest", "Abandoned plantation", "Freshwater swamp forest", "Exotic species-dominated forest"], answer: [0, 1, 3], explain: "Freshwater swamp forests are treated as primary forest in Singapore." },
    { id: "h3", lesson: "h-succession", q: "In the ever-wet tropics, succession left alone eventually leads to…", options: ["Grassland", "Forest", "Scrubland", "Marsh"], answer: [1], explain: "“Everything becomes forest eventually.”" },
    { id: "h4", lesson: "h-succession", q: "Which are examples of climax communities? <i>(select all that apply)</i>", options: ["Coral reefs", "Lowland dipterocarp forests", "Arctic tundra", "Elephant grass scrub"], answer: [0, 1, 2], explain: "Climax communities need not be woody. EGDS is a human-created open habitat." },
    { id: "h5", lesson: "h-diptero", q: "Dipterocarps flowering and fruiting synchronously once every few years is called…", options: ["Masting / general flowering", "Heteroblasty", "Deciduousness", "Phoresy"], answer: [0], explain: "General flowering (masting)." },
    { id: "h6", lesson: "h-diptero", q: "Which statements about Dipterocarpaceae are true? <i>(select all that apply)</i>", options: ["Slow-growing and long-lived", "Dominant canopy trees across Southeast Asia", "Fast-growing invasive pioneers", "Decimated by logging for timber"], answer: [0, 1, 3], explain: "Fast-growing invasive pioneer = albizia, not dipterocarps." },
    { id: "h7", lesson: "h-primary", q: "What are the BIGGEST threats to Singapore's primary forest patches?", options: ["Clearance for development", "Reproductive/recruitment barriers and increased big tree mortality", "Fire", "Poaching of timber"], answer: [1], explain: "Primary patches are well protected; their problems are recruitment barriers and dying big trees." },
    { id: "h8", lesson: "h-primary", q: "Which nature reserve contains primary freshwater swamp forest?", options: ["BTNR", "CCNR", "Labrador NR", "Sungei Buloh"], answer: [1], explain: "CCNR (Nee Soon swamp forest) — plus lowland dipterocarp forest." },
    { id: "h9", lesson: "h-primary", q: "BTNR's primary forest is mainly…", options: ["Mangrove", "Coastal hill dipterocarp forest", "Freshwater swamp forest", "Exotic forest"], answer: [1], explain: "Bukit = hill → coastal hill dipterocarp (seraya-ridge) forest." },
    { id: "h10", lesson: "h-primary", q: "Primary forests resist invasion because…", options: ["They are fenced", "Climax communities have high competition and few vacant niches", "They are on rich soil", "Invasive species can't reach Singapore"], answer: [1] , explain: "Few vacant niches → hard for newcomers to establish." },
    { id: "h11", lesson: "h-path", q: "Clearing a forest and backfilling with nutrient-rich foreign soil usually leads to…", options: ["Resam scrubland then NSDF", "Exotic species-dominated forest", "Primary forest", "Mangrove"], answer: [1], explain: "Soil modification → the exotic road (ESDF), e.g., Holland Plains." },
    { id: "h12", lesson: "h-path", q: "Natural soils in Singapore are generally…", options: ["Alkaline and rich", "Acidic and nutrient-poor", "Neutral and sandy", "Waterlogged everywhere"], answer: [1], explain: "Acidic & poor → natives adapted to it win." },
    { id: "h13", lesson: "h-path", q: "Possible reasons forest succession is so slow in Singapore: <i>(select all that apply)</i>", options: ["Species that hinder succession, like resam", "Low propagule (seed) pressure", "Altered below-ground processes", "Too little rainfall"], answer: [0, 1, 2], explain: "Rainfall is high and non-seasonal — not the limit." },
    { id: "h14", lesson: "h-rds", q: "Resam fern-dominated scrubland naturally transitions into…", options: ["Exotic species-dominated forest", "Native species-dominated forest", "Elephant grass scrub", "Mangrove"], answer: [1], explain: "Saplings recruit into the fern and shade it out → NSDF." },
    { id: "h15", lesson: "h-rds", q: "Which species are associated with resam scrublands? <i>(select all that apply)</i>", options: ["<i>Nepenthes</i> pitcher plants", "The pitcher plant crab spider", "Native ground orchids", "Moluccan albizia"], answer: [0, 1, 2], explain: "Albizia = ESDF." },
    { id: "h16", lesson: "h-rds", q: "Threats to resam-dominated scrubland include: <i>(select all that apply)</i>", options: ["Clearance for development", "Mowing and trampling", "Nutrient pollution and invasive species", "Masting failure"], answer: [0, 1, 2], explain: "Masting is a dipterocarp thing." },
    { id: "h17", lesson: "h-adinandra", q: "Adinandra belukar forms where…", options: ["Soil is nutrient-rich backfill", "Soils are nutrient-depleted and seed dispersal is limited", "Land is flooded by seawater", "Fires are frequent"], answer: [1], explain: "Nutrient depletion + isolation → slowed (arrested) succession." },
    { id: "h18", lesson: "h-adinandra", q: "Adinandra dumosa fruits are dispersed by…", options: ["Wind", "Water", "Bats", "Ants"], answer: [2], explain: "Bat-dispersed." },
    { id: "h19", lesson: "h-adinandra", q: "Compared with other NSDFs, Adinandra belukar has…", options: ["High plant and low animal diversity", "Low plant diversity but relatively high animal diversity", "No animals", "Highest plant diversity in Singapore"], answer: [1], explain: "Low plant diversity, relatively high animal diversity, potential to develop into NSDF." },
    { id: "h20", lesson: "h-esdf", q: "Which trees dominate exotic species-dominated forests? <i>(select all that apply)</i>", options: ["<i>Falcataria falcata</i>", "<i>Spathodea campanulata</i>", "<i>Adinandra dumosa</i>", "<i>Leucaena leucocephala</i> (coastal)"], answer: [0, 1, 3], explain: "Adinandra = native belukar." },
    { id: "h21", lesson: "h-esdf", q: "Exotic species-dominated forests are… <i>(select all that apply)</i>", options: ["Very fast growing", "Low in carbon storage", "Important for large birds", "Known to readily recover into NSDF"], answer: [0, 1, 2], explain: "Minimal evidence of recovery to native forest." },
    { id: "h22", lesson: "h-esdf", q: "Why is the Moluccan albizia considered dangerous in urban areas?", options: ["Toxic sap", "Branch falls have caused injury and death", "Thorns", "Allergenic pollen"], answer: [1], explain: "Low structural investment → branches break easily." },
    { id: "h23", lesson: "h-esdf", q: "ESDFs used to be called…", options: ["Waste woodlands", "Belukar", "Heath forest", "Kampung forest"], answer: [0], explain: "Name dropped due to negative connotation." },
    { id: "h24", lesson: "h-esdf", q: "Where does the African tulip originally come from?", options: ["Maluku islands", "Africa", "South America", "India"], answer: [1], explain: "Albizia → Maluku; African tulip → Africa." },
    { id: "h25", lesson: "h-egds", q: "Elephant grass-dominated scrubland is…", options: ["A successional precursor to ESDF", "Associated with ESDFs but NOT a precursor to them", "A primary habitat", "Of high conservation value"], answer: [1], explain: "Found at ESDF edges/waterlogged spots; low value." },
    { id: "h26", lesson: "h-egds", q: "At Holland Plains, the backfilled area became ___ within 10 years while unfilled land stayed ___.", options: ["NSDF; ESDF", "ESDF; Adinandra belukar precursor", "Mangrove; resam", "Marsh; ESDF"], answer: [1], explain: "Soil modification switched it to the exotic road." },
    { id: "h27", lesson: "h-egds", q: "Native <i>Glochidion</i> trees (8 of 10 species CR) declined mainly because…", options: ["Over-harvesting", "They were likely displaced by ESDFs and EGDS from open country", "Disease", "Climate change"], answer: [1], explain: "Once common in open country; now restricted to narrow niches in NSDFs." },
    { id: "h28", lesson: "h-ap", q: "The most common relic canopy tree in abandoned plantations is…", options: ["Oil palm", "Para rubber", "Durian", "Rambutan"], answer: [1], explain: "<i>Hevea brasiliensis</i>." },
    { id: "h29", lesson: "h-ap", q: "Abandoned plantations near CCNR/BTNR…", options: ["Never regenerate", "Often have many native saplings — unassisted succession to NSDF", "Turn into ESDF", "Become marshes"], answer: [1], explain: "e.g., <i>Dipterocarpus kunstleri</i> saplings at Windsor forest." },
    { id: "h30", lesson: "h-ap", q: "Durian (<i>Durio zibethinus</i>) in Singapore's forests is…", options: ["Native and endemic", "Naturalised/casual", "Critically endangered native", "Invasive"], answer: [1], explain: "Naturalised/casual — a plantation relic." },
    { id: "h31", lesson: "h-ap", q: "A common threat to BOTH exotic species-dominated forests and abandoned plantations is…", options: ["Clearing for development", "Masting failure", "Coral bleaching", "Poaching"], answer: [0], explain: "Both often lie outside protected areas." },
    { id: "h32", lesson: "h-six", q: "Match: which plant is the signature of resam fern-dominated scrubland?", options: ["<i>Dicranopteris linearis</i>", "<i>Adinandra dumosa</i>", "<i>Elaeis guineensis</i>", "<i>Spathodea campanulata</i>"], answer: [0], explain: "Resam fern = <i>Dicranopteris linearis</i> (Gleicheniaceae)." },
    { id: "h33", lesson: "h-six", q: "Which of the six habitat plants are NATIVE? <i>(select all that apply)</i>", options: ["Tiup tiup", "Resam fern", "Rubber", "African tulip"], answer: [0, 1], explain: "Rubber naturalised; African tulip invasive." },
    { id: "h34", lesson: "h-six", q: "Which of the six habitat plants are INVASIVE? <i>(select all that apply)</i>", options: ["Moluccan albizia", "African tulip", "Oil palm", "Resam fern"], answer: [0, 1], explain: "Oil palm casual/naturalised; resam native." },
    { id: "h35", lesson: "h-misc", q: "Why are marshes dominated by grasses and sedges rather than swamp trees?", options: ["Too much shade", "Too far from BTNR/CCNR for swamp tree seed dispersal, and waterlogging kills intolerant trees", "Salt water", "Fire"], answer: [1], explain: "Dispersal limitation + waterlogging." },
    { id: "h36", lesson: "h-misc", q: "Which native tree often dominates forests on reclaimed land?", options: ["<i>Casuarina equisetifolia</i>", "<i>Falcataria falcata</i>", "<i>Hevea brasiliensis</i>", "<i>Adinandra dumosa</i>"], answer: [0], explain: "Rhu — tolerant of salt spray, sandy and dry soils." },
    { id: "h37", lesson: "h-where", q: "Kent Ridge Park is a good place to see…", options: ["Mangroves", "Adinandra belukar and resam scrubland", "Primary dipterocarp forest", "Freshwater swamp forest"], answer: [1], explain: "Kent Ridge: AB + RDS (also slender pitcher plants)." },
    { id: "h38", lesson: "h-where", q: "Which statement is correct?", options: ["Western Catchment is one of the 4 nature reserves", "Labrador has coastal secondary forest, mangrove and rocky shore", "Sungei Buloh is a dipterocarp forest", "Clementi forest is primary forest"], answer: [1], explain: "Labrador NR. Sungei Buloh = mangrove; Clementi = ESDF + stream." },
    { id: "h39", lesson: "h-types", type: "tf", q: "True or false: Both resam fern scrublands and exotic species-dominated forests are open-canopy habitats.", options: ["True", "False"], answer: [1], keepOrder: true, explain: "ESDF is closed-canopy forest." },
  ],
  cards: [
    { id: "hc1", front: `<div class="big">Native road vs exotic road after clearing?</div>`, back: `Poor, unmodified soil → resam → Adinandra belukar → NSDF.<br>Modified, nutrient-rich soil → ESDF (albizia, African tulip).` },
    { id: "hc2", front: `<div class="big">3 primary forest types in SG</div>`, back: `Lowland/coastal hill dipterocarp · freshwater swamp · mangrove` },
    { id: "hc3", front: `<div class="big">Threats to primary forest</div>`, back: `Reproductive & recruitment barriers; increased big tree mortality` },
    { id: "hc4", front: `<div class="big">Threats to ESDF & abandoned plantations</div>`, back: `Clearance for development (low protection), selective felling` },
    { id: "hc5", front: `<div class="big">BTNR vs CCNR forest types</div>`, back: `BTNR: coastal hill dipterocarp. CCNR: lowland dipterocarp + freshwater swamp forest.` },
    { id: "hc6", front: `<div class="big">Holland Plains lesson</div>`, back: `Backfilled (2009) → ESDF in &lt;10 yrs; unfilled → Adinandra belukar precursor` },
    { id: "hc7", front: `<div class="big">EGDS — precursor to ESDF?</div>`, back: `No. Associated (edges, waterlogged), but not a precursor. Low value.` },
  ],
  cheatsheet: `<ul>
    <li><b>Closed canopy:</b> primary (dipterocarp, swamp) + secondary (NSDF, ESDF, AP). <b>Open:</b> EGDS, RDS, turf, other scrub.</li>
    <li><b>Primary</b>: abiotic factors; high competition, invasion-resistant; threats = recruitment barriers, big tree mortality.</li>
    <li><b>Dipterocarps</b>: slow, long-lived, dominant canopy, masting, timber; dark & easy-to-walk forest.</li>
    <li><b>Native road</b>: poor soil → RDS → Adinandra belukar → NSDF. <b>Exotic road</b>: modified soil → ESDF.</li>
    <li><b>RDS</b>: resam, pitcher plants, ground orchids; → NSDF. Threats: development, mowing, nutrients/invasives.</li>
    <li><b>AB</b>: tiup tiup, bat-dispersed; low plant/high animal diversity. NSDF: high diversity; edge degradation.</li>
    <li><b>ESDF</b>: albizia (Maluku), African tulip (Africa), Leucaena; fast, low C storage, big birds; threats: development.</li>
    <li><b>EGDS</b>: not a precursor of ESDF. <b>AP</b>: rubber, oil palm; native saplings → NSDF.</li>
    <li><b>Marsh</b>: grasses/sedges. <b>Reclaimed land</b>: Rhu + Leucaena.</li>
    <li><b>Where:</b> BTNR CHDF · CCNR LDF+FSF · SBWR mangrove · Labrador coastal · Kent Ridge AB+RDS · Clementi ESDF.</li></ul>`,
});
