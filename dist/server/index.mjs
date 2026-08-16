globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { a as toEventHandler, i as defineLazyEventHandler, n as HTTPError, r as defineHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { i as withoutTrailingSlash, n as joinURL, r as withLeadingSlash, t as decodePath } from "./_libs/ufo.mjs";
import { promises } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs").then((n) => n.t)) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/.htaccess": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"38a-b5l/TwiSpgKI2o6F8NjoyJZYFXM\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 906,
		"path": "../public/.htaccess"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"ec-GhqrNazETVe3J1y+fTbZrwrIu1Q\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 236,
		"path": "../public/favicon.svg"
	},
	"/og-image.png": {
		"type": "image/png",
		"etag": "\"446ad-b+kM2ZVqq3qHdSmu8r34IwcDtmk\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 280237,
		"path": "../public/og-image.png"
	},
	"/assets/CaseBits-CY78iI95.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1652-xVY7PTYmKQc7pvPgH+wQJFD4ciU\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 5714,
		"path": "../public/assets/CaseBits-CY78iI95.js"
	},
	"/assets/CountUp-BvR3c_YO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"545-K6zlBZciFxuSCMzi78uzxEaR7PA\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 1349,
		"path": "../public/assets/CountUp-BvR3c_YO.js"
	},
	"/assets/LowerSections-CfvyT6H5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"514a-Yyx4OL0vmECH0M9MawLVtcFWC/Q\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 20810,
		"path": "../public/assets/LowerSections-CfvyT6H5.js"
	},
	"/assets/SiteChrome-B3Zz1AEi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"20ab-3iZAITmfED7NYSw+1wFdu9nGzHE\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 8363,
		"path": "../public/assets/SiteChrome-B3Zz1AEi.js"
	},
	"/assets/archivo-black-latin-400-normal-HW9MwEcM.woff": {
		"type": "font/woff",
		"etag": "\"32cc-mZZnG6uOfowDpOpSccuVodViKDY\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 13004,
		"path": "../public/assets/archivo-black-latin-400-normal-HW9MwEcM.woff"
	},
	"/assets/audit-DihzgbJC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3f99-LJGBsRuogVMiF55asplrUjWJKao\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 16281,
		"path": "../public/assets/audit-DihzgbJC.js"
	},
	"/assets/book-OggubTgt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"bf0-TZN2Jsqtyc7w4sAHdjevoK3djuw\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 3056,
		"path": "../public/assets/book-OggubTgt.js"
	},
	"/assets/archivo-black-latin-400-normal-BTVu2TQR.woff2": {
		"type": "font/woff2",
		"etag": "\"48ac-H5ZXCWBriIMIJsRe8OvP40hKpnQ\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 18604,
		"path": "../public/assets/archivo-black-latin-400-normal-BTVu2TQR.woff2"
	},
	"/assets/index-9zQQdDef.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5563d-fzmT6widuIdyflnD6eOIPyRDJEE\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 349757,
		"path": "../public/assets/index-9zQQdDef.js"
	},
	"/assets/index-DXGmDP7s.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"56124-hi58d37lOL1/XNyy65o1NqE2810\"",
		"mtime": "2026-08-16T15:11:51.615Z",
		"size": 352548,
		"path": "../public/assets/index-DXGmDP7s.js"
	},
	"/assets/index-Dr1jzbLD.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"902b-7RvAX11AP8xBknlwy1Ncz+ISSEA\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 36907,
		"path": "../public/assets/index-Dr1jzbLD.css"
	},
	"/assets/inter-latin-400-normal-C38fXH4l.woff2": {
		"type": "font/woff2",
		"etag": "\"5c70-aPZFxrb/EuJcVLE9TtEZ5jHcuyY\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 23664,
		"path": "../public/assets/inter-latin-400-normal-C38fXH4l.woff2"
	},
	"/assets/inter-latin-400-normal-CyCys3Eg.woff": {
		"type": "font/woff",
		"etag": "\"77e8-SbvLwKxssThdk7eEO6Aafq1EDIA\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 30696,
		"path": "../public/assets/inter-latin-400-normal-CyCys3Eg.woff"
	},
	"/assets/inter-latin-500-normal-BL9OpVg8.woff": {
		"type": "font/woff",
		"etag": "\"7a34-RiJoWDij89wbmUrQ9vApTdR9iMs\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 31284,
		"path": "../public/assets/inter-latin-500-normal-BL9OpVg8.woff"
	},
	"/assets/inter-latin-500-normal-Cerq10X2.woff2": {
		"type": "font/woff2",
		"etag": "\"5ed0-a2bHQb+Lw84kivBLIFGmSKODkdY\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 24272,
		"path": "../public/assets/inter-latin-500-normal-Cerq10X2.woff2"
	},
	"/assets/inter-latin-600-normal-CiBQ2DWP.woff": {
		"type": "font/woff",
		"etag": "\"7a1c-7yTNkhBBRpiqSdmpUeo8hP6GAv8\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 31260,
		"path": "../public/assets/inter-latin-600-normal-CiBQ2DWP.woff"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"17-ZZkCVrbr4BSdjt/K43J0tq8+Qq4\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 23,
		"path": "../public/robots.txt"
	},
	"/assets/inter-latin-600-normal-LgqL8muc.woff2": {
		"type": "font/woff2",
		"etag": "\"5f84-4NYfbcUR1koHKy9NyU4VXs8btvY\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 24452,
		"path": "../public/assets/inter-latin-600-normal-LgqL8muc.woff2"
	},
	"/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff": {
		"type": "font/woff",
		"etag": "\"6b68-PjVYVbMXaGEDnHrQQmycVNcGrEA\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 27496,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-6-qcROiO.woff"
	},
	"/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2": {
		"type": "font/woff2",
		"etag": "\"52b0-OuYhUYIQ5ljyzsko4MOu3m0M7+I\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 21168,
		"path": "../public/assets/jetbrains-mono-latin-400-normal-V6pRDFza.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2": {
		"type": "font/woff2",
		"etag": "\"5548-NcKnK3WfWhmDT/Dd1/lKnL5VeGA\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 21832,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-BWZEU5yA.woff2"
	},
	"/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff": {
		"type": "font/woff",
		"etag": "\"6e30-1zAcLD7/opfpWjVLFZBVG0EzKds\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 28208,
		"path": "../public/assets/jetbrains-mono-latin-500-normal-CJOVTJB7.woff"
	},
	"/assets/portrait-BrxumKcC.webp": {
		"type": "image/webp",
		"etag": "\"89fa-fGdgv7H2DK6YXa3V4WES0VkF1ZY\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 35322,
		"path": "../public/assets/portrait-BrxumKcC.webp"
	},
	"/assets/portrait-CB3A2lKm.jpg": {
		"type": "image/jpeg",
		"etag": "\"f985-wECptmWupAHxqaTAbTiYrwlhLbs\"",
		"mtime": "2026-08-16T15:11:52.150Z",
		"size": 63877,
		"path": "../public/assets/portrait-CB3A2lKm.jpg"
	},
	"/assets/routes-ClXonFBz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15fa-3SOLWwUT3a8R8y+7qYAMq3duaRA\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 5626,
		"path": "../public/assets/routes-ClXonFBz.js"
	},
	"/assets/styles-Bone-Gcz.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16f4e-IQCGhBE6JmDfFNBxHLZfvUoV/og\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 94030,
		"path": "../public/assets/styles-Bone-Gcz.css"
	},
	"/assets/work.ceiling-and-efficiency-DxZhk3bs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b64-A49nD2a1D0ZTddkE3QvBRY7HnF0\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 11108,
		"path": "../public/assets/work.ceiling-and-efficiency-DxZhk3bs.js"
	},
	"/assets/work.promotion-and-exposure-CNV_XjGw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2703-JvoU6plnxfaUac0A077+Zj9ATxo\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 9987,
		"path": "../public/assets/work.promotion-and-exposure-CNV_XjGw.js"
	},
	"/assets/work.scale-and-concentration-X-ZnQx36.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"27c0-B5GYYQHuDjCEP8QcTXvpK9kDEjU\"",
		"mtime": "2026-08-16T15:11:51.619Z",
		"size": 10176,
		"path": "../public/assets/work.scale-and-concentration-X-ZnQx36.js"
	},
	"/case-images/promotion-and-exposure/ads-overview.png": {
		"type": "image/png",
		"etag": "\"1e6ce-++J1mCIBUO23f0kacQ7sURrZti0\"",
		"mtime": "2026-08-16T15:11:52.149Z",
		"size": 124622,
		"path": "../public/case-images/promotion-and-exposure/ads-overview.png"
	},
	"/case-images/promotion-and-exposure/campaigns.png": {
		"type": "image/png",
		"etag": "\"1e259-FqALV1wxKWQVMrCrngFV/KwucRA\"",
		"mtime": "2026-08-16T15:11:52.154Z",
		"size": 123481,
		"path": "../public/case-images/promotion-and-exposure/campaigns.png"
	},
	"/case-images/promotion-and-exposure/snapshot.png": {
		"type": "image/png",
		"etag": "\"22848-B9nffpM5NYBzXVALH5wBuPcEEJo\"",
		"mtime": "2026-08-16T15:11:52.154Z",
		"size": 141384,
		"path": "../public/case-images/promotion-and-exposure/snapshot.png"
	},
	"/case-images/promotion-and-exposure/top-products.png": {
		"type": "image/png",
		"etag": "\"18892-JZzwHRQf4JQiI4MJ9WXHxYg2pr4\"",
		"mtime": "2026-08-16T15:11:52.152Z",
		"size": 100498,
		"path": "../public/case-images/promotion-and-exposure/top-products.png"
	},
	"/case-images/scale-and-concentration/ads-overview.png": {
		"type": "image/png",
		"etag": "\"23c7e-TBMOV6/OMMs33R2+gFBHCw3x0II\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 146558,
		"path": "../public/case-images/scale-and-concentration/ads-overview.png"
	},
	"/case-images/promotion-and-exposure/trend.png": {
		"type": "image/png",
		"etag": "\"2440d-5diiCR8jTck0m8K1pSfM9UN+smk\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 148493,
		"path": "../public/case-images/promotion-and-exposure/trend.png"
	},
	"/case-images/scale-and-concentration/campaigns.png": {
		"type": "image/png",
		"etag": "\"1d9c8-XNVF/IpBK39yME/ZjYGdBJNz3kI\"",
		"mtime": "2026-08-16T15:11:52.152Z",
		"size": 121288,
		"path": "../public/case-images/scale-and-concentration/campaigns.png"
	},
	"/case-images/scale-and-concentration/snapshot.png": {
		"type": "image/png",
		"etag": "\"21b7a-M5A3RVsH8XQWehOuXDzgyI115dg\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 138106,
		"path": "../public/case-images/scale-and-concentration/snapshot.png"
	},
	"/case-images/scale-and-concentration/top-products.png": {
		"type": "image/png",
		"etag": "\"19233-cEMmWAswNAZ//TUE2qFvq+mxZtY\"",
		"mtime": "2026-08-16T15:11:52.154Z",
		"size": 102963,
		"path": "../public/case-images/scale-and-concentration/top-products.png"
	},
	"/case-images/ceiling-and-efficiency/ads-overview.png": {
		"type": "image/png",
		"etag": "\"21cbb-ZaRemSgutWZvEbnNWKh/uSiOmT8\"",
		"mtime": "2026-08-16T15:11:52.152Z",
		"size": 138427,
		"path": "../public/case-images/ceiling-and-efficiency/ads-overview.png"
	},
	"/case-images/scale-and-concentration/trend.png": {
		"type": "image/png",
		"etag": "\"275f2-Oq7qeSMV1lGuw2ByDeDOr1/AMI8\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 161266,
		"path": "../public/case-images/scale-and-concentration/trend.png"
	},
	"/case-images/ceiling-and-efficiency/campaigns.png": {
		"type": "image/png",
		"etag": "\"22ee3-eDpVIY+J8RiTC+OftQEHZ+wD0YY\"",
		"mtime": "2026-08-16T15:11:52.152Z",
		"size": 143075,
		"path": "../public/case-images/ceiling-and-efficiency/campaigns.png"
	},
	"/case-images/ceiling-and-efficiency/top-products.png": {
		"type": "image/png",
		"etag": "\"18fb9-E5UkJF1zWhDGF9z5XiShYiqrGqI\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 102329,
		"path": "../public/case-images/ceiling-and-efficiency/top-products.png"
	},
	"/case-images/ceiling-and-efficiency/trend.png": {
		"type": "image/png",
		"etag": "\"26806-GJYoVY+v127A+kaUocis+4gQ5zo\"",
		"mtime": "2026-08-16T15:11:52.153Z",
		"size": 157702,
		"path": "../public/case-images/ceiling-and-efficiency/trend.png"
	},
	"/case-images/ceiling-and-efficiency/snapshot.png": {
		"type": "image/png",
		"etag": "\"7d0e0-os8HrPPw410yAfUhHp8M5XEtGKs\"",
		"mtime": "2026-08-16T15:11:52.152Z",
		"size": 512224,
		"path": "../public/case-images/ceiling-and-efficiency/snapshot.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets-node
function readAsset(id) {
	const serverDir = dirname(fileURLToPath(globalThis.__nitro_main__));
	return promises.readFile(resolve(serverDir, public_assets_data_default[id].path));
}
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
function getAsset(id) {
	return public_assets_data_default[id];
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/static.mjs
var METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
var EncodingMap = {
	gzip: ".gz",
	br: ".br",
	zstd: ".zst"
};
var static_default = defineHandler((event) => {
	if (event.req.method && !METHODS.has(event.req.method)) return;
	let id = decodePath(withLeadingSlash(withoutTrailingSlash(event.url.pathname)));
	let asset;
	const encodings = [...(event.req.headers.get("accept-encoding") || "").split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(), ""];
	for (const encoding of encodings) for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
		const _asset = getAsset(_id);
		if (_asset) {
			asset = _asset;
			id = _id;
			break;
		}
	}
	if (!asset) {
		if (isPublicAssetURL(id)) {
			event.res.headers.delete("Cache-Control");
			throw new HTTPError({ status: 404 });
		}
		return;
	}
	if (encodings.length > 1) event.res.headers.append("Vary", "Accept-Encoding");
	if (event.req.headers.get("if-none-match") === asset.etag) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	const ifModifiedSinceH = event.req.headers.get("if-modified-since");
	const mtimeDate = new Date(asset.mtime);
	if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
		event.res.status = 304;
		event.res.statusText = "Not Modified";
		return "";
	}
	if (asset.type) event.res.headers.set("Content-Type", asset.type);
	if (asset.etag && !event.res.headers.has("ETag")) event.res.headers.set("ETag", asset.etag);
	if (asset.mtime && !event.res.headers.has("Last-Modified")) event.res.headers.set("Last-Modified", mtimeDate.toUTCString());
	if (asset.encoding && !event.res.headers.has("Content-Encoding")) event.res.headers.set("Content-Encoding", asset.encoding);
	if (asset.size > 0 && !event.res.headers.has("Content-Length")) event.res.headers.set("Content-Length", asset.size.toString());
	return readAsset(id);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_iMGkXq = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_iMGkXq
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
var globalMiddleware = [toEventHandler(static_default)].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new NodeResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~middleware"].push(...globalMiddleware);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		middleware.push(...h3App["~middleware"]);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/hooks.mjs
function _captureError(error, type) {
	console.error(`[${type}]`, error);
	useNitroApp().captureError?.(error, { tags: [type] });
}
function trapUnhandledErrors() {
	process.on("unhandledRejection", (error) => _captureError(error, "unhandledRejection"));
	process.on("uncaughtException", (error) => _captureError(error, "uncaughtException"));
}
//#endregion
//#region #nitro/virtual/tracing
var tracingSrvxPlugins = [];
//#endregion
//#region node_modules/nitro/dist/presets/node/runtime/node-server.mjs
var _parsedPort = Number.parseInt(process.env.NITRO_PORT ?? process.env.PORT ?? "");
var port = Number.isNaN(_parsedPort) ? 3e3 : _parsedPort;
var host = process.env.NITRO_HOST || process.env.HOST;
var cert = process.env.NITRO_SSL_CERT;
var key = process.env.NITRO_SSL_KEY;
var nitroApp = useNitroApp();
serve({
	port,
	hostname: host,
	tls: cert && key ? {
		cert,
		key
	} : void 0,
	fetch: nitroApp.fetch,
	plugins: [...tracingSrvxPlugins]
});
trapUnhandledErrors();
var node_server_default = {};
//#endregion
export { node_server_default as default };
