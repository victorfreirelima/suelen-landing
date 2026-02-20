# Pixel-Perfect Checklist

This document details the exact design tokens, typography, spacing, and styling constraints extracted from the reference design. These rules define the "pixel-perfect" boundaries.

## 1. Typography
- **Headings (H1):** `64px` size, `1.02` line-height, `-0.02em` letter-spacing, `800` (extrabold) weight.
- **Headings (H2):** `28px` to `36px` size, `1.2` line-height, `-0.01em` letter-spacing, `800` weight.
- **Body Text:** `13px` to `17px` size, `1.65` to `1.8` line-height, `normal` letter-spacing, `400` weight. Text color is strictly `#4B5563`.
- **Badges/Labels:** `9.5px` to `11px` size, uppercase, `0.05em` to `0.08em` letter-spacing, `700` weight.

## 2. Colors & Design Tokens
- **Brand Blue:** `#205BF0` (Used for "Paid Media" highlight, timeline dates, checkmarks, primary active states).
- **Brand Dark:** `#0A0F1F` (Used for headers, primary CTA buttons, number badges).
- **Secondary Text:** `#4B5563` (Used for all standard paragraph and list text).
- **Subtle Backgrounds:** `#EEF2FF`, `#EFF6FF` (Used for gradient stops in Hero, badge backgrounds, and icon containers).
- **Subtle Borders:** `#E5E7EB`, slightly translucent variants (e.g., `#E5E7EB/80`).

## 3. Spacing & Layout
- **Container Max-Width:** Strict `1200px` for all structural content (`max-w-[1200px]`).
- **Section Paddings:** Top mapping to `py-[140px]` or `py-[190px]` for Hero, and standardized `py-[80px]` or `py-[100px]` for body sections.
- **Micro-Paddings:** Buttons `px-[24px] py-[14px]` or specific heights like `h-[44px]` or `h-[48px]`. Card inset paddings tightly bound (e.g., `p-[40px]`).

## 4. Cards, Borders, & Shadows
- **Card Radius:** Standardized `24px` for large containers (Hero image, floating Framework card, Testimonial card). Smaller cards use `16px`. Buttons use `10px` or `8px`.
- **Shadows:** 
  - Primary shadow: `0 20px 40px -15px rgba(0,0,0,0.08)` (Hero image, floating side card).
  - Hover shadow: `0 8px 30px -5px rgba(0,0,0,0.06)` (Expertise cards).
  - Button shadow: `0 4px 14px 0 rgba(0,0,0,0.1)` (Primary dark buttons).
- **Borders:** Consistent `1px` translucent borders (`#E5E7EB/60` or `white/10`) to separate cards from backgrounds.

## 5. Known "Gotchas"
- **Next/Image Rendering:** The `object-cover` and `aspect-ratio` must be carefully tuned (`aspect-[4/4.5]`). Use `bg-[#f1f1f1]` translation to simulate the floating back-card.
- **Font Rendering:** Because OS font rendering engines differ, strict `letter-spacing` and `line-height` constraints are required to prevent text from wrap-breaking differently than the reference image.
- **Language Switch:** Ensure `pickLocalized` does not inadvertently alter DOM structure or CSS string literals.
