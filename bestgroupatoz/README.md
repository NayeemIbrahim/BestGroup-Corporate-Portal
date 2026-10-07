# BestGroup Corporate Portal — Frontend

Next.js 16 App Router frontend for the **BestGroup Headless CMS & Corporate Portal**, proudly developed by **Nefcon IT**.

## 🚀 Overview

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS with custom enterprise themes (Theme A & Theme B)
- **State & Integration**: Centralized API client connecting to Laravel 11 Backend (`http://127.0.0.1:8000/api`)
- **Key Features**:
  - Dynamic Block-Based CMS rendering (`Hero`, `Brands`, `Services`, `Contact`)
  - Authenticated Investor Portal with Sanctum Bearer Token management
  - High-performance Server-Side Rendering (SSR) & SEO metadata hydration

## 🛠️ Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   Create or verify `.env.local`:
   ```env
   NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
   ```

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Key Directories

- `app/`: Next.js App Router pages (Home, Dynamic `[slug]`, `login`, `investor-portal`)
- `components/`: UI and dynamic CMS block renderer components (`BlockRenderer`, `LoginForm`, `ThemeA`, `ThemeB`)
- `lib/`: API service helper functions for CMS hydration

---
© 2026 BestGroup. Developed by **Nefcon IT**.
