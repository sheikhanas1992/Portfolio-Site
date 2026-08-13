# Hostinger Business Plan Deployment Guide

This repository is optimized for **Hostinger Business Web Hosting** (and any Hostinger shared/cloud hosting plan).

It supports **TWO** deployment methods on Hostinger:
1. **Method 1: Hostinger Node.js App (SSR Mode)** — Recommended
2. **Method 2: Static Web Hosting (Export Mode)** — Ultra fast & simple

---

## Method 1: Hostinger Node.js Application (Recommended for SSR)

### 1. Upload Code to Hostinger
Upload all repository files (or connect Hostinger Git Deployment to `main`).

### 2. Configure Node.js App in Hostinger hPanel
Go to **hPanel -> Websites -> Setup Node.js App** (or **Node.js Manager**):

- **Node.js Version**: Select **Node 20.x** or **Node 22.x** (Node 18.x works too)
- **Application Mode**: `Production`
- **Application Root**: `/` (or `public_html`)
- **Application Startup File**: `app.js` (or `server.js` or `dist/server/index.mjs`)
- **Application URL**: `yourdomain.com`

Click **Run npm install** (completes in 1 second because root `package.json` uses prebuilt bundle).
Click **Start App** / **Restart App**.

### What errors were solved for Node.js App deployment:
- **503 Startup File Missing**: Added `app.js`, `server.js`, and `index.js` root wrappers so Hostinger finds the entry file regardless of which default file setting is used in hPanel.
- **502 / 504 Socket Binding Error**: Added `process.env.PORT` domain socket normalization in `app.js` to ensure Nitro binds properly to Passenger's IPC socket.
- **Node 18 Build Failure**: Root `package.json` ships prebuilt bundle in `dist/`, avoiding Hostinger Node 18 Vite 8 build incompatibility.
- **Root `.htaccess`**: Added rewrite rules so LiteSpeed directly serves static assets from `dist/public/` while forwarding application routes to Node.js.

---

## Method 2: Hostinger Static Web Hosting (Pure Static SPA)

If you prefer **not** to run a Node server process 24/7 on Hostinger, you can host the application as a **Static Website**.

### 1. How to deploy static:
Copy all contents inside `dist/public/` (including `.htaccess`) into your domain's `public_html` directory on Hostinger.

### What errors were solved for Static deployment:
- **404 Page Not Found on Refresh / Sub-routes (`/projects`, `/contact`, etc.)**: Added `dist/public/.htaccess` with SPA rewrite rules so LiteSpeed routes all client-side paths to `index.html`.

---

## Local Development & Rebuilding

Source files live in `src/`. The local dev manifest is `package.dev.json`.

```bash
# To work locally in dev mode:
cp package.dev.json package.json
npm install
npm run dev

# To rebuild the production bundle in dist/ before deploying to Hostinger:
npm run build
cp -r .output/* dist/
cp public/.htaccess dist/public/.htaccess
cp package.prod.json package.json  # or keep root package.json lean
```
