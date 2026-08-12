# Deploying on Hostinger

This repository ships a **prebuilt** production bundle in `dist/`, so the host
never has to run Vite. That avoids the Node 18 build failure
(`node:util does not provide an export named 'styleText'`), because Vite 8 /
Rolldown require Node 20.19+ while Hostinger's builder runs Node 18.

Hostinger settings:

- Build command: `npm run build` (a no-op) — or leave empty
- Start command: `npm start` → `node dist/server/index.mjs`
- Root directory: `/`
- Branch: `main`

`package.json` at the root has **no dependencies**, so `npm install` completes
instantly with no engine warnings.

## Working on the source

The application source lives in `src/`. The development manifest (all real
dependencies and the Vite scripts) is `package.dev.json`.

```bash
cp package.dev.json package.json   # local only, do not commit
npm install
npm run dev
```

To regenerate the deployed bundle, build with Node >= 20.19 and copy the
output (`server/` and `public/`) into `dist/`.
