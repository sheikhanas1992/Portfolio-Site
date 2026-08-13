// hostinger-entry.js - Hostinger Node.js Entry Point Wrapper
// Supports Phusion Passenger / Hostinger Node.js Application Manager
//
// Deliberately not named server.js/server.ts: Nitro's node-server preset
// auto-detects a root-level "server" file as a custom serverEntry handler
// and expects it to export a request handler, which breaks the build.
// index.js is the stable startup file; it imports this wrapper.

if (process.env.PORT && isNaN(Number(process.env.PORT))) {
  // If PORT is a Unix domain socket path provided by Phusion Passenger,
  // pass it to Nitro via NITRO_PORT so Nitro binds properly.
  process.env.NITRO_PORT = process.env.PORT;
}

import "./dist/server/index.mjs";
