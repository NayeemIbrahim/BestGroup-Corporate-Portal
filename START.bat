@echo off
title BEST GROUP Corporate Portal Launcher
echo ============================================================
echo         BEST GROUP Corporate Portal - One-Click Launcher
echo ============================================================
echo.

:: Ensure XAMPP PHP and NodeJS are in PATH
set "PATH=C:\xampp\php;C:\Program Files\nodejs;%PATH%"

:: 1. Launch Laravel Backend on Port 8000 in minimized window
echo [1/3] Starting Laravel Backend on http://127.0.0.1:8000 ...
start "BEST GROUP Backend" /min cmd /c "cd /d %~dp0backend && php artisan serve --port=8000"

:: 2. Open default browser to localhost:3000 after Next.js spins up
echo [2/3] Opening browser at http://localhost:3000 in 3 seconds...
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"

:: 3. Launch Next.js Frontend on Port 3000
echo [3/3] Starting Next.js Frontend on http://localhost:3000 ...
echo.
echo ============================================================
echo Both Backend (8000) and Frontend (3000) are running!
echo Close this window or press Ctrl+C to stop.
echo ============================================================
echo.
cd /d "%~dp0bestgroupatoz"
npm run dev
