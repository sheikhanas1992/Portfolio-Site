// server.js - Hostinger Node.js Entry Point Wrapper
// Supports Phusion Passenger / Hostinger Node.js Application Manager

if (process.env.PORT && isNaN(Number(process.env.PORT))) {
  // If PORT is a Unix domain socket path provided by Phusion Passenger,
  // pass it to Nitro via NITRO_PORT so Nitro binds properly.
  process.env.NITRO_PORT = process.env.PORT;
}

import "./dist/server/index.mjs";
