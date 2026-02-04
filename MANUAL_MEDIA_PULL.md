# Manual Media Pull Guide

Assets that couldn't be pulled automatically and need to be gathered manually (browser save, or ask the hotel owner for originals).

---

## ~~PRIORITY 1: Homepage Hero Images & Slider Content~~ DONE

Extracted via headless browser (Playwright). 29 images saved to `assets/homepage/`, including all 15 main hero slider photos and 14 section/button images.

### How to pull:
1. Open https://telefericgrandhotel.ro in Chrome
2. Open DevTools (F12) > Network tab > filter by `Img` > reload page
3. Right-click each image > **Save image as...** using the names below
4. Save to: `assets/homepage/`

### Naming convention:
Save each image based on what it shows. Use these names:

```
assets/homepage/
├── hero-hotel-exterior-winter.jpg      (main hero if it shows the hotel in snow)
├── hero-hotel-exterior-summer.jpg      (main hero summer variant)
├── hero-hotel-aerial.jpg               (drone/aerial shot if present)
├── hero-ski-slopes.jpg                 (skiing/slopes hero)
├── hero-spa.jpg                        (spa hero)
├── hero-restaurant.jpg                 (dining hero)
├── hero-lobby.jpg                      (lobby/interior hero)
├── hero-rooms.jpg                      (room showcase hero)
├── hero-pool.jpg                       (pool hero)
├── hero-conference.jpg                 (conference/events hero)
├── hero-destination.jpg                (Poiana Brasov scenery)
├── slider-[section]-[number].jpg       (for any remaining slider images,
│                                        e.g. slider-rooms-1.jpg,
│                                        slider-spa-2.jpg, etc.)
└── ...
```

Use your judgment — name them by what you see. The pattern is `hero-[subject].jpg` for full-width heroes and `slider-[section]-[number].jpg` for gallery-style sliders.

### Slider IDs found (for reference):
`n2-ss-2, n2-ss-4, n2-ss-5, n2-ss-7, n2-ss-12, n2-ss-13, n2-ss-14, n2-ss-15, n2-ss-16, n2-ss-17, n2-ss-18, n2-ss-19, n2-ss-20, n2-ss-21, n2-ss-123, n2-ss-124, n2-ss-110, n2-ss-111, n2-ss-141, n2-ss-146, n2-ss-147`

---

## ~~PRIORITY 2: Video Gallery~~ DONE

All 30 videos on the gallery page are **YouTube embeds** — no self-hosted video files. Extracted via headless browser.

Saved to: `assets/videos/youtube-ids.txt` (30 videos with IDs, titles, and categories)

---

## ~~PRIORITY 3: Background Videos~~ LIKELY NONE

The headless browser monitored all network requests on the homepage — **no mp4/webm video files were loaded**. The `"background.video.mobile":1` config flag appears to be unused or a default setting. No action needed.

---

## ~~PRIORITY 4: Live Camera Stream~~ DONE

YouTube live stream embed. Extracted via headless browser (hidden behind Cookiebot consent).

- **YouTube ID:** `kEIFOfvNF4I`
- **Embed URL:** `https://www.youtube.com/embed/kEIFOfvNF4I?si=1suxejV7Ni-RYr9p&controls=0`
- Saved to: `assets/videos/live-camera-embed-url.txt`

---

## ASK THE OWNER FOR

Since you're friends with the owner, the best move is to ask for:

1. **Original high-res photography** — WordPress serves compressed/resized versions. The originals will be dramatically better for a luxury redesign.
2. **Brand guidelines** — official fonts, color palette, any brand book
3. **Logo files** — SVG/AI/EPS vector formats (we only have small PNGs)
4. **Video assets** — original resolution video files, not YouTube-compressed
5. **Drone/aerial footage** — if they have any (the aerial spa shot suggests they might)
6. **Floor plans** — high-res room layout files (we have low-res PNGs)
7. **Menu PDFs** — current versions (we pulled the spa menu + apres ski menu, but restaurant menus may exist)
8. **Copy/text content** — room descriptions, pricing tiers, seasonal packages in a doc format

### Where to save owner-provided assets:
```
assets/
├── owner-originals/
│   ├── photography/
│   │   ├── rooms/                      (drop hi-res room photos here, organized by type)
│   │   ├── spa/
│   │   ├── restaurants/
│   │   ├── hotel-exterior/
│   │   └── destination/
│   ├── branding/
│   │   ├── logo.svg                    (or .ai / .eps — vector logo)
│   │   ├── logo-white.svg
│   │   ├── logo-black.svg
│   │   ├── brand-guidelines.pdf
│   │   ├── fonts/                      (any custom font files)
│   │   └── color-palette.txt           (or screenshot of brand colors)
│   ├── video/
│   │   ├── hotel-promo.mp4             (main promotional video)
│   │   ├── drone-aerial.mp4            (aerial/drone footage)
│   │   └── [other-videos].mp4
│   ├── floor-plans/
│   │   ├── single.pdf                  (or .dwg / .ai)
│   │   ├── double-economy.pdf
│   │   ├── double-standard.pdf
│   │   ├── double-superior.pdf
│   │   ├── junior-suite-economy.pdf
│   │   ├── junior-suite.pdf
│   │   ├── junior-suite-premium.pdf
│   │   └── deluxe.pdf
│   └── menus/
│       ├── 4-anotimpuri-menu.pdf
│       ├── coroana-menu.pdf
│       ├── lobby-bar-menu.pdf
│       ├── apres-ski-menu.pdf
│       ├── casa-utu-menu.pdf
│       ├── spa-bar-menu.pdf
│       ├── room-service-menu.pdf
│       └── spa-treatments-menu.pdf
```

---

## What We Downloaded (254 files)

All downloaded via curl from static HTML image references across the entire site.

### Logos (2)
- `assets/logos/logo-white.png` — White hotel logo
- `assets/logos/logo-black.png` — Black hotel logo

### Awards & Certifications (19)
- `assets/awards/best-ski-hotel-2022.png`
- `assets/awards/best-ski-hotel-2023.png`
- `assets/awards/world-travel-2021.png`
- `assets/awards/world-travel-2022.png`
- `assets/awards/world-travel-2023.png`
- `assets/awards/intl-hospitality-2017.png`
- `assets/awards/intl-hospitality-2019.png`
- `assets/awards/top-award-2022.png`
- `assets/awards/tophotel-2016.png`
- `assets/awards/tophotel-2017.png`
- `assets/awards/tophotel-2018.png`
- `assets/awards/tophotel-2019.png`
- `assets/awards/tuv-9001.png`
- `assets/awards/tuv-22000.png`
- `assets/awards/romanian-hospitality-2019.png`
- `assets/awards/romanian-hospitality-2020.png`
- `assets/awards/top-hotel-2023.png`
- `assets/awards/top-hotel-business-2020.png`
- `assets/awards/top-hotel-business-2022.png`

### Spa (18)
- `assets/spa/pool1.jpg` — Indoor swimming pool
- `assets/spa/pool2.jpg` — Secondary pool view
- `assets/spa/pool-fountain.jpg` — Pool with fountain
- `assets/spa/relaxation-area.jpg` — Relaxation zone
- `assets/spa/dry-sauna.jpg` — Dry sauna
- `assets/spa/dry-sauna-winter.jpg` — Dry sauna winter shot (1920x1080)
- `assets/spa/interior-11.jpg` — Facility interior
- `assets/spa/interior-12.jpg` — Facility interior
- `assets/spa/couple-therapy-room.jpg` — Couples treatment room
- `assets/spa/couple-massage.jpg` — Couples massage
- `assets/spa/quartz-bed.jpg` — Quartz therapy bed
- `assets/spa/spa-bar.jpg` — Spa bar area
- `assets/spa/jacuzzi-winter-1.jpg` — Outdoor jacuzzi in winter (1920x1080)
- `assets/spa/jacuzzi-winter-2.jpg` — Jacuzzi alternate winter view (1920x1080)
- `assets/spa/exterior-aerial.jpg` — Exterior aerial/drone view
- `assets/spa/facility-4.jpg` — Facility view
- `assets/spa/facility-6.jpg` — Facility view
- `assets/spa/facility-7.jpg` — Facility view

### Rooms — Deluxe Apartment (10)
- `assets/rooms/deluxe/1.jpg` through `9.jpg` — Gallery photos
- `assets/rooms/deluxe/1_1.jpg` — Additional angle
- `assets/rooms/deluxe/floorplan.png` — Room layout
- `assets/rooms/deluxe/button-landscape.jpg` — Nav button

### Rooms — Junior Suite Premium (8)
- `assets/rooms/junior-suite-premium/bed-view.jpg`
- `assets/rooms/junior-suite-premium/couch-view.jpg`
- `assets/rooms/junior-suite-premium/desk.jpg`
- `assets/rooms/junior-suite-premium/bed.jpg`
- `assets/rooms/junior-suite-premium/room-5.jpg`
- `assets/rooms/junior-suite-premium/floorplan.png`
- `assets/rooms/junior-suite-premium/button-landscape.jpg`
- `assets/rooms/junior-suite-premium/button-mobile.jpg`

### Rooms — Junior Suite (9)
- `assets/rooms/junior-suite/gallery/1.jpg` through `5.jpg`
- `assets/rooms/junior-suite/gallery/1_1.jpg`
- `assets/rooms/junior-suite/gallery/twin-bed.jpg`
- `assets/rooms/junior-suite/gallery/bathroom.jpg`
- `assets/rooms/junior-suite/floorplan.png`
- `assets/rooms/junior-suite/button-desktop.jpg`
- `assets/rooms/junior-suite/button-mobile.jpg`

### Rooms — Junior Suite Economy (9)
- `assets/rooms/junior-suite-economy/gallery/1.jpg` through `5.jpg`
- `assets/rooms/junior-suite-economy/gallery/1_1.jpg`
- `assets/rooms/junior-suite-economy/gallery/twin-bed.jpg`
- `assets/rooms/junior-suite-economy/gallery/bathroom.jpg`
- `assets/rooms/junior-suite-economy/floorplan.png`
- `assets/rooms/junior-suite-economy/button-desktop.jpg`
- `assets/rooms/junior-suite-economy/button-mobile.jpg`

### Rooms — Double Superior (8)
- `assets/rooms/double-superior/gallery/1.jpg` through `4.jpg`
- `assets/rooms/double-superior/gallery/twin-bed.jpg`
- `assets/rooms/double-superior/gallery/bathroom.jpg`
- `assets/rooms/double-superior/floorplan.png`
- `assets/rooms/double-superior/button-desktop.jpg`
- `assets/rooms/double-superior/button-mobile.jpg`

### Rooms — Double Standard (8)
- `assets/rooms/double-standard/gallery/1.jpg` through `5.jpg`
- `assets/rooms/double-standard/gallery/twin-bed.jpg`
- `assets/rooms/double-standard/floorplan.png`
- `assets/rooms/double-standard/button-desktop.jpg`
- `assets/rooms/double-standard/button-mobile.jpg`

### Rooms — Double Economy (7)
- `assets/rooms/double-economy/gallery/1.jpg` through `5.jpg` (including twin-bed)
- `assets/rooms/double-economy/floorplan.png`
- `assets/rooms/double-economy/button-desktop.jpg`
- `assets/rooms/double-economy/button-mobile.jpg`

### Rooms — Single (7)
- `assets/rooms/single/gallery/1.jpg` through `3.jpg`
- `assets/rooms/single/gallery/bathroom.jpg`
- `assets/rooms/single/floorplan.png`
- `assets/rooms/single/button-desktop.jpg`
- `assets/rooms/single/button-mobile.jpg`

### Restaurants — 4 Anotimpuri (13)
- `assets/restaurants/4-anotimpuri/1.jpg` through `6.jpg` — New gallery (2024)
- `assets/restaurants/4-anotimpuri/old-4.jpg` through `old-9.jpg` — Older gallery (2023)
- `assets/restaurants/4-anotimpuri/button-rooms-page.jpg` — Nav button

### Restaurants — Coroana (7)
- `assets/restaurants/coroana/1.jpg` through `6.jpg` — Gallery
- `assets/restaurants/coroana/terrace.jpg` — Terrace activity
- `assets/restaurants/coroana/button-square.jpg` — Nav button

### Restaurants — Lobby Bar (12)
- `assets/restaurants/lobby-bar/1.jpg` through `10.jpg` — Full gallery
- `assets/restaurants/lobby-bar/button-desktop.jpg`
- `assets/restaurants/lobby-bar/button-square.jpg`

### Restaurants — Apres Ski Bar (5)
- `assets/restaurants/apres-ski/1.jpg` through `3.jpg` — Gallery
- `assets/restaurants/apres-ski/button-desktop.jpg`
- `assets/restaurants/apres-ski/button-square.jpg`

### Restaurants — Casa Utu (12)
- `assets/restaurants/casa-utu/1.jpg` through `10.jpg` — Full gallery
- `assets/restaurants/casa-utu/button-desktop.jpg`
- `assets/restaurants/casa-utu/button-square.jpg`

### Restaurants — Spa Bar (3)
- `assets/restaurants/spa-bar/1.jpg` — Gallery
- `assets/restaurants/spa-bar/button-desktop.jpg`
- `assets/restaurants/spa-bar/button-square.jpg`

### Restaurants — Nightclub (8)
- `assets/restaurants/nightclub/1.jpg` through `7.jpg` — Full gallery
- `assets/restaurants/nightclub/button-square.jpg`

### Facilities — Kids Club (6)
- `assets/facilities/kids-club/1.png` through `4.png`
- `assets/facilities/kids-club/5.jpg`, `6.jpg`

### Facilities — Game Room (6)
- `assets/facilities/game-room/1.jpg` through `9.jpg` (pinball, air hockey, racing simulators, kiddie rides)

### Facilities — Hair Studio (4)
- `assets/facilities/hair-studio/1.jpg` through `5.jpg`

### Facilities — Equipment Rental (3)
- `assets/facilities/equipment-rental/1.jpg` through `3.jpg`

### Facilities — Playground (4)
- `assets/facilities/playground/1.jpg` through `4.jpg`

### Conference Rooms (11)
- `assets/conference/brasovia-landscape.jpg`, `brasovia-square.jpg`
- `assets/conference/cetatuia.jpg`, `cetatuia-square.jpg`
- `assets/conference/postavaru.jpg`, `postavaru-square.jpg`
- `assets/conference/poiana.jpg`
- `assets/conference/coroana.jpg`, `coroana-square.jpg`
- `assets/conference/events.jpg`, `events-square.jpg`

### Destination — Summer (7)
- `assets/destination/summer/slope.jpg` — Summer slope view
- `assets/destination/summer/postavarul.jpg` — Postavarul peak
- `assets/destination/summer/destination-view.jpg`
- `assets/destination/summer/hiking-trail.jpg`
- `assets/destination/summer/family-cycling.jpg`
- `assets/destination/summer/cycling.jpg`
- `assets/destination/summer/old-path.jpg`

### Destination — Winter (8)
- `assets/destination/winter/cable-car-1.jpg`, `cable-car-2.jpg`
- `assets/destination/winter/slope-1.jpg` through `slope-3.jpg`
- `assets/destination/winter/kids-slope.jpg`
- `assets/destination/winter/brasov.jpg`
- `assets/destination/winter/slope-path.jpg`

### Destination — Attractions (7)
- `assets/destination/attractions/evening-viewpoint.jpg`
- `assets/destination/attractions/brasov-promenade.jpg`
- `assets/destination/attractions/black-church.jpg`
- `assets/destination/attractions/viscri.jpg`
- `assets/destination/attractions/rupea-fortress.jpg`
- `assets/destination/attractions/bran-castle.jpg`
- `assets/destination/attractions/rasnov-fortress.jpg`

### Destination — Winter Sports (12)
- `assets/destination/winter-sports/skier.jpg`
- `assets/destination/winter-sports/snowboard.jpg`
- `assets/destination/winter-sports/ski-school.jpg`
- `assets/destination/winter-sports/atv.jpg`
- `assets/destination/winter-sports/snowmobile.jpg`
- `assets/destination/winter-sports/tubing.jpg`
- `assets/destination/winter-sports/slope-map.jpg` — Full ski slope map
- `assets/destination/winter-sports/paragliding.jpg`
- `assets/destination/winter-sports/button-rental-desktop.jpg`
- `assets/destination/winter-sports/button-rental-square.jpg`
- `assets/destination/winter-sports/button-ski-school-desktop.jpg`
- `assets/destination/winter-sports/button-ski-school-square.jpg`

### Destination — Summer Sports (5)
- `assets/destination/summer-sports/horse-riding.jpg`
- `assets/destination/summer-sports/paragliding.jpg`
- `assets/destination/summer-sports/hiking.jpg`
- `assets/destination/summer-sports/atv.jpg`
- `assets/destination/summer-sports/bike-rental.jpg`

### UI Elements (14)
- `assets/ui/discount-promo.jpg` — Main discount promotional image
- `assets/ui/sol-pictogram.png` — EU Online Dispute Resolution icon
- `assets/ui/sal-pictogram.png` — Romanian Consumer Authority icon
- `assets/ui/whatsapp-icon.png`
- `assets/ui/button-spa-desktop.jpg`, `button-spa-mobile.jpg`
- `assets/ui/button-restaurants-desktop.jpg`, `button-restaurants-mobile.jpg`
- `assets/ui/button-kids-desktop.jpg`, `button-kids-mobile.jpg`
- `assets/ui/button-summer-sports-desktop.jpg`, `button-summer-sports-mobile.jpg`
- `assets/ui/button-offers-desktop.jpg`, `button-offers-mobile.jpg`

### PDFs (3)
- `assets/pdfs/spa-menu.pdf` — SPA Center treatment menu
- `assets/pdfs/spa-basics.pdf` — Spa basics guide
- `assets/pdfs/apres-ski-menu.pdf` — Apres Ski Bar menu
