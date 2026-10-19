# Ichiban Stays — Custom Next.js + Firebase Website

Complete custom-coded Next.js 14 (App Router, TypeScript, Tailwind CSS) translation of [ichibanstays.com](https://ichibanstays.com) with **Firebase Firestore** (lead & property projection capture) and **Firebase Authentication** (Landlord & Admin Portal), ready for one-click deployment to **Vercel** or **Netlify**.

## Content

All pages mirror the live WordPress site (same URLs, trailing slashes, titles, meta descriptions, nav):
home, about, contact, FAQs (landlord + guest), services (short-term let, Airbnb, serviced accommodation,
guaranteed rent, holiday let, landlords), Areas We Cover, 38 location pages (`/property-management-<area>/`),
landlord guides and 10 posts.

- `scripts/build-content.py` converts a WordPress export (Tools > Export) into `src/content/site.json`
  (`python3 -I scripts/build-content.py export.xml`). Re-run it to refresh content.
- Home (`src/app/page.tsx`) and `/book-a-consultation/` are hand-built from the Elementor layout.
- Everything else renders through `src/app/[slug]/page.tsx`.
- Lead forms write to Firestore: `projections` (home / landlord pages) and `consultations` (booking page).
- Images are still served from `ichibanstays.com/wp-content/uploads`; download them into `public/` before the WordPress site is switched off.

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
