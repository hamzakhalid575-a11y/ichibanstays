# Ichiban Stays — Custom Next.js + Firebase Website

Complete custom-coded Next.js 14 (App Router, TypeScript, Tailwind CSS) translation of [ichibanstays.com](https://ichibanstays.com) with **Firebase Firestore** (lead & property projection capture) and **Firebase Authentication** (Landlord & Admin Portal), ready for one-click deployment to **Vercel** or **Netlify**.

## What is in here

A replica of the WordPress site at ichibanstays.com: same URLs (with trailing slashes), page text, titles, meta
descriptions, Open Graph / Twitter tags, schema.org JSON-LD, sitemaps (`/sitemap_index.xml`, `/page-sitemap.xml`,
`/post-sitemap.xml`), `robots.txt`, `/go/whatsapp/` redirect and 404 page.

- **Content** comes from `src/content/site.json` (pages, posts, menu), built from a WordPress export with
  `python3 -I scripts/build-content.py export.xml`. Home and `/book-a-consultation/` are hand-built React; every other page
  renders through `src/app/[slug]/page.tsx`.
- **SEO data** (`src/content/live-meta.json`) was crawled from the live pages (title, description, canonical, Open Graph,
  JSON-LD) and is served unchanged so rankings carry over.
- **Images** live in `public/wp-content/uploads/` with their WordPress paths, so no WordPress hosting is needed.
- **Forms** write to Firestore: `projections` (home page lead form) and `consultations` (booking form, with the same
  calendar and half-hour slots as the WordPress version). `firestore.rules` lets visitors create documents and only
  `contact@ichibanstays.com` read them. Leads show up in `/portal/`.
- **Cookie consent + analytics**: `ConsentBanner` shows the same Accept / Deny / View preferences dialog and loads Google
  Analytics (`GT-NFB29244`) only after the visitor accepts statistics cookies. Call, WhatsApp, email, CTA and
  form-submit events are sent as on the live site.
- **Mobile quick-contact bar** (Call / WhatsApp / Free Assessment) matches the WordPress mobile bar.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure Firebase:**
   Copy `.env.example` to `.env.local` and paste your Firebase Web SDK keys from the Firebase Console:
   ```bash
   cp .env.example .env.local
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Deploy to Vercel or Netlify:**
   - **Vercel:** Import the Git repository in Vercel; `vercel.json` is pre-configured for London (`lhr1`) edge routing.
   - **Netlify:** Connect the repository in Netlify; `netlify.toml` is pre-configured with `@netlify/plugin-nextjs`.
