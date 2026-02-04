# Session State — Teleferic Grand Hotel Rebuild

This document exists so that if Claude crashes mid-session, a new instance can pick up where we left off.

---

## Project Context

- **Client:** Henrick Tissink (the user)
- **Goal:** Rebuild the website for Teleferic Grand Hotel (https://telefericgrandhotel.ro) — a luxury ski resort in Poiana Brasov, Romania
- **Business angle:** Henrick is friends with the hotel owner. Plan is to build a demo site first, show the owner, then get the original high-res assets and go into a business partnership.
- **Working directory:** `/Users/henricktissink/Sauce/teleferic`
- **Not a git repo yet**

---

## What Has Been Done

### 1. Site Analysis (COMPLETE)
- Fetched and analyzed the existing site at https://telefericgrandhotel.ro
- It's a WordPress + Elementor site with WooCommerce, Smart Slider 3, Cookiebot, Google Analytics
- 107 pages identified via sitemap
- Key sections: rooms (8 types), restaurants/bars (7 venues), spa, conference (5 rooms), destination/activities, kids facilities

### 2. Asset Download (COMPLETE — 284 files)
Downloaded all extractable images from the site using curl + headless browser (Playwright). Organized into:

```
assets/
├── logos/              (2)   White + black PNGs
├── awards/             (19)  All award badges 2016-2023
├── spa/                (18)  Pools, saunas, jacuzzi, massage, aerial
├── rooms/              (66)  All 8 room types — gallery photos, floor plans, nav buttons
│   ├── deluxe/
│   ├── junior-suite-premium/
│   ├── junior-suite/
│   ├── junior-suite-economy/
│   ├── double-superior/
│   ├── double-standard/
│   ├── double-economy/
│   └── single/
├── restaurants/        (60)  All 7 venues — galleries + nav buttons
│   ├── 4-anotimpuri/
│   ├── coroana/
│   ├── lobby-bar/
│   ├── apres-ski/
│   ├── casa-utu/
│   ├── spa-bar/
│   └── nightclub/
├── facilities/         (23)  Kids club, game room, hair studio, equipment rental, playground
├── conference/         (11)  All 5 conference rooms + events
├── destination/        (39)  Summer, winter, attractions, winter sports, summer sports
├── ui/                 (14)  Promo images, cross-nav buttons, icons
├── pdfs/               (3)   Spa menu, spa basics, apres ski menu
├── homepage/           (29)  All 15 hero slider images + section buttons (via Playwright headless browser)
└── videos/             (1)   youtube-ids.txt with 30 YouTube video IDs + titles
```

### 3. Headless Browser Extraction (COMPLETE)
- Installed Playwright + Chromium headless
- Ran script to render homepage JS and extract all Smart Slider images → 29 new images in `assets/homepage/`
- Ran script on video gallery page → all 30 videos are YouTube embeds, saved to `assets/videos/youtube-ids.txt`
- Confirmed NO background videos exist on homepage (network monitoring found zero mp4/webm)
- Scripts saved in `scripts/extract-homepage-images.mjs` and `scripts/extract-video-gallery.mjs`

### 4. Documentation (COMPLETE)
- `MANUAL_MEDIA_PULL.md` — Full inventory of all 284 downloaded files. Priorities 1-3 are now resolved (homepage sliders via headless browser, video gallery extracted, no bg videos found). Only remaining manual item: live camera stream embed URL. Also includes "ask the owner" checklist with naming conventions.

---

## What Has NOT Been Done Yet

### Site Build
- No tech stack chosen yet (suggested Next.js + Tailwind + Framer Motion)
- No code written
- No design decisions made
- No content/copy extracted or written

### Pending User Decisions
- Tech stack confirmation
- Whether to build a full production site or a demo/pitch site
- Design direction / aesthetic preferences
- Whether to wait for owner's assets or build with what we have

---

## Pages on the Existing Site (from sitemap, 107 total)

### Public-facing content pages:
- Homepage: https://telefericgrandhotel.ro
- Rooms (8): camera-single, camera-dubla-economy, camera-dubla-standard, camera-dubla-superioara, junior-suite-economy, junior-suite, junior-suite-premium, apartamentul-deluxe
- Restaurants/Bars (7): restaurant-4-anotimpuri, restaurant-coroana, grand-lobby-cafe-bar, apres-ski-bar, casa-utu, spa-bar, club-de-noapte-teleferic
- Spa & Facilities: spa, hair-studio, teleferic-kids-club, sala-jocuri-interioara, loc-de-joaca-exterior, inchiriere-echipament-sportiv, monitor-ski-snowboard
- Conference (5 rooms + events): sala-conferinte-brasovia, sala-conferinte-cetatuia, sala-conferinte-postavaru, sala-conferinte-poiana, sala-conferinte-coroana, evenimente-personale
- Destination/Activities: destinatia, sporturi-de-iarna, sporturi-de-vara, copii-si-adolescenti
- Other: istoric, galerie-video, camera-live, premii-si-distinctii, contact, intrebari-frecvente, oferte-poiana-brasov, sarbatori-de-iarna, magazin-teleferic, 10-ani-de-succes, cunoaste-echipa, descarca-aplicatia-teleferic-grand-hotel

### Functional/internal pages (less relevant for rebuild):
- Booking: rezervare_1, cart, checkout, confirmare-rezervare-camera, cancel-reservation
- Account: my-account, contul-meu, contul-meu-profil, contul-meu-istoric, contul-meu-wishlist
- Kiosks/Totems: totem-receptie-desk, totem-restaurant, totem-bar-spa, etc. (internal display screens)
- Allergen menus: alergeni-meniu-room-service, alergeni-meniu-lobby-bar-snack, etc.
- Legal: termeni-si-conditii, politica-de-confidentialitate, politica-cookies

---

## Key Business Info Gathered

- **Phone:** 0368 100 200
- **Email:** rezervari@telefericgrandhotel.ro
- **WhatsApp:** +40725966730
- **Location:** Poiana Brasov, Romania
- **Discount tiers:** 10% direct booking, 15% non-refundable web, 18% non-refundable app
- **Reviews:** 5.0/5 based on 606 reviews
- **Awards:** World Travel Awards 2021-2023 (Romania's Leading Hotel), Romania's Best Ski Hotel 2022-2023, ISO 9001 + 22000 certified, 15+ other awards
- **Has mobile app:** iOS + Android
