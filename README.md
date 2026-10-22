# Kopi's Field Notes — ES5008 study app

A study app for ES5008 *The Biodiversity and Natural History of Singapore*. It follows a learn → recall → space-it-out loop.

## Run it

Open `index.html` in a browser (double-click works), or serve the folder:

```sh
python3 -m http.server 8000   # then visit http://localhost:8000
```

Your progress is saved in this browser's localStorage. To move it to another device, use Settings → Export / Import.

## What's inside

- **Learn**: 13 modules and 127 bite-size lessons, each with a memory trick and an "exam angle" note. After every 3 lessons there's a short recall check, and anything you miss is asked again before you move on.
- **Review**: spaced repetition with Leitner boxes. Items come back after 1, 3, 7, 14 and 30 days.
- **Practice**: quizzes you can filter by module and question type (concepts, photo ID, species facts, or the original mock).
- **Mock exams**: the **Real Mock Test** (your original mock quiz), six fixed **Practice Mocks** (20 questions in 20 minutes each, no repeats between them), and a custom random mix. Feedback only appears after submitting; results are broken down by topic, and best scores and history are tracked per paper.
- **Photo ID**: rapid-fire species identification using photos of 99 must-know species.
- **Field guide**, **Memory tricks**, printable **Cheat sheets**, **Weak spots** and **Search**.
- XP, levels, a daily goal, a streak, a sticker for each module you master, and a dark mode.

## Content

- `data/modules/*.js` holds the lessons, species tables, hand-written questions and cards. Photo, fact, habitat and status questions are generated from each species table in `js/content.js`.
- `data/mock.js` holds the official mock quiz, with answers worked out from the slides.
- `tools/validate.js` checks the data (ids, answers, lesson references, images): `node tools/validate.js`
- `tools/fetch_images.py` re-downloads the photos (from iNaturalist and Wikimedia). Credits are in `img/credits.json`.
