// Zero-dependency static file server for Hostinger Node.js hosting.
// Serves the prebuilt portfolio from this directory and falls back to
// index.html so client-side routes resolve.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 3000;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, filePath, status) {
  const ext = path.extname(filePath).toLowerCase();
  const headers = { "Content-Type": TYPES[ext] || "application/octet-stream" };
  if (filePath.includes(`${path.sep}assets${path.sep}`)) {
    headers["Cache-Control"] = "public, max-age=31536000, immutable";
  }
  res.writeHead(status, headers);
  fs.createReadStream(filePath).pipe(res);
}

http
  .createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
    const safePath = path.normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
    let filePath = path.join(ROOT, safePath);

    if (!filePath.startsWith(ROOT)) {
      res.writeHead(403).end("Forbidden");
      return;
    }

    fs.stat(filePath, (err, stats) => {
      if (!err && stats.isDirectory()) filePath = path.join(filePath, "index.html");
      fs.access(filePath, fs.constants.R_OK, (accessErr) => {
        if (accessErr) {
          send(res, path.join(ROOT, "index.html"), 200);
          return;
        }
        send(res, filePath, 200);
      });
    });
  })
  .listen(PORT, () => {
    console.log(`Portfolio site listening on port ${PORT}`);
  });
