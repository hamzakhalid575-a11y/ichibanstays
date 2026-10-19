# Ichiban Stays — Custom Next.js + Firebase Website

Complete custom-coded Next.js 14 (App Router, TypeScript, Tailwind CSS) translation of [ichibanstays.com](https://ichibanstays.com) with **Firebase Firestore** (lead & property projection capture) and **Firebase Authentication** (Landlord & Admin Portal), ready for one-click deployment to **Vercel** or **Netlify**.

## Features Included
- **Exact Ichiban Stays Content & Architecture**:
  - Homepage with Hero, 98% occupancy stats bar, 5-Step Process, £2M+ revenue metrics, Handpicked Properties showcase, and About Us section.
  - Interactive **Get Your Free Income Projection** form wired directly to Firebase Firestore (`projections` collection) with instant revenue estimation.
  - **5 Dedicated Service Pages** (`/services/[slug]`): Short-Term Let Management, Airbnb Management, Serviced Accommodation, Guaranteed Rent, and Services for Landlords.
  - **28 Dynamic UK Location Pages** (`/areas/[slug]`): All 11 London neighbourhoods (Mayfair, Belgravia, Chelsea, Kensington, Notting Hill, Battersea, Islington, Camden, Covent Garden, Shoreditch, Canary Wharf) and 17 UK cities (Manchester, Birmingham, Liverpool, Leeds, Bristol, Newcastle, Nottingham, Sheffield, Leicester, Oxford, Cambridge, Brighton, Bath, York, Edinburgh, Glasgow, Cardiff).
  - **9 Landlord Guides** (`/guides/[slug]`): Including *The 90-Day Rule in London*, *Management Fees Explained*, *Airbnb vs Long-Term Rental*, and more.
  - **Firebase Auth & Firestore Admin Portal** (`/portal`): Manage incoming landlord projection leads, filter statuses (`new`, `contacted`, `assessed`), and export data.

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
