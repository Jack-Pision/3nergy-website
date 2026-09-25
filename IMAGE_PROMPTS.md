# 3NERGY — Production Image Prompts & Visual Asset Specification

This document provides a complete, cohesive art direction system and detailed AI image prompts for every image slot across the **3NERGY** circadian wellness website.

All prompts are tailored to eliminate generic "AI slop" (glossy plastic, cybernetic glows, oversaturated neon, fake corporate smiles) and replace them with high-end, tactile, luxury editorial aesthetics reminiscent of **Aesop, Seed, Kinfolk, and Cereal Magazine**.

---

## 1. Visual Identity & Art Direction Guidelines

### Aesthetic Pillars
- **Editorial Realism**: Photographed like a high-end Scandinavian or Japanese print publication. Natural grain, realistic depth of field, authentic daylight.
- **Circadian Lighting**:
  - **Dawn (01 Energy)**: Crisp, pale 5000K morning daylight, long soft morning shadows, misty window light.
  - **Zenith (02 Recovery)**: Warm, luminous 4000K midday sun, golden warmth, athletic composure.
  - **Restore (03 Sleep)**: Deep 2400K twilight and ambient incandescent bedside warmth, moody charcoal and dim amber tranquility.
- **Tactile Materials**: Frosted pharmaceutical glass, matte ceramic, brushed satin champagne brass and titanium caps, rough limestone, travertine, Belgian linen, unvarnished white oak, and organic botanical matter.
- **Negative Prompts / Banned Tropes**:
  `--no glossy plastic, 3d render, neon glow, cybernetic, futuristic HUD, distorted fingers, oversaturated, artificial gradient, corporate stock photo smile, floating sci-fi particles, low quality, CGI`

---

## 2. Product Packshots & E-Commerce Visuals

### Asset 01: Daily Energy & Focus Packshot
- **Target File**: `public/images/card1_full.png` (and `public/images/dawn-rise.jpg`)
- **Slot**: Daily Essentials Card 1, Shop Page Individual Showcase
- **Aspect Ratio**: 4:5 (`--ar 4:5`) or 1:1 (`--ar 1:1`)
- **Dimensions**: 1200 × 1500 px

#### Midjourney v6.1 Prompt
```text
Commercial studio packshot of a luxury supplement bottle labeled "3NERGY 01 • Daily Energy & Focus". Cylindrical heavy frosted obsidian forest-green glass bottle with a machined brushed matte satin gunmetal aluminum cap. Minimalist off-white silk-screened typographic label. Resting beside the bottle on a textured slab of raw limestone are two vegan capsules: one emerald green half and one metallic copper half. Soft morning north-facing diffuse daylight casting delicate shadows, clean minimal beige background, Hasselblad H6D-100c, 100mm f/4 macro lens, studio lighting, hyper-realistic, luxury beauty editorial --ar 4:5 --style raw --v 6.1 --no glossy plastic, neon, 3d cartoon
```

#### Flux.1 Pro Prompt
```text
Commercial product photography of a premium apothecary wellness supplement bottle. The cylindrical bottle is made of heavy matte deep forest green frosted glass with an unprinted brushed titanium cap. The label is ultra-minimal with clean black geometric typography reading "3NERGY" and "01 • Daily Energy & Focus". Two two-tone transparent capsules (dark moss green and burnished bronze) rest on a raw fluted travertine block next to the bottle. Clean architectural studio environment, soft diffuse 5500K morning sunlight, shot on 35mm f/2.8 lens, exquisite material textures, zero reflections, neutral warm beige paper backdrop.
```

---

### Asset 02: Daily Recovery & Stamina Packshot
- **Target File**: `public/images/card2_full.png` (and `public/images/zenith-flow.jpg`)
- **Slot**: Daily Essentials Card 2, Shop Page Individual Showcase
- **Aspect Ratio**: 4:5 (`--ar 4:5`) or 1:1 (`--ar 1:1`)
- **Dimensions**: 1200 × 1500 px

#### Midjourney v6.1 Prompt
```text
Commercial studio packshot of an artisan luxury wellness supplement bottle labeled "3NERGY 02 • Daily Recovery". Heavy matte warm sand-beige ceramic bottle with a ribbed brushed champagne-gold metal cap. Minimalist clean umber typography printed on the bottle. Beside the bottle are whole organic dried Montmorency tart cherries and natural mineral salt crystals on a warm sandstone pedestal. Warm midday 4000K sunlight, soft shadow casting, medium format camera, 90mm lens, f/5.6, editorial cosmetic still life, high-end packaging design --ar 4:5 --style raw --v 6.1 --no 3d render, neon, reflection, cartoon
```

#### Flux.1 Pro Prompt
```text
Clean studio still-life photograph of a high-end health product bottle. Warm matte almond-sand colored ceramic bottle with a fine satin-brushed champagne brass ribbed screw cap. Clean typographic label reading "3NERGY" and "02 • Daily Recovery". In the foreground, two vegan capsules with deep green and copper powder rest next to a pinch of pink Himalayan electrolyte flakes on a rough-hewn cedar block. Bright, even architectural daylight, neutral warm stone tones, shot on Leica SL2 with 75mm lens, sharp focus, tactile textures.
```

---

### Asset 03: Daily Rest & Sleep Packshot
- **Target File**: `public/images/card3_full.png` (and `public/images/restore-prime.jpg`)
- **Slot**: Daily Essentials Card 3, Shop Page Individual Showcase
- **Aspect Ratio**: 4:5 (`--ar 4:5`) or 1:1 (`--ar 1:1`)
- **Dimensions**: 1200 × 1500 px

#### Midjourney v6.1 Prompt
```text
Commercial studio packshot of a luxury evening supplement bottle labeled "3NERGY 03 • Daily Rest & Sleep". Heavy cylindrical matte charcoal-plum smoked glass bottle with an antiqued brushed bronze metal cap. Minimal crisp white typographic print. Sitting beside the bottle on a dark slate block are dried whole chamomile flowers and gentle white mineral magnesium crystals. Moody atmospheric twilight lighting with a gentle warm 2700K ambient side glow, shallow depth of field, 100mm macro lens, Kinfolk magazine aesthetic, quiet luxury wellness --ar 4:5 --style raw --v 6.1 --no neon, sci-fi glow, glossy 3d
```

#### Flux.1 Pro Prompt
```text
Still life luxury product photography of a premium evening sleep supplement. The bottle is cylindrical matte deep charcoal violet glass with a clean brushed satin bronze cap. Crisp, understated white lettering on the bottle reads "3NERGY 03 • Daily Rest". Next to the bottle, dried whole chamomile flower heads and translucent magnesium glycinate crystal chunks are arranged with artistic care on a dark basalt stone tray. Dim, soothing evening ambient light, warm lamp reflections, shot on 85mm f/2.0 lens, elegant and restorative atmosphere.
```

---

### Asset 04: The Complete Daily Trio (All 3 Bottles Together)
- **Target File**: `public/images/trio_bundle_hero.png`
- **Slot**: Shop Page Trio Bundle Feature (`#trio-bundle`), Cart Drawer Upsell
- **Aspect Ratio**: 16:9 (`--ar 16:9`) or 4:3 (`--ar 4:3`)
- **Dimensions**: 1600 × 1200 px

#### Midjourney v6.1 Prompt
```text
High-end commercial product photography featuring three luxury supplement bottles standing together in a neat architectural row on a stepped travertine stone plinth. Left bottle: deep matte forest green glass with satin silver cap. Center bottle: warm sand-beige ceramic with brushed champagne cap. Right bottle: matte charcoal-plum smoked glass with antique bronze cap. In front of the bottles, a neat composition of botanical ingredients: dried tea leaves, tart cherries, chamomile blossoms, and four resting two-tone capsules. Diffuse gallery daylight, clean minimalist ecru background, Cereal magazine aesthetic, shot on Phase One IQ4, 80mm lens --ar 4:3 --style raw --v 6.1 --no plastic, neon, cartoon, 3d render
```

#### Flux.1 Pro Prompt
```text
An architectural three-bottle lineup of the 3NERGY circadian supplement system. Three distinct, beautifully designed bottles stand side by side on natural limestone steps against a calm warm-white studio wall. From left to right: forest green frosted glass (Morning), matte oat-colored ceramic (Midday), and deep smoked plum glass (Night). Each bottle has understated serif and sans-serif typography and a precision-milled metallic cap. Natural soft daylight from a large window on the left, organic materials, tactile authenticity, shot on medium format digital, f/4 aperture.
```

---

## 3. Routine Lifestyle Photography (3 Cards Grid)

### Asset 05: "Built For Daily Flow" (Morning Routine)
- **Target File**: `public/images/routine_couple.png`
- **Slot**: Home Page `RoutineSection` (Card 1)
- **Aspect Ratio**: 4:3 (`--ar 4:3`)
- **Dimensions**: 1200 × 900 px

#### Midjourney v6.1 Prompt
```text
Authentic documentary lifestyle photograph of a young mindful couple in their early 30s in a bright, sunlit Scandinavian kitchen in the morning. Natural linen loungewear in oatmeal and sage tones. They are preparing a morning breakfast with fresh pour-over coffee and natural fruit, smiling warmly and naturally. On the light oak counter sits a minimal forest-green wellness bottle and a glass of water. Morning sunlight streaming through sheer curtains casting soft organic shadows, authentic film photography feel, Kodak Portra 400 grain, 35mm f/2 lens, genuine human connection, unposed, natural lifestyle editorial --ar 4:3 --style raw --v 6.1 --no posed corporate smiles, plastic skin, oversaturation, fake studio lighting
```

#### Flux.1 Pro Prompt
```text
Candid morning lifestyle photo of two partners in a bright, warm architect-designed apartment kitchen. One is pouring fresh water into a glass tumbler next to a forest-green 3NERGY supplement bottle, while the other leans comfortably against the travertine kitchen island in a relaxed cream linen shirt. Soft 8:00 AM sun rays creating warm patches on the wall. Realistic skin textures, natural imperfections, peaceful morning energy, shot on 35mm film camera, Leica M11, natural depth of field, Kinfolk style.
```

---

### Asset 06: "Stress Less, Do More" (Midday Resilience)
- **Target File**: `public/images/routine_stress.png`
- **Slot**: Home Page `RoutineSection` (Card 2) & Testimonial Avatar
- **Aspect Ratio**: 4:3 (`--ar 4:3`)
- **Dimensions**: 1200 × 900 px

#### Midjourney v6.1 Prompt
```text
Editorial candid portrait of an athletic professional in their early 30s taking a mindful midday pause in a sun-drenched architectural design studio filled with fiddle-leaf fig plants. Wearing an earthy olive cotton crewneck, taking a calm drink of water next to a sand-colored ceramic supplement bottle on a clean birch desk with open notebooks. Focused, grounded, calm expression, natural posture, no forced smile. Diffuse noon daylight through expansive industrial loft windows, shot on 50mm f/1.8 lens, natural film texture, authentic contemporary editorial --ar 4:3 --style raw --v 6.1 --no corporate stock photo, cheesy pose, artificial lighting, exaggerated muscles
```

#### Flux.1 Pro Prompt
```text
A natural midday lifestyle photograph of a focused creative taking a break in a minimalist loft workspace. The subject has an expression of calm clarity and renewed energy, holding a clean ceramic mug with both hands. On the desk nearby sits a matte sand-toned bottle and a few capsules. Soft, neutral ambient daylight from floor-to-ceiling windows, subtle shadows, organic materials, linen notebook, shot on Fujifilm GFX 100S, 45mm lens, authentic and unpretentious.
```

---

### Asset 07: "Expert Formulated" (Clinical Rigor & Science)
- **Target File**: `public/images/routine_doctor.png`
- **Slot**: Home Page `RoutineSection` (Card 3) & Science Page
- **Aspect Ratio**: 4:3 (`--ar 4:3`)
- **Dimensions**: 1200 × 900 px

#### Midjourney v6.1 Prompt
```text
Editorial portrait of a female biochemical researcher and preventative wellness physician in her late 30s inside a clean, modern daylight-filled botanical formulation laboratory. Wearing a clean minimalist tailored linen lab coat over neutral knitwear. She is examining pure organic herbal plant extracts and matcha powder on ceramic petri dishes, thoughtful and intelligent expression. Clean oak and stainless steel laboratory interior, natural daylight, glass laboratory beakers with natural botanical infusions in background, shot on 50mm f/2.0, authentic scientific rigor, high-end medical documentary --ar 4:3 --style raw --v 6.1 --no cartoon scientist, glowing blue chemicals, fake test tubes, dramatic sci-fi lighting
```

#### Flux.1 Pro Prompt
```text
Documentary portrait of a clinical scientist in a bright, modern preventative nutrition lab. The scientist is wearing a crisp white lab coat, holding a glass pipettor over raw botanical herbal extracts on a clean marble counter. Soft natural window light illuminates the room, creating clean reflections. No theatrical glowing tubes or blue sci-fi effects—grounded in real pharmaceutical and botanical research. Shot on Sony A7R V with 50mm f/1.4 lens, natural skin tones, serene and credible atmosphere.
```

---

## 4. Banners & Structural Visuals

### Asset 08: Hero Centerpiece Composite
- **Target File**: `public/images/hero_centerpiece.png`
- **Slot**: Circadian Hero Glass Container Centerpiece
- **Aspect Ratio**: 16:9 (`--ar 16:9`) or 3:2 (`--ar 3:2`)
- **Dimensions**: 1920 × 1080 px

#### Midjourney v6.1 Prompt
```text
Commercial centerpiece still of the 3NERGY circadian supplement bottle surrounded by botanical ingredients in still levitation. Forest-green frosted bottle with brushed titanium cap hovering effortlessly over a polished sage-green ceramic dish. Floating around the base are delicate whole tea leaves, dewy organic tart cherries, and dried chamomile flowers with gentle motion stillness. Soft diffuse morning sunlight, ethereal atmospheric mist, calm sage and emerald gradient background, ultra-sharp detail, Hasselblad 100mm, luxury cosmetic campaign --ar 16:9 --style raw --v 6.1 --no heavy neon, cartoon, 3d toy render, hyper-contrast
```

---

### Asset 09: Consistency Gauge / Clinical Consultation Still
- **Target File**: `public/images/doctor_gauge.png`
- **Slot**: Daily Essentials Consistency Banner (Bottom Graphic Column)
- **Aspect Ratio**: 4:3 (`--ar 4:3`)
- **Dimensions**: 1200 × 900 px

#### Midjourney v6.1 Prompt
```text
Editorial documentary photo of a functional medicine doctor in a calm, Scandinavian-style consultation office. The doctor is in a relaxed linen jacket, pointing thoughtfully to an elegant minimalist circadian wellness diagram on an unvarnished oak desk while talking to a patient. Soft daylight from a garden window, potted olive tree in background, authentic warm human interaction, high credibility, shot on 35mm f/2.0, natural colors, muted sage and cream tones --ar 4:3 --style raw --v 6.1 --no scary hospital equipment, fake stethoscope around neck, staged stock photo smile
```

---

### Asset 10: Green CTA Atmospheric Banner
- **Target File**: `public/images/green_cta_banner.png`
- **Slot**: Home Page `GreenCtaSection` (Background Texture)
- **Aspect Ratio**: 21:9 (`--ar 21:9`) or 16:9 (`--ar 16:9`)
- **Dimensions**: 2400 × 1000 px

#### Midjourney v6.1 Prompt
```text
Wide panoramic atmospheric landscape of a tranquil pine and cedar forest canopy shrouded in gentle morning fog. Deep emerald, forest green, and moss tones with delicate golden rays of early morning sunlight filtering through mist. Cinematic, calm, grounded, high dynamic range, national geographic quality, tranquil restorative mood --ar 21:9 --style raw --v 6.1 --no oversaturated fantasy colors, fairy lights, CGI
```

---

## 5. Verified Customer Testimonial Portraits

### Asset 11: Elena Rostova (Product Strategist, Seattle)
- **Target File**: `public/images/testimonial_avatar.png` (Elena)
- **Slot**: Testimonial Story 1
- **Aspect Ratio**: 1:1 (`--ar 1:1`)
- **Dimensions**: 400 × 400 px

#### Midjourney v6.1 Prompt
```text
Candid close-up editorial portrait of a 32-year-old creative woman with natural dark hair tied in a loose bun, wearing an oatmeal merino wool sweater. Authentic warm smile, subtle laughter lines, natural skin texture with zero airbrushing. Soft window lighting in an architecturally designed home in Seattle with rain on the glass in background, shot on 85mm f/1.8, authentic 35mm film grain, modern editorial --ar 1:1 --style raw --v 6.1 --no plastic skin, over-retouched, studio glamour, white teeth glow
```

---

### Asset 12: Marcus Vance (Endurance Runner, Austin)
- **Target File**: `public/images/testimonial_marcus.png`
- **Slot**: Testimonial Story 2
- **Aspect Ratio**: 1:1 (`--ar 1:1`)
- **Dimensions**: 400 × 400 px

#### Midjourney v6.1 Prompt
```text
Candid portrait of a 34-year-old athletic male endurance runner resting post-trail run. He is wearing a dark sage running tee, light perspiration, authentic healthy glow, genuine relaxed expression looking into camera. Morning Texas hill country outdoor ambient light, soft blurred nature background, shot on 85mm f/2, authentic, unposed, grounded --ar 1:1 --style raw --v 6.1 --no bodybuilder pose, aggressive grimace, hyper-dramatic lighting
```

---

### Asset 13: Dr. Sarah Chen, PT (Physical Therapist, Chicago)
- **Target File**: `public/images/testimonial_sarah.png`
- **Slot**: Testimonial Story 3
- **Aspect Ratio**: 1:1 (`--ar 1:1`)
- **Dimensions**: 400 × 400 px

#### Midjourney v6.1 Prompt
```text
Warm editorial portrait of a 36-year-old Asian female physical therapist in a bright, modern wellness studio. She wears a minimal beige linen shirt, genuine intelligent and approachable expression, natural hair and subtle smile. Warm wooden interior, soft daylight, 85mm f/1.8 lens, high credibility, natural aesthetic --ar 1:1 --style raw --v 6.1 --no white hospital coat, fake clipboard, staged medical model
```

---

## 6. Raw Ingredient Macro Stills (For /science Page & Modals)

| Ingredient | Filename | Midjourney Prompt Snippet |
| :--- | :--- | :--- |
| **Ceremonial Uji Matcha** | `ingredient_matcha.png` | `Macro still-life of vibrant ceremonial grade organic matcha green tea powder with dried whole green tea leaves on a handcrafted textured ceramic saucer. Diffuse soft studio daylight, 100mm macro, tactile powdery texture --ar 1:1 --style raw --v 6.1` |
| **Montmorency Tart Cherry** | `ingredient_cherry.png` | `Macro photography of whole organic dried Montmorency tart cherries and raw chelated magnesium crystal chunks on a slab of dark slate. Natural water droplets, deep ruby red and stone gray, soft natural lighting --ar 1:1 --style raw --v 6.1` |
| **Chamomile & L-Theanine** | `ingredient_chamomile.png` | `Macro detail of delicate dried whole chamomile flowers and pure white amino acid L-Theanine crystals on textured handmade mulberry paper. Soft golden hour side lighting, shallow depth of field --ar 1:1 --style raw --v 6.1` |
| **Dual-Tone Bio Capsules** | `capsule_macro.png` | `Ultra-macro photograph of two 3NERGY circadian capsules resting on rough travertine. One capsule has dark emerald matcha powder, the other has warm copper electrolytes. Translucent vegan shell, studio lighting --ar 1:1 --style raw --v 6.1` |

---

## 7. Recommended Generation Parameters & Quick Cheat Sheet

### Midjourney v6.1 Recommended Flags
- `--style raw`: Crucial to prevent Midjourney's default hyper-glossy, oversaturated AI aesthetic.
- `--c 0` (or `--c 2`): Low chaos keeps the output clean, reliable, and strictly aligned with the prompt.
- `--s 50` to `--s 150`: Lower stylize values keep packaging, labels, and skin realistic rather than painterly.

### Flux.1 Pro Recommended Settings
- **Guidance Scale**: `3.0` to `3.5` (keeps photorealism grounded without prompt artifacts).
- **Steps**: `28` to `35` steps.
- **Aspect Ratio Presets**: `4:5` (Product cards), `4:3` (Routine lifestyle), `16:9` (Hero/Banner), `1:1` (Avatars/Macros).

### File Format & Compression Best Practices
When placing generated images into `public/images/`:
1. Save as high-quality **WebP** or optimized **PNG**.
2. Run through `sharp` or an optimizer to target ~80-150 KB per card image, and ~250-400 KB for wide hero banners.
3. Ensure the filenames match the references in `src/data/products.ts`, `routine-section.tsx`, and `daily-essentials-section.tsx`.
