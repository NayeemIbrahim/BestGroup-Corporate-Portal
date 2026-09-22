# BestGroup Headless CMS & Corporate Portal

**Developed by Nefcon IT**

BestGroup Headless CMS & Corporate Portal is a powerful, enterprise-grade Monorepo solution. It separates a scalable backend CMS API from a blazingly fast modern frontend experience.

## Tech Stack
- **Backend:** Laravel 11, Filament PHP v3, MySQL
- **Frontend:** Next.js App Router (React), Tailwind CSS
- **Authentication:** Laravel Sanctum (Token-based API Auth)

## Architecture

This project is built using a Monorepo structure, containing two distinct applications:

1. `/backend` - The Laravel application serving as a Headless CMS (via Filament v3) and providing RESTful APIs.
2. `/frontend` - The Next.js application that consumes the backend APIs to render the user-facing corporate portal.

## Setup Instructions

### 1. Backend Setup (Laravel)
Navigate to the `backend` directory:
```bash
cd backend
```
Install dependencies:
```bash
composer install
```
Copy the `.env.example` file and configure your database and app settings:
```bash
cp .env.example .env
```
Generate the application key:
```bash
php artisan key:generate
```
Run database migrations:
```bash
php artisan migrate
```
Start the backend development server:
```bash
php artisan serve
```

### 2. Frontend Setup (Next.js)
Open a new terminal and navigate to the `frontend` directory:
```bash
cd frontend
```
Install dependencies:
```bash
npm install
```
Configure your environment variables:
Create a `.env.local` file in the `frontend` directory and add the backend API URL:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
```
Start the frontend development server:
```bash
npm run dev
```

Your frontend should now be running at `http://localhost:3000` and connecting to your backend at `http://localhost:8000`.

## Version Control Guide (GitFlow)

This repository follows the **GitFlow** branching strategy and **Semantic Versioning** (starting at `v1.0.0`).

### Branches
- `main` - Production-ready state. Only receives merges from `develop` (or hotfixes). Always stable.
- `develop` - The active development branch. Feature branches branch off from here and merge back here.
- `feature/*` - Used for developing new features. Branch off from `develop` and merge back into `develop`.
- `hotfix/*` - Used for urgent production fixes. Branch off from `main` and merge back into both `main` and `develop`.

### Best Practices
- Never commit directly to `main`.
- Write descriptive commit messages.
- Keep feature branches small and focused.
