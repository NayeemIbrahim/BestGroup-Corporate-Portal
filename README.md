<div align="center">

# 🏢 BestGroup Corporate Portal

### Enterprise Headless CMS & Centralized Investor Portal

**Developed by [Nefcon IT](https://nefcon.it)**

[![Laravel](https://img.shields.io/badge/Laravel-11-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](https://laravel.com)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Filament](https://img.shields.io/badge/Filament-v3-FDAE4B?style=for-the-badge&logo=filament&logoColor=white)](https://filamentphp.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Version](https://img.shields.io/badge/Version-v1.0.0-22C55E?style=for-the-badge)](https://github.com/NayeemIbrahim/BestGroup-Corporate-Portal/releases)

</div>

---

## 📖 Overview

**BestGroup Corporate Portal** is a production-grade, enterprise-level monorepo built around a **Headless CMS** architecture. It serves as the central digital platform for BestGroup Holdings — combining a powerful admin back-office for content managers, an investor-only secure portal for stakeholders, and a fully dynamic, theme-switchable public-facing website.

The system is purpose-built to be flexible: the backend drives everything through APIs, while the frontend renders pages dynamically based on the active theme selected in the CMS, with no frontend redeploy required for content or theme changes.

---

## ✨ Core Features

| Feature | Description |
|---|---|
| 🎨 **Multi-Theme Engine** | Switch between `theme-a` and `theme-b` from the admin panel — no code changes needed |
| 🧱 **Visual Block Builder** | Drag-and-drop page builder with Hero, Brands, Services, and Contact blocks |
| 👥 **Role-Based Access (RBAC)** | Three distinct roles: `Super Admin`, `Staff`, and `Investor` with isolated dashboards |
| 💼 **Investor Portal** | A clean, private dashboard for investors to access confidential `Investment Reports` |
| 🔐 **API Authentication** | Laravel Sanctum token-based auth for secure Next.js ↔ Laravel communication |
| 📄 **SEO Management** | Per-page `seo_title` and `seo_description` fields managed from the CMS |
| 🔌 **ERP Integration Ready** | Placeholder architecture for connecting to Odoo, n8n, or any external CRM/ERP |
| 👤 **User Profile Page** | Built-in Filament user profile for all portal users |

---

## 🏗️ Architecture

This project uses a **Monorepo** structure with two fully decoupled applications:

```
BestGroup-Corporate-Portal/
├── backend/          # Laravel 11 — Headless CMS API + Filament v3 Admin Panel
│   ├── app/
│   │   ├── Filament/Resources/   # Page, Theme, Setting, InvestmentReport
│   │   ├── Http/Controllers/Api/ # AuthController, PageController, IntegrationController
│   │   ├── Models/               # Page, PageBlock, Theme, Setting, InvestmentReport, User
│   │   └── Services/             # ExternalERPService (ERP integration placeholder)
│   ├── database/migrations/
│   └── routes/api.php
│
├── frontend/         # Next.js 16 (App Router) — Public-facing corporate website
│   ├── app/
│   │   ├── [slug]/page.tsx       # Dynamic CMS-driven pages
│   │   ├── login/page.tsx        # Authentication page
│   │   └── api/auth/login/       # Next.js API route (proxies to Laravel)
│   ├── components/
│   │   ├── themes/theme-a/       # Corporate theme variant A
│   │   ├── themes/theme-b/       # Corporate theme variant B
│   │   ├── BlockRenderer.tsx     # Dynamic block rendering engine
│   │   └── LoginForm.tsx
│   ├── lib/api.ts                # Typed API client for Laravel
│   └── types/cms.ts              # Full TypeScript type definitions
│
├── README.md
├── .gitignore
└── deployment_guide.txt          # Full VPS + cPanel deployment guide
```

### How It Works

```
[ Next.js Frontend ]
       │  fetches GET /api/v1/page/{slug}
       ▼
[ Laravel REST API ]
       │  returns page + active theme + blocks + settings
       ▼
[ BlockRenderer Engine ]
       │  resolves the active theme directory (e.g., "theme-a")
       ▼
[ Themed Components ]
  Renders Hero → Brands → Services → Contact blocks with the correct theme's UI
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Backend Framework** | Laravel 11 (PHP 8.2+) |
| **Admin Panel** | Filament PHP v3 |
| **Database** | SQLite (dev) / MySQL (production) |
| **API Auth** | Laravel Sanctum |
| **Permissions** | Spatie Laravel Permission |
| **Frontend Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **Icons** | Lucide React |

---

## 🚀 Local Development Setup

### Prerequisites

- PHP 8.2+
- Composer
- Node.js 18+ & npm
- Git

---

### 1. Clone the Repository

```bash
git clone https://github.com/NayeemIbrahim/BestGroup-Corporate-Portal.git
cd BestGroup-Corporate-Portal
```

---

### 2. Backend Setup (Laravel)

```bash
# Navigate to the backend
cd backend

# Install PHP dependencies
composer install

# Set up environment
cp .env.example .env
php artisan key:generate
```

Open `backend/.env` and configure your database. For local development, **SQLite is pre-configured**. For MySQL, update:

```env
APP_NAME=BestGroup
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=bestgroup_db
DB_USERNAME=root
DB_PASSWORD=your_password
```

```bash
# Run database migrations
php artisan migrate

# Install Spatie Permissions + Sanctum
php artisan vendor:publish --provider="Spatie\Permission\PermissionServiceProvider"
php artisan install:api
php artisan migrate

# Install Filament Shield (roles & permissions for Filament)
php artisan shield:install

# Create the first Super Admin user
php artisan make:filament-user

# Seed sample data (optional)
php artisan db:seed

# Link storage
php artisan storage:link

# Start the backend server
php artisan serve
```

> The backend will be available at **http://localhost:8000**
> The Filament admin panel will be at **http://localhost:8000/admin**

---

### 3. Frontend Setup (Next.js)

Open a **new terminal window**:

```bash
# Navigate to the frontend
cd frontend

# Install Node dependencies
npm install
```

Create your local environment file:

```bash
# Create frontend/.env.local
echo "NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api/v1" > .env.local
echo "NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000" >> .env.local
```

```bash
# Start the frontend dev server
npm run dev
```

> The frontend will be available at **http://localhost:3000**

---

## 👥 User Roles & Access

| Role | Access |
|---|---|
| **Super Admin** | Full access — CMS, Themes, Settings, Navigation, Media, Investment Reports, User Management |
| **Staff** | CMS access — Pages, Themes, Settings (no Investment Reports) |
| **Investor** | Restricted — Clean dashboard showing Investment Reports and their Profile only |

After running `php artisan shield:install`, assign roles to users through the Filament admin panel under **Shield → Roles**.

---

## 🌐 API Reference

All API endpoints are prefixed with `/api`.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/v1/page/{slug}` | None | Fetch full CMS page payload (blocks, theme, settings) |
| `POST` | `/api/login` | None | Authenticate and receive a Sanctum bearer token + user role |
| `POST` | `/api/integration/sync` | `X-API-KEY` header | Trigger external ERP/CRM data sync |

### Example Login Request

```bash
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"email": "admin@bestgroup.com", "password": "password"}'
```

**Response:**
```json
{
  "user": {
    "id": 1,
    "name": "Admin",
    "email": "admin@bestgroup.com",
    "roles": ["Super Admin"]
  },
  "token": "1|abc123xyz..."
}
```

---

## 🔌 ERP / CRM Integration

The project includes a ready-made architecture for connecting to external systems like **Odoo ERP**, **Salesforce CRM**, or **n8n** automation workflows.

- **`app/Services/ExternalERPService.php`** — Base service class using Laravel's HTTP client
- **`app/Http/Controllers/Api/IntegrationController.php`** — Secured endpoint using `X-API-KEY`

To connect a real ERP, set `EXTERNAL_INTEGRATION_KEY=your-secret` in `.env` and implement the HTTP call inside `ExternalERPService::syncData()`.

---

## 📦 Deployment

A comprehensive deployment guide covering **VPS (Ubuntu + Nginx + PM2)** and **Shared Hosting (cPanel)** setups is included at [`deployment_guide.txt`](./deployment_guide.txt).

**Quick Production Summary:**

```bash
# Backend
composer install --no-dev --optimize-autoloader
php artisan migrate --force
php artisan config:cache && php artisan route:cache && php artisan view:cache

# Frontend
npm ci && npm run build && npm start
```

**Recommended domain structure:**
- Frontend: `https://bestgroup.com`
- Backend API + Admin: `https://api.bestgroup.com`

---

## 🌿 Version Control (GitFlow)

This repository follows **GitFlow** branching and **Semantic Versioning**.

```
main ──────────────────────────────── (stable, production releases)
  └─► develop ────────────────────── (active integration branch)
          └─► feature/your-feature ─ (new features, branch from develop)
          └─► hotfix/urgent-fix ───── (urgent fixes, branch from main)
```

| Branch | Purpose |
|---|---|
| `main` | Always production-ready. Never commit directly. |
| `develop` | Active development. All features merge here first. |
| `feature/*` | Branch from `develop`. One feature per branch. |
| `hotfix/*` | Branch from `main`. Merges into both `main` and `develop`. |

**Current release:** `v1.0.0` — Initial release of BestGroup Headless CMS & Corporate Portal.

---

## 📄 License

This project is proprietary software developed exclusively for **BestGroup Holdings** by **Nefcon IT**. All rights reserved.

---

<div align="center">

Developed with ❤️ by **[Nefcon IT](https://nefcon.it)**

</div>
