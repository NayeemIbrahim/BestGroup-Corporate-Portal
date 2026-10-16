# 🏢 BEST GROUP Headless CMS & REST API Backend

Enterprise **Laravel 11** REST API and **Filament v3** Administrative Back-Office powering the **BEST GROUP Corporate Portal**, developed by **[Nefcon IT](https://nefcon.it)**.

---

## 📖 Overview

The backend serves as the centralized digital nervous system for **BEST GROUP Holdings Ltd.**, driving:
1. **Public CMS REST API**: Powers the Next.js frontend (`/api/v1/page/{slug}`) with dynamically assembled page blocks, active themes, and global company identity settings.
2. **Filament v3 Administrative Panel**: An intuitive, secure administrative office (`/admin`) for corporate executives and content editors to manage pages, themes, media, and settings without code changes.
3. **Investor Relations & Reports**: Confidential financial statements and quarterly filings managed under restricted role-based access.
4. **Enterprise ERP / CRM Integration Gateway**: Secured data sync endpoints (`/api/integration/sync`) for Odoo ERP, CRM, or n8n workflow automation.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Laravel 11.x (PHP 8.2+) |
| **Admin Back-Office** | Filament PHP v3.2 |
| **API Authentication** | Laravel Sanctum v4.x (Bearer Tokens) |
| **Role-Based Access (RBAC)** | Spatie Laravel Permission v6.x |
| **Database** | SQLite (local development) / MySQL (production) |
| **Assets & Bundling** | Vite 6 + Tailwind CSS |

---

## 🧱 Data Architecture & Core Models

| Model | Table | Purpose |
|---|---|---|
| **`Page`** | `pages` | Stores page identity (`title`, `slug`, `seo_title`, `seo_description`, `is_published`). |
| **`PageBlock`** | `page_blocks` | Flexible polymorphic JSON block builder (`hero`, `brands`, `services`, `contact`, `rich_text`, `faq`, `chairman_message`). |
| **`Theme`** | `themes` | Controls multi-theme switching (`theme-a` Corporate Luxe, `theme-b` Modernist Studio). Automatically enforces single-active theme constraint. |
| **`Setting`** | `settings` | Key-value store for global conglomerate data (`site_identity`, `social_links`, contact hotlines, headquarters address). |
| **`InvestmentReport`** | `investment_reports` | Quarterly filings and financial PDF documents for accredited investors. |
| **`User`** | `users` | Corporate users with Spatie roles (`Super Admin`, `Staff`, `Investor`) and Sanctum API tokens. |

---

## 🌐 API Reference

All API routes are served under the `/api` prefix.

| Method | Endpoint | Auth | Description |
|---|---|---|---|
| `GET` | `/api/v1/page/{slug}` | None | Retrieve complete page payload (blocks, active theme, settings) |
| `POST` | `/api/login` | None | Authenticate credentials and receive Sanctum bearer token + user roles |
| `POST` | `/api/integration/sync` | `X-API-KEY` | Trigger external ERP / CRM data synchronization |

### Sample Page Payload Request:
```bash
curl -X GET http://127.0.0.1:8000/api/v1/page/home \
  -H "Accept: application/json"
```

**JSON Response Structure:**
```json
{
  "success": true,
  "data": {
    "page": {
      "id": 1,
      "title": "BEST GROUP - Excellence in Every Endeavor",
      "slug": "home",
      "meta_title": "BEST GROUP | Excellence in Every Endeavor",
      "meta_description": "Enterprise portfolio of 6 listed companies..."
    },
    "theme": {
      "id": 1,
      "name": "Corporate Luxe (Theme A)",
      "slug": "theme-a",
      "directory_name": "theme-a",
      "is_active": true
    },
    "settings": {
      "site_identity": {
        "site_name": "BEST GROUP",
        "tagline": "Excellence in Every Endeavor",
        "support_email": "info@bestgroupatoz.com",
        "phone": "01910-203058, 01711-626577",
        "headquarters": "9th Floor, DBBL Wohid Tower, Motijheel, Dhaka-1000"
      }
    },
    "blocks": [
      {
        "id": 1,
        "type": "hero",
        "display_order": 0,
        "content": { ... }
      }
    ]
  }
}
```

---

## ⚡ Local Setup & Execution

### 1. Prerequisites
- **PHP 8.2+** with extensions: `pdo_sqlite`, `pdo_mysql`, `mbstring`, `openssl`, `curl`
- **Composer** v2+

### 2. Environment Setup
```bash
# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 3. Database Migration & Seeding
```bash
# Run migrations (pre-configured for SQLite in local dev)
php artisan migrate

# Seed complete sample data (Admin user, 6 business wings, Theme A, and settings)
php artisan db:seed
```

### 4. Storage Linking
```bash
php artisan storage:link
```

### 5. Start Development Server
```bash
# Start local API server on port 8000
php artisan serve --port=8000
```

> **Administrative Panel**: [http://127.0.0.1:8000/admin](http://127.0.0.1:8000/admin)  
> **Default Admin Credentials**:
> - Email: `admin@bestgroup.com`
> - Password: `password`

---

## 🔐 Role-Based Access Control (RBAC)

| Role | Access Permissions |
|---|---|
| **Super Admin** | Full access to Pages, Blocks, Themes, Settings, Investment Reports, and User Management. |
| **Staff** | Content editing access to Pages, Blocks, and Settings. |
| **Investor** | Restricted access to Investment Reports and investor desk. |

---

## 🚢 Production Deployment

### Production Endpoints:
- **Admin Panel**: `https://admin.bestgroupatoz.com/admin`
- **REST API Base**: `https://admin.bestgroupatoz.com/api/v1`

### Optimization Commands:
```bash
composer install --no-dev --optimize-autoloader
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
```

---

© 2026 **BEST GROUP Holdings Ltd.** All rights reserved.  
Engineered with precision by **[Nefcon IT](https://nefcon.it)**.
