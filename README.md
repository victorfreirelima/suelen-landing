# Suelen Fonteles Portfolio

A Next.js (App Router) + TypeScript + Tailwind + Sanity CMS bilingual portfolio with ISR and localized routing.

## 🚀 Getting Started

1. **Clone the repository.**
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Setup environment variables:**
   - Copy `.env.example` to `.env.local`.
   - Add your Sanity Project ID and Dataset.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Access the site:**
   - Frontend: `http://localhost:3000/en` or `http://localhost:3000/pt-br`
   - Sanity Studio: `http://localhost:3000/studio`

## 📝 Content Management (Sanity)

Marketing can update everything without code by visiting `/studio`.

### Singleton Documents
- **Landing Page**: Manage all sections including Hero, Impact, Expertise, Frameworks, Journey, Why Work With Me, Final CTA, and SEO.
- **Site Settings**: Manage global brand name and social links.

### Bilingual Editing
Every text field in Sanity has two sub-fields: `English` and `Portuguese (Brazil)`. 
- Content in the English field renders on `/en`.
- Content in the Portuguese field renders on `/pt-br`.

## 🌍 SEO & Localization
- Routes drive the language selection.
- Metadata (Titles, Descriptions, OG Images) are fetched per-locale from the CMS.
- Standard security headers (HSTS, CSP-ready, XSS Protection) are configured in `next.config.ts`.

## ⚡ Deployment (Vercel)
This project is ready to be deployed to Vercel. 
- Images are optimized with `next/image` and Sanity's Edge CDN.
- ISR revalidates content every 60 seconds.
