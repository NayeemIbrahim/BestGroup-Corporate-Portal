<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Best Group — Headless CMS & API Gateway</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        body {
            background-color: #090d16;
            color: #f1f5f9;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
        }
        .container {
            max-width: 680px;
            width: 100%;
            background: rgba(15, 23, 42, 0.75);
            border: 1px solid rgba(51, 65, 85, 0.6);
            backdrop-filter: blur(12px);
            border-radius: 20px;
            padding: 2.5rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            text-align: center;
        }
        .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            padding: 6px 14px;
            border-radius: 9999px;
            font-size: 0.8rem;
            font-weight: 600;
            background: rgba(16, 185, 129, 0.1);
            color: #34d399;
            border: 1px solid rgba(16, 185, 129, 0.25);
            margin-bottom: 1.5rem;
        }
        .badge-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #10b981;
            box-shadow: 0 0 8px #10b981;
        }
        h1 {
            font-size: 2rem;
            font-weight: 800;
            letter-spacing: -0.025em;
            color: #ffffff;
            margin-bottom: 0.75rem;
        }
        p.subtitle {
            color: #94a3b8;
            font-size: 0.975rem;
            line-height: 1.6;
            margin-bottom: 2rem;
        }
        .actions {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 2rem;
        }
        @media (min-width: 640px) {
            .actions {
                flex-direction: row;
                justify-content: center;
            }
        }
        .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0.75rem 1.5rem;
            border-radius: 12px;
            font-size: 0.9rem;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s ease;
        }
        .btn-primary {
            background: #2563eb;
            color: #ffffff;
            border: 1px solid #3b82f6;
        }
        .btn-primary:hover {
            background: #1d4ed8;
            box-shadow: 0 4px 14px rgba(37, 99, 235, 0.4);
        }
        .btn-secondary {
            background: rgba(30, 41, 59, 0.8);
            color: #cbd5e1;
            border: 1px solid rgba(71, 85, 105, 0.6);
        }
        .btn-secondary:hover {
            background: rgba(51, 65, 85, 0.8);
            color: #ffffff;
        }
        .api-info {
            background: rgba(10, 15, 29, 0.8);
            border: 1px solid rgba(51, 65, 85, 0.4);
            border-radius: 12px;
            padding: 1rem 1.25rem;
            text-align: left;
            font-size: 0.85rem;
            color: #94a3b8;
        }
        .api-info code {
            color: #38bdf8;
            font-family: monospace;
            background: rgba(56, 189, 248, 0.1);
            padding: 2px 6px;
            border-radius: 4px;
        }
        .footer {
            margin-top: 2rem;
            font-size: 0.775rem;
            color: #64748b;
        }
        .footer span {
            color: #94a3b8;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="badge">
            <span class="badge-dot"></span>
            Backend Engine Online & Healthy
        </div>
        <h1>Best Group Corporate API</h1>
        <p class="subtitle">
            Centralized Headless CMS & Enterprise Integration Engine powering Best Real Estate, Best E-Commerce, Best Model Pharmacy, and Best Travel.
        </p>

        <div class="actions">
            <a href="/admin" class="btn btn-primary">Open Admin Panel (Filament)</a>
            <a href="http://localhost:3000" class="btn btn-secondary">Open Public Frontend</a>
        </div>

        <div class="api-info">
            <div style="margin-bottom: 6px;"><strong>Core Endpoints:</strong></div>
            <div style="display: flex; flex-direction: column; gap: 4px;">
                <div>CMS Page Data: <code>GET /api/v1/page/home</code></div>
                <div>Investor & Staff Auth: <code>POST /api/login</code></div>
                <div>Enterprise Sync: <code>POST /api/integration/sync</code></div>
            </div>
        </div>

        <div class="footer">
            Best Group Headless CMS & Corporate Portal • Developed by <span>Nefcon IT</span>
        </div>
    </div>
</body>
</html>
