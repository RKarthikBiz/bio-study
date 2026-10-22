#!/usr/bin/env python3
"""Download study photos into img/. Species via iNaturalist taxa API, scenes via Wikipedia.

Usage: python3 tools/fetch_images.py   (skips files that already exist)
"""
import json, os, subprocess, sys, time, urllib.parse, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "img")
UA = {"User-Agent": "bio-study-app/1.0 (personal study tool)"}

# id -> iNaturalist search name
SPECIES = {
    # plants: habitat dominants
    "hevea": "Hevea brasiliensis", "elaeis": "Elaeis guineensis", "falcataria": "Falcataria moluccana",
    "spathodea": "Spathodea campanulata", "adinandra": "Adinandra dumosa", "dicranopteris": "Dicranopteris linearis",
    # plants: 10 must-know
    "platycerium": "Platycerium coronarium", "grammatophyllum": "Grammatophyllum speciosum",
    "nypa": "Nypa fruticans", "tacca": "Tacca integrifolia", "nepenthes": "Nepenthes gracilis",
    "macaranga": "Macaranga bancana", "sterculia": "Sterculia macrophylla", "dipterocarpus": "Dipterocarpus",
    "casuarina": "Casuarina equisetifolia", "gnetum": "Gnetum gnemon",
    "elephantgrass": "Cenchrus purpureus", "durian": "Durio zibethinus", "miconia": "Miconia crenata",
    # amphibians
    "asiantoad": "Duttaphrynus melanostictus", "fourridgedtoad": "Ingerophrynus quadriporcatus",
    "fourlined": "Polypedates leucomystax", "cinnamonfrog": "Nyctixalus pictus", "hornedfrog": "Pelobatrachus nasutus",
    # reptiles
    "croc": "Crocodylus porosus", "spinyturtle": "Heosemys spinosa", "watermonitor": "Varanus salvator",
    "draco": "Draco sumatranus", "wagler": "Tropidolaemus wagleri",
    # mammals
    "colugo": "Galeopterus variegatus", "pangolin": "Manis javanica", "leopardcat": "Prionailurus bengalensis",
    "loris": "Nycticebus coucang", "boar": "Sus scrofa",
    # birds
    "redshank": "Tringa totanus", "egret": "Egretta garzetta", "greenpigeon": "Treron vernans",
    "fishowl": "Ketupa ketupu", "seaeagle": "Haliaeetus leucogaster", "hornbill": "Anthracoceros albirostris",
    "kingfisher": "Todiramphus chloris", "flameback": "Dinopium javanense", "parakeet": "Psittacula longicauda",
    "bulbul": "Pycnonotus analis", "javanmyna": "Acridotheres javanicus", "brahminykite": "Haliastur indus",
    # insects
    "plaintiger": "Danaus chrysippus", "waspmoth": "Amata huebneri", "tigerbeetle": "Calomera angulata",
    "robberfly": "Asilidae", "honeybee": "Apis dorsata", "sphex": "Sphex diabolicus", "giantant": "Dinomyrmex gigas",
    "emperor": "Anax guttatus", "spreadwing": "Lestes", "cicada": "Huechys sanguinea",
    "cricket": "Cardiodactylus", "mantis": "Hierodula", "deadleafroach": "Pseudophoraspis nebulosa",
    "termite": "Macrotermes carbonarius", "leafinsect": "Cryptophyllium", "mantisfly": "Euclimacia",
    "stickinsect": "Phasmatodea",
    # arachnids + other inverts
    "thiania": "Thiania bhamoensis", "heteropoda": "Heteropoda boiei", "thomisus": "Thomisus nepenthiphilus",
    "macracantha": "Macracantha arcuata", "nephila": "Nephila pilipes", "lychas": "Lychas scutilus",
    "beloniscus": "Beloniscus albiephippiatus", "amblypygi": "Amblypygi", "vinegaroon": "Thelyphonida",
    "pseudoscorpion": "Pseudoscorpiones", "harvestman": "Opiliones",
    "millipede": "Harpagophoridae", "cormocephalus": "Cormocephalus", "armadillo": "Armadillo intermixtus",
    "housecentipede": "Thereuopoda longicornis",
    # marine vertebrates
    "leatherjacket": "Anacanthus barbatus", "seahorse": "Hippocampus kuda", "shrimpgoby": "Cryptocentrus",
    "copperband": "Chelmon rostratus", "clownfish": "Amphiprion ocellaris", "mudskipper": "Periophthalmus chrysospilos",
    "whaleshark": "Rhincodon typus", "bluespotray": "Taeniura lymma", "dolphin": "Sousa chinensis", "dugong": "Dugong dugon",
    # intertidal
    "horseshoecrab": "Carcinoscorpius rotundicauda", "bruguiera": "Bruguiera gymnorhiza", "avicennia": "Avicennia",
    # freshwater
    "sgcrab": "Johora singaporensis", "muffprawn": "Macrobrachium", "pygmyrasbora": "Boraras maculatus",
    "betta": "Betta pugnax", "swampcrab": "Parathelphusa", "africancatfish": "Clarias gariepinus",
    "redclaw": "Cherax quadricarinatus", "guppy": "Poecilia reticulata", "pleco": "Pterygoplichthys disjunctivus",
    "tilapia": "Oreochromis niloticus", "trumpetsnail": "Melanoides tuberculata",
    # subtidal
    "goniopora": "Goniopora", "tubastraea": "Tubastraea", "carpetanemone": "Stichodactyla gigantea",
    "barrelsponge": "Xestospongia testudinaria", "neptunecup": "Cliona patera", "enhalus": "Enhalus acoroides",
    "halophila": "Halophila ovalis", "thalassia": "Thalassia hemprichii", "cushionstar": "Culcita novaeguineae",
    "giantclam": "Tridacna", "acropora": "Acropora", "nudibranch": "Phyllidiella",
}

# id -> Wikipedia article title (scenes / habitats)
SCENES = {
    "h-mangrove": "Mangrove", "h-coralreef": "Coral_reef", "h-seagrass": "Seagrass", "h-mudflat": "Mudflat",
    "h-rockyshore": "Rocky_shore", "h-btnr": "Bukit_Timah_Nature_Reserve", "h-sbwr": "Sungei_Buloh_Wetland_Reserve",
    "h-macritchie": "MacRitchie_Reservoir", "h-swamp": "Freshwater_swamp_forest", "h-dipterocarp": "Dipterocarpaceae",
    "h-chekjawa": "Chek_Jawa", "h-karst": "Karst", "h-peat": "Peat_swamp_forest",    "h-marina": "Marina_Barrage", "h-kentridge": "Kent_Ridge_Park", "h-seawall": "Seawall", "h-ubin": "Pulau_Ubin",
}


def get_json(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        return json.load(r)


def inat_photo(name):
    d = get_json("https://api.inaturalist.org/v1/taxa?" + urllib.parse.urlencode({"q": name, "per_page": 6}))
    # prefer an exact name match so e.g. "Dugong" doesn't fall back to the whole order
    res = sorted(d.get("results", []), key=lambda r: r.get("name", "").lower() != name.lower())
    for r in res:
        p = r.get("default_photo")
        if p and p.get("medium_url"):
            return p["medium_url"].replace("/medium.", "/large."), r.get("name"), p.get("attribution", "")
    return None, None, None


def wiki_photo(title):
    d = get_json("https://en.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(title))
    src = (d.get("originalimage") or d.get("thumbnail") or {}).get("source")
    return src, d.get("title"), "Wikipedia/Wikimedia Commons"


def download(url, dest):
    tmp = dest + ".part"
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r, open(tmp, "wb") as f:
        f.write(r.read())
    # normalise: max 720px, jpeg q78
    subprocess.run(["magick", tmp, "-auto-orient", "-resize", "720x720>", "-strip", "-quality", "78", dest], check=True)
    os.remove(tmp)


def main():
    os.makedirs(os.path.join(OUT, "sp"), exist_ok=True)
    credits_path = os.path.join(OUT, "credits.json")
    credits = json.load(open(credits_path)) if os.path.exists(credits_path) else {}
    jobs = [("sp", k, v, inat_photo) for k, v in SPECIES.items()] + [("sp", k, v, wiki_photo) for k, v in SCENES.items()]
    failed = []
    for folder, key, q, fn in jobs:
        dest = os.path.join(OUT, folder, key + ".jpg")
        if os.path.exists(dest):
            continue
        try:
            url, matched, attr = fn(q)
            if not url:
                raise RuntimeError("no photo")
            download(url, dest)
            credits[key] = {"query": q, "matched": matched, "credit": attr}
            print(f"ok   {key:16} <- {matched}")
            time.sleep(2.5)
        except Exception as e:  # keep going; report at end
            failed.append((key, q, str(e)))
            print(f"FAIL {key:16} {q}: {e}")
    json.dump(credits, open(credits_path, "w"), indent=1)
    if failed:
        print("\nFailed:", *failed, sep="\n  ")
        sys.exit(1)


if __name__ == "__main__":
    main()
