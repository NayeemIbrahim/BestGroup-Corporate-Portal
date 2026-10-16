# 🏢 BEST GROUP Corporate Portal — Frontend (`bestgroupatoz`)

Next.js 16 (App Router) enterprise frontend for the **BEST GROUP Headless CMS & Corporate Portal**, proudly developed by **[Nefcon IT](https://nefcon.it)**.

---

## 🚀 Overview & Capabilities

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript 5
- **Styling**: Tailwind CSS v4 with custom enterprise themes (Theme A & Theme B)
- **Animation Engine**: Framer Motion for sleek micro-interactions and transitions
- **Iconography**: Lucide React
- **Integration**: Resilient multi-tier API client connecting to Laravel 11 (`/api/v1`) with automatic fallback to production endpoints
- **Key Modules**:
  - **Dynamic Theme Switcher**: Instant switching between `theme-a` (Corporate Luxe / RFL Style) and `theme-b` (Modern Neo-Tech Studio)
  - **Block-Based CMS Engine**: Dynamic rendering of Hero, Brands, Services, Contact, and RichText blocks
  - **Dedicated Business Wings Architecture (`/wings/[slug]`)**: Deep-dive pages for all 6 core listed companies
  - **Interactive RFP Engine**: In-depth enterprise proposal request form with step-based feedback
  - **Investor Portal & Desk**: Confidential financial reporting & Sanctum bearer token authentication
  - **Enterprise SEO & OpenGraph**: Per-page dynamic metadata, canonical links, and high-DPI social cards

---

## 🏢 The 6 Business Wings Showcase

The portal provides dedicated, bespoke showcases for each of BEST GROUP's core operating companies:

| # | Company Name | Slug | Sector | Primary Focus |
|---|---|---|---|---|
| 01 | **Best Product International Ltd.** | `best-product-international-ltd` | E-Commerce & Retail | Nationwide digital fulfillment, automated warehouses & authentic product sourcing |
| 02 | **Best South City Ltd.** | `best-south-city-ltd` | Real Estate & Housing | Master-planned residential communities, modern living developments & townships |
| 03 | **Best Commercial & Builders Ltd.** | `best-commercial-builders-ltd` | Commercial & Construction | Landmark commercial towers, LEED-compliant high-rises & mega-hub engineering |
| 04 | **Best Model Pharmacy Ltd.** | `best-model-pharmacy-ltd` | Healthcare & Pharma | DGDA certified cold-chain supply, clinical pharmacy chains & 100% authentic medicine |
| 05 | **Best International Overseas** | `best-international-overseas` | Mobility, Travel & Tours | Overseas employment consultancy, luxury corporate tours, chartered flights & Hajj/Umrah |
| 06 | **Best Group (Holding & Governance)** | `best-group-holding` | Holding & Governance | Board oversight, ethics, compliance, investor relations & cross-sector synergies |

Each wing page includes:
- **Hero & Metrics**: Core KPIs, annual milestones, customer satisfaction rates, and operational capacity.
- **Divisions & Operating Units**: Detailed capability breakdown with icon badges and key features.
- **Flagship Projects Portfolio**: Showcase cards with project status, specs, and gallery imagery.
- **Executive Leadership Endorsement**: Quotes from board leadership and division heads.
- **Interactive RFP Form**: Real-time proposal inquiry system with wing pre-selection.
- **Enterprise FAQ Accordion**: Expandable answers to common vendor, client, and investor questions.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js**: v18.17+ or v20+
- **npm**: v9+ (or pnpm / yarn)
- **Backend API**: Running Laravel instance (via `php artisan serve` on port 8000)

### 2. Installation
```bash
# From the bestgroupatoz directory:
npm install
```

### 3. Environment Variables
Create `.env.local` in this directory:
```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api/v1
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
PORT=3000
```

For production builds, `.env.production` is pre-configured with:
```env
NEXT_PUBLIC_API_URL=https://admin.bestgroupatoz.com/api/v1
NEXT_PUBLIC_BACKEND_URL=https://admin.bestgroupatoz.com
PORT=3000
```

### 4. Running the Dev Server
```bash
npm run dev
```
Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 📁 Project Structure

```
bestgroupatoz/
├── app/
│   ├── layout.tsx                # Global HTML shell, typography, and meta icons
│   ├── globals.css               # Tailwind CSS base styles & custom scrollbars
│   ├── page.tsx                  # Home page querying Laravel API + BlockRenderer
│   ├── [slug]/page.tsx           # Dynamic CMS page router with automatic wing redirects
│   ├── wings/[slug]/             # Dynamic 6-wing showcase architecture
│   │   ├── page.tsx              # Deep-dive presentation engine
│   │   ├── WingInquiryForm.tsx   # Interactive RFP form
│   │   └── WingFaqAccordion.tsx  # Dynamic accordion
│   ├── investor-portal/page.tsx  # Investor desk with Sanctum token validation
│   └── login/page.tsx            # Corporate authentication portal
│
├── components/
│   ├── Navbar.tsx                # Universal navbar switcher (delegates to active theme)
│   ├── Footer.tsx                # Universal footer switcher (delegates to active theme)
│   ├── BlockRenderer.tsx         # Dynamic block router (Hero, Brands, Services, Contact)
│   ├── LoginForm.tsx             # Interactive login card with state handling
│   └── themes/
│       ├── theme-a/              # Corporate Luxe (Ruby/Gold Executive Theme)
│       │   ├── Header.tsx        # Top banner, mega menus, search modal & mobile drawer
│       │   ├── Footer.tsx        # Executive footer with listed companies & liaison
│       │   ├── HeroBlock.tsx     # High-impact corporate hero
│       │   ├── BrandsBlock.tsx   # Interactive cards for all 6 business wings
│       │   ├── ServicesBlock.tsx # Core conglomerate capabilities
│       │   ├── ContactBlock.tsx  # HQ contact liaison with interactive form
│       │   ├── ChairmanMessageBlock.tsx # Executive message from M.A. Mizanur Rahman
│       │   ├── FaqBlock.tsx      # Corporate FAQ
│       │   └── RichTextBlock.tsx # Editorial markdown/HTML renderer
│       └── theme-b/              # Neo-Tech Studio (Emerald Modernist Theme)
│           ├── Header.tsx        # Floating pill navigation
│           ├── Footer.tsx        # Monogram watermark footer
│           ├── HeroBlock.tsx     # Split-screen typography hero
│           ├── BrandsBlock.tsx   # Minimalist grid
│           ├── ServicesBlock.tsx # Capabilities list
│           └── ContactBlock.tsx  # Clean contact liaison
│
├── data/
│   └── wings.ts                  # Comprehensive data dictionary for all 6 wings
│
├── lib/
│   └── api.ts                    # Resilient API client with multi-step fallback
│
├── public/
│   ├── images/
│   │   ├── logo.png              # Primary official brand logo (transparent background)
│   │   ├── logo-horizontal.png   # Full horizontal logo for navigation headers & footers
│   │   ├── logo-icon.png         # Circular official emblem mark
│   │   └── chairman.jpg          # Executive portrait of Chairman M.A. Mizanur Rahman
│   ├── favicon.ico               # 256x256 multi-resolution icon
│   └── favicon.png               # PNG browser tab icon
│
├── types/
│   └── cms.ts                    # Full TypeScript schema for CMS API responses & blocks
├── package.json
└── tsconfig.json
```

---

## 🎨 Official Brand Assets

All branding graphics have been professionally modified to feature pure transparent alpha backgrounds for flawless integration across dark modes and glassmorphic headers:

- **Horizontal Logo**: `/public/images/logo-horizontal.png` — Used in Navbar and Footer.
- **Square Emblem**: `/public/images/logo-icon.png` — Used in floating pills and mobile navigation.
- **Official Crest**: `/public/images/logo.png` — Used in high-impact presentation cards.
- **Browser Icons**: `app/icon.png`, `app/apple-icon.png`, `public/favicon.ico`.

---

## 🚢 Production Build & Deployment

```bash
# 1. Produce optimized production bundle
npm run build

# 2. Start the production server
npm start
```

### Production URLs:
- **Live Portal**: `https://bestgroupatoz.com`
- **Backend Admin & API**: `https://admin.bestgroupatoz.com`

---

© 2026 **BEST GROUP Holdings Ltd.** All rights reserved.  
Engineered with precision by **[Nefcon IT](https://nefcon.it)**.
