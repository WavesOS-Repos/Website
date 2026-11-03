globalThis.__nitro_main__ = import.meta.url;
import { i as serve, r as NodeResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
import { i as toEventHandler, n as defineHandler, o as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-11-03T16:54:08.730Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ca-KGqnpBnWv2vTcMsxmQKVP6NQmKA\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 202,
		"path": "../public/robots.txt"
	},
	"/sitemap.xml": {
		"type": "application/xml",
		"etag": "\"e4-3jYKgPl9e8YPvnhy6a+NWWoqwrg\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 228,
		"path": "../public/sitemap.xml"
	},
	"/wavesos-logo.jpg": {
		"type": "image/jpeg",
		"etag": "\"56c-HzFCEb7Ugxn2B1wZHRCntkzA2Ng\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 1388,
		"path": "../public/wavesos-logo.jpg"
	},
	"/wavesos-wallpaper-1280.webp": {
		"type": "image/webp",
		"etag": "\"36ac-cH4ed2HbFiU+UucnWfcv9ZZtefE\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 13996,
		"path": "../public/wavesos-wallpaper-1280.webp"
	},
	"/wavesos-wallpaper-640.webp": {
		"type": "image/webp",
		"etag": "\"171e-2qAB/VNU9JAQpRmp9+lvekS+dA4\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 5918,
		"path": "../public/wavesos-wallpaper-640.webp"
	},
	"/wavesos-wallpaper-960.webp": {
		"type": "image/webp",
		"etag": "\"2550-Y/jl3NPE6CmWrKdPzh94AMhR4AM\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 9552,
		"path": "../public/wavesos-wallpaper-960.webp"
	},
	"/wavesos-wallpaper.jpg": {
		"type": "image/jpeg",
		"etag": "\"40cd3-j8RIoftg8lwhMGHj8DUiBOw70/s\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 265427,
		"path": "../public/wavesos-wallpaper.jpg"
	},
	"/wavesos-wallpaper.webp": {
		"type": "image/webp",
		"etag": "\"107bc-dGyv3YlIf8h41o8CzTSSIRZVrBA\"",
		"mtime": "2026-11-03T16:54:08.731Z",
		"size": 67516,
		"path": "../public/wavesos-wallpaper.webp"
	},
	"/assets/field-CWQ1Teom.gif": {
		"type": "image/gif",
		"etag": "\"50533-FM0jW3v5nKNwFLolX5U458QQH7s\"",
		"mtime": "2026-11-03T16:54:03.664Z",
		"size": 329011,
		"path": "../public/assets/field-CWQ1Teom.gif"
	},
	"/assets/hyprland_screenshot_261029_040414-Bw_hDL9Q.webp": {
		"type": "image/webp",
		"etag": "\"1afc8-rBjCXNZJx12Wfv2oKYRyoAQQoEY\"",
		"mtime": "2026-11-03T16:54:03.678Z",
		"size": 110536,
		"path": "../public/assets/hyprland_screenshot_261029_040414-Bw_hDL9Q.webp"
	},
	"/assets/hyprland_screenshot_261029_040703-D53BoScT.png": {
		"type": "image/png",
		"etag": "\"3540-6rw/N4AWomhrX6qv55BNPRDCy54\"",
		"mtime": "2026-11-03T16:54:03.679Z",
		"size": 13632,
		"path": "../public/assets/hyprland_screenshot_261029_040703-D53BoScT.png"
	},
	"/assets/hyprland_screenshot_261029_040728-_pnSbw4X.png": {
		"type": "image/png",
		"etag": "\"19b41-P6tQ2frEz2ROSsu3uG21iUxqLMk\"",
		"mtime": "2026-11-03T16:54:03.680Z",
		"size": 105281,
		"path": "../public/assets/hyprland_screenshot_261029_040728-_pnSbw4X.png"
	},
	"/assets/hyprland_screenshot_261029_040753-zsyopwpf.png": {
		"type": "image/png",
		"etag": "\"13996-g9T5+j3SU+F7ZihXYu2xWWLeHMg\"",
		"mtime": "2026-11-03T16:54:03.681Z",
		"size": 80278,
		"path": "../public/assets/hyprland_screenshot_261029_040753-zsyopwpf.png"
	},
	"/assets/hyprland_screenshot_261029_040817-C58ElytW.png": {
		"type": "image/png",
		"etag": "\"22f0f-vRaGCJ/x/jr38dEIaNTxaGXdGg4\"",
		"mtime": "2026-11-03T16:54:03.682Z",
		"size": 143119,
		"path": "../public/assets/hyprland_screenshot_261029_040817-C58ElytW.png"
	},
	"/assets/hyprland_screenshot_261029_040841-AWqKr5FV.png": {
		"type": "image/png",
		"etag": "\"2a74c-Q/uP/efiYSrn3uoyt5zLHwkzS9k\"",
		"mtime": "2026-11-03T16:54:03.683Z",
		"size": 173900,
		"path": "../public/assets/hyprland_screenshot_261029_040841-AWqKr5FV.png"
	},
	"/assets/hyprland_screenshot_261029_040914-DayJi9mb.png": {
		"type": "image/png",
		"etag": "\"11536-LakcygCxy6v2fQM7wVdBoqWosUo\"",
		"mtime": "2026-11-03T16:54:03.683Z",
		"size": 70966,
		"path": "../public/assets/hyprland_screenshot_261029_040914-DayJi9mb.png"
	},
	"/assets/dog_samurai-DduBjgmx.gif": {
		"type": "image/gif",
		"etag": "\"16547c-ibgLGauRTlJU4VC2dIuD1DWkKOo\"",
		"mtime": "2026-11-03T16:54:03.654Z",
		"size": 1463420,
		"path": "../public/assets/dog_samurai-DduBjgmx.gif"
	},
	"/assets/20261031_11h26m21s_grim-C_GB9cg5.png": {
		"type": "image/png",
		"etag": "\"1de57e-4g+LR+D8Gb+xvLeppYPcYWnTXq8\"",
		"mtime": "2026-11-03T16:54:03.626Z",
		"size": 1959294,
		"path": "../public/assets/20261031_11h26m21s_grim-C_GB9cg5.png"
	},
	"/assets/20261031_11h27m40s_grim-xI2z2II-.png": {
		"type": "image/png",
		"etag": "\"1b561b-kkpou1qKtjXfdfkiiIeFKgI4V80\"",
		"mtime": "2026-11-03T16:54:03.630Z",
		"size": 1791515,
		"path": "../public/assets/20261031_11h27m40s_grim-xI2z2II-.png"
	},
	"/assets/20261031_11h28m15s_grim-BPBrDgM-.png": {
		"type": "image/png",
		"etag": "\"1f1972-71s7ASx/OhrdN2yzdVstOI4+ieY\"",
		"mtime": "2026-11-03T16:54:03.639Z",
		"size": 2038130,
		"path": "../public/assets/20261031_11h28m15s_grim-BPBrDgM-.png"
	},
	"/assets/20261031_11h28m57s_grim-D5XTIetE.png": {
		"type": "image/png",
		"etag": "\"18889c-rbJMeuUf51ieApNLWaKZ45COXl0\"",
		"mtime": "2026-11-03T16:54:03.643Z",
		"size": 1607836,
		"path": "../public/assets/20261031_11h28m57s_grim-D5XTIetE.png"
	},
	"/assets/20261031_11h29m06s_grim-BQ8GrlBu.png": {
		"type": "image/png",
		"etag": "\"1af66b-g9crEctCKheLSZ++M6RjKT8AI3s\"",
		"mtime": "2026-11-03T16:54:03.648Z",
		"size": 1767019,
		"path": "../public/assets/20261031_11h29m06s_grim-BQ8GrlBu.png"
	},
	"/assets/hyprland_screenshot_261029_040951-D5vxZAY3.png": {
		"type": "image/png",
		"etag": "\"2009f-R2kx/xJE9ohbEg0e/tTMT7CxhLo\"",
		"mtime": "2026-11-03T16:54:03.684Z",
		"size": 131231,
		"path": "../public/assets/hyprland_screenshot_261029_040951-D5vxZAY3.png"
	},
	"/assets/index-kqycrfpW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5bc84-efLwRt2M6mZ6SQTp74l8v68Oq8s\"",
		"mtime": "2026-11-03T16:54:03.622Z",
		"size": 375940,
		"path": "../public/assets/index-kqycrfpW.js"
	},
	"/assets/material-you-BRAQZ1l_.gif": {
		"type": "image/gif",
		"etag": "\"34022-mj9EHhO6BjCnplMl01mUspuB1yE\"",
		"mtime": "2026-11-03T16:54:03.770Z",
		"size": 213026,
		"path": "../public/assets/material-you-BRAQZ1l_.gif"
	},
	"/assets/enfield-Xg_tPrNb.gif": {
		"type": "image/gif",
		"etag": "\"23e993-v0EIAE+qUgKTPrYu6qkYGTkJLaE\"",
		"mtime": "2026-11-03T16:54:03.661Z",
		"size": 2353555,
		"path": "../public/assets/enfield-Xg_tPrNb.gif"
	},
	"/assets/forest-CzYsS2iS.gif": {
		"type": "image/gif",
		"etag": "\"25e704-79rwPj58Q4MwVuLT/ayVII69Jy4\"",
		"mtime": "2026-11-03T16:54:03.674Z",
		"size": 2483972,
		"path": "../public/assets/forest-CzYsS2iS.gif"
	},
	"/assets/pixel_rainyroom-DTs73j0A.gif": {
		"type": "image/gif",
		"etag": "\"bf73c-Y77mKsQG/YHR6tgxoLKxTVHKpQ4\"",
		"mtime": "2026-11-03T16:54:03.772Z",
		"size": 784188,
		"path": "../public/assets/pixel_rainyroom-DTs73j0A.gif"
	},
	"/assets/routes-BSAfDD-r.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"113df-Vg7ozZ68RrXO6hSYrYfshAl5tsU\"",
		"mtime": "2026-11-03T16:54:03.622Z",
		"size": 70623,
		"path": "../public/assets/routes-BSAfDD-r.js"
	},
	"/assets/hyprland_screenshot_261031_114025-ChhC8KCw.png": {
		"type": "image/png",
		"etag": "\"1604ed-Ul2mHrJ8XH0RekSsoe+ZvXibr9s\"",
		"mtime": "2026-11-03T16:54:03.748Z",
		"size": 1443053,
		"path": "../public/assets/hyprland_screenshot_261031_114025-ChhC8KCw.png"
	},
	"/assets/styles-BAfmg4CB.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"167f5-vO56wJ2VzpFgJs5T2Tho9wnXNtU\"",
		"mtime": "2026-11-03T16:54:03.773Z",
		"size": 92149,
		"path": "../public/assets/styles-BAfmg4CB.css"
	},
	"/downloads/.gitkeep": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1-rcg7GeeTSRscbqD9i0bNnzLlkvw\"",
		"mtime": "2026-11-03T16:54:08.723Z",
		"size": 1,
		"path": "../public/downloads/.gitkeep"
	},
	"/downloads/wavesos-website.zip": {
		"type": "application/zip",
		"etag": "\"5aca5-g/n1Q3aYXbkqt/YjuOIpzilOD9Q\"",
		"mtime": "2026-11-03T16:54:08.723Z",
		"size": 371877,
		"path": "../public/downloads/wavesos-website.zip"
	},
	"/assets/hyprland_screenshot_261029_154000-B74lXNXk.png": {
		"type": "image/png",
		"etag": "\"181372-Um0XwBOXSJ0mw3zJq71OOtV1S0Y\"",
		"mtime": "2026-11-03T16:54:03.689Z",
		"size": 1577842,
		"path": "../public/assets/hyprland_screenshot_261029_154000-B74lXNXk.png"
	},
	"/assets/hyprland_screenshot_261030_161633-Ctolk01I.png": {
		"type": "image/png",
		"etag": "\"198975-02uFuYgwytbGXTkxOEFTGRGpYuc\"",
		"mtime": "2026-11-03T16:54:03.701Z",
		"size": 1673589,
		"path": "../public/assets/hyprland_screenshot_261030_161633-Ctolk01I.png"
	},
	"/assets/hyprland_screenshot_261031_081144-DvA-mo25.png": {
		"type": "image/png",
		"etag": "\"1f1887-JLc2gyimWDMicvTc9zd76cywfRo\"",
		"mtime": "2026-11-03T16:54:03.718Z",
		"size": 2037895,
		"path": "../public/assets/hyprland_screenshot_261031_081144-DvA-mo25.png"
	},
	"/assets/hyprland_screenshot_261031_113600-EFdy_0f5.png": {
		"type": "image/png",
		"etag": "\"1d7878-pavQ4mGKc0VPVUmM3/HAYyr6NIk\"",
		"mtime": "2026-11-03T16:54:03.732Z",
		"size": 1931384,
		"path": "../public/assets/hyprland_screenshot_261031_113600-EFdy_0f5.png"
	},
	"/assets/hyprland_screenshot_261031_113802-OiB9MC_0.png": {
		"type": "image/png",
		"etag": "\"1ef671-5YVu34uXQ6g7dsFyfnUPOewNuSI\"",
		"mtime": "2026-11-03T16:54:03.737Z",
		"size": 2029169,
		"path": "../public/assets/hyprland_screenshot_261031_113802-OiB9MC_0.png"
	},
	"/assets/hyprland_screenshot_261031_114132-BHU44YAp.png": {
		"type": "image/png",
		"etag": "\"1e31aa-mIicUulF+g3++baO+dpV2KhQqp4\"",
		"mtime": "2026-11-03T16:54:03.752Z",
		"size": 1978794,
		"path": "../public/assets/hyprland_screenshot_261031_114132-BHU44YAp.png"
	},
	"/previews/.gitkeep": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"1-rcg7GeeTSRscbqD9i0bNnzLlkvw\"",
		"mtime": "2026-11-03T16:54:08.724Z",
		"size": 1,
		"path": "../public/previews/.gitkeep"
	},
	"/assets/hyprland_screenshot_261030_161513-D_tReT76.png": {
		"type": "image/png",
		"etag": "\"21192c-/kU1yqLxIZSmdIoyGaEb6ZdNzNA\"",
		"mtime": "2026-11-03T16:54:03.696Z",
		"size": 2169132,
		"path": "../public/assets/hyprland_screenshot_261030_161513-D_tReT76.png"
	},
	"/assets/hyprland_screenshot_261031_080526-BcEXnh8o.png": {
		"type": "image/png",
		"etag": "\"2107c5-oOv2r2z/Jz1ZUzjIuYvj/28/NNQ\"",
		"mtime": "2026-11-03T16:54:03.711Z",
		"size": 2164677,
		"path": "../public/assets/hyprland_screenshot_261031_080526-BcEXnh8o.png"
	},
	"/assets/hyprland_screenshot_261031_113517-BVCBwdHt.png": {
		"type": "image/png",
		"etag": "\"25d126-uF8iu8X3sOiI2qlGus7qZNGuEOE\"",
		"mtime": "2026-11-03T16:54:03.725Z",
		"size": 2478374,
		"path": "../public/assets/hyprland_screenshot_261031_113517-BVCBwdHt.png"
	},
	"/assets/hyprland_screenshot_261031_113900-CY_YFY9k.png": {
		"type": "image/png",
		"etag": "\"25a447-Xt01HTfaZzsVhJzGb4HFSyF22Fs\"",
		"mtime": "2026-11-03T16:54:03.744Z",
		"size": 2466887,
		"path": "../public/assets/hyprland_screenshot_261031_113900-CY_YFY9k.png"
	},
	"/assets/hyprland_screenshot_261031_114245-C_6fj5qj.png": {
		"type": "image/png",
		"etag": "\"296075-fCQa8hB1gx96Kwge9oBNY9KcKp0\"",
		"mtime": "2026-11-03T16:54:03.759Z",
		"size": 2711669,
		"path": "../public/assets/hyprland_screenshot_261031_114245-C_6fj5qj.png"
	},
	"/assets/hyprland_screenshot_261031_114331-B7m8JDIG.png": {
		"type": "image/png",
		"etag": "\"2e300a-XqvrQxX/XGQ8cXDqVn4h+/mgcrk\"",
		"mtime": "2026-11-03T16:54:03.767Z",
		"size": 3026954,
		"path": "../public/assets/hyprland_screenshot_261031_114331-B7m8JDIG.png"
	},
	"/assets/the_last_of_us-BAW6rFe9.gif": {
		"type": "image/gif",
		"etag": "\"1daa39-ZBuw1c2GX1yfM08I1uw94LgrAdg\"",
		"mtime": "2026-11-03T16:54:03.787Z",
		"size": 1944121,
		"path": "../public/assets/the_last_of_us-BAW6rFe9.gif"
	},
	"/assets/sword-BHarUKIX.gif": {
		"type": "image/gif",
		"etag": "\"39fb08-8BtJpe1adT3C7FOMrZ6y8OKGiVI\"",
		"mtime": "2026-11-03T16:54:03.782Z",
		"size": 3799816,
		"path": "../public/assets/sword-BHarUKIX.gif"
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
var _lazy_hBn8Kl = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_hBn8Kl
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
