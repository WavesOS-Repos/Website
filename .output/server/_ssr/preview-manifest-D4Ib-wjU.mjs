//#region node_modules/.nitro/vite/services/ssr/assets/preview-manifest-D4Ib-wjU.js
var hyprland_screenshot_261029_040414_default = "/assets/hyprland_screenshot_261029_040414-Bw_hDL9Q.webp";
var hyprland_screenshot_261029_154000_default = "/assets/hyprland_screenshot_261029_154000-B74lXNXk.png";
var hyprland_screenshot_261030_161513_default = "/assets/hyprland_screenshot_261030_161513-D_tReT76.png";
var hyprland_screenshot_261030_161633_default = "/assets/hyprland_screenshot_261030_161633-Ctolk01I.png";
var hyprland_screenshot_261031_080526_default = "/assets/hyprland_screenshot_261031_080526-BcEXnh8o.png";
var hyprland_screenshot_261031_081144_default = "/assets/hyprland_screenshot_261031_081144-DvA-mo25.png";
var dog_samurai_default = "/assets/dog_samurai-DduBjgmx.gif";
var enfield_default = "/assets/enfield-Xg_tPrNb.gif";
var field_default = "/assets/field-CWQ1Teom.gif";
var forest_default = "/assets/forest-CzYsS2iS.gif";
var material_you_default = "/assets/material-you-BRAQZ1l_.gif";
var pixel_rainyroom_default = "/assets/pixel_rainyroom-DTs73j0A.gif";
var sword_default = "/assets/sword-BHarUKIX.gif";
var the_last_of_us_default = "/assets/the_last_of_us-BAW6rFe9.gif";
var hyprland_screenshot_261031_113517_default = "/assets/hyprland_screenshot_261031_113517-BVCBwdHt.png";
var hyprland_screenshot_261031_113600_default = "/assets/hyprland_screenshot_261031_113600-EFdy_0f5.png";
var hyprland_screenshot_261031_113802_default = "/assets/hyprland_screenshot_261031_113802-OiB9MC_0.png";
var hyprland_screenshot_261031_113900_default = "/assets/hyprland_screenshot_261031_113900-CY_YFY9k.png";
var _20261031_11h26m21s_grim_default = "/assets/20261031_11h26m21s_grim-C_GB9cg5.png";
var _20261031_11h27m40s_grim_default = "/assets/20261031_11h27m40s_grim-xI2z2II-.png";
var _20261031_11h28m15s_grim_default = "/assets/20261031_11h28m15s_grim-BPBrDgM-.png";
var _20261031_11h28m57s_grim_default = "/assets/20261031_11h28m57s_grim-D5XTIetE.png";
var _20261031_11h29m06s_grim_default = "/assets/20261031_11h29m06s_grim-BQ8GrlBu.png";
var hyprland_screenshot_261029_040703_default = "/assets/hyprland_screenshot_261029_040703-D53BoScT.png";
var hyprland_screenshot_261029_040728_default = "/assets/hyprland_screenshot_261029_040728-_pnSbw4X.png";
var hyprland_screenshot_261029_040753_default = "/assets/hyprland_screenshot_261029_040753-zsyopwpf.png";
var hyprland_screenshot_261029_040817_default = "/assets/hyprland_screenshot_261029_040817-C58ElytW.png";
var hyprland_screenshot_261029_040841_default = "/assets/hyprland_screenshot_261029_040841-AWqKr5FV.png";
var hyprland_screenshot_261029_040914_default = "/assets/hyprland_screenshot_261029_040914-DayJi9mb.png";
var hyprland_screenshot_261029_040951_default = "/assets/hyprland_screenshot_261029_040951-D5vxZAY3.png";
var hyprland_screenshot_261031_114025_default = "/assets/hyprland_screenshot_261031_114025-ChhC8KCw.png";
var hyprland_screenshot_261031_114132_default = "/assets/hyprland_screenshot_261031_114132-BHU44YAp.png";
var hyprland_screenshot_261031_114245_default = "/assets/hyprland_screenshot_261031_114245-C_6fj5qj.png";
var hyprland_screenshot_261031_114331_default = "/assets/hyprland_screenshot_261031_114331-B7m8JDIG.png";
function mediaFromFiles(files) {
	return Object.entries(files).sort(([a], [b]) => a.localeCompare(b, void 0, { numeric: true })).flatMap(([path, src]) => {
		const filename = path.split("/").at(-1)?.replace(/\.asset\.json$/i, "") ?? "";
		const extension = filename.split(".").at(-1)?.toLowerCase();
		const kind = extension && [
			"mp4",
			"webm",
			"ogg",
			"ogv",
			"mov"
		].includes(extension) ? "video" : "image";
		if (!extension || ![
			"jpg",
			"jpeg",
			"png",
			"webp",
			"avif",
			"gif",
			"mp4",
			"webm",
			"ogg",
			"ogv",
			"mov"
		].includes(extension)) return [];
		return [{
			src,
			kind,
			label: filename.replace(/\.[^.]+$/, "").replace(/^[\d]+[-_ ]*/, "").replace(/[-_]/g, " ") || "Desktop preview"
		}];
	});
}
function nextPreviewIndex(current, direction, total) {
	return total > 0 ? ((current + direction) % total + total) % total : 0;
}
function build(local, assets) {
	return mediaFromFiles({
		...local,
		...Object.fromEntries(Object.entries(assets).map(([path, asset]) => [path, asset.url]))
	});
}
var previews = build(/* #__PURE__ */ Object.assign({
	"/src/assets/desktop-previews/hyprland_screenshot_261029_040414.webp": hyprland_screenshot_261029_040414_default,
	"/src/assets/desktop-previews/hyprland_screenshot_261029_154000.png": hyprland_screenshot_261029_154000_default,
	"/src/assets/desktop-previews/hyprland_screenshot_261030_161513.png": hyprland_screenshot_261030_161513_default,
	"/src/assets/desktop-previews/hyprland_screenshot_261030_161633.png": hyprland_screenshot_261030_161633_default,
	"/src/assets/desktop-previews/hyprland_screenshot_261031_080526.png": hyprland_screenshot_261031_080526_default,
	"/src/assets/desktop-previews/hyprland_screenshot_261031_081144.png": hyprland_screenshot_261031_081144_default
}), /* #__PURE__ */ Object.assign({}));
var previewCategories = [
	{
		name: "Desktop",
		media: previews
	},
	{
		name: "SDDM",
		media: build(/* #__PURE__ */ Object.assign({
			"/src/assets/sddm/dog_samurai.gif": dog_samurai_default,
			"/src/assets/sddm/enfield.gif": enfield_default,
			"/src/assets/sddm/field.gif": field_default,
			"/src/assets/sddm/forest.gif": forest_default,
			"/src/assets/sddm/material-you.gif": material_you_default,
			"/src/assets/sddm/pixel_rainyroom.gif": pixel_rainyroom_default,
			"/src/assets/sddm/sword.gif": sword_default,
			"/src/assets/sddm/the_last_of_us.gif": the_last_of_us_default
		}), /* #__PURE__ */ Object.assign({}))
	},
	{
		name: "Hyprland",
		media: build(/* #__PURE__ */ Object.assign({
			"/src/assets/hyprland/hyprland_screenshot_261031_113517.png": hyprland_screenshot_261031_113517_default,
			"/src/assets/hyprland/hyprland_screenshot_261031_113600.png": hyprland_screenshot_261031_113600_default,
			"/src/assets/hyprland/hyprland_screenshot_261031_113802.png": hyprland_screenshot_261031_113802_default,
			"/src/assets/hyprland/hyprland_screenshot_261031_113900.png": hyprland_screenshot_261031_113900_default
		}), /* #__PURE__ */ Object.assign({}))
	},
	{
		name: "Rofi",
		media: build(/* #__PURE__ */ Object.assign({
			"/src/assets/rofi/20261031_11h26m21s_grim.png": _20261031_11h26m21s_grim_default,
			"/src/assets/rofi/20261031_11h27m40s_grim.png": _20261031_11h27m40s_grim_default,
			"/src/assets/rofi/20261031_11h28m15s_grim.png": _20261031_11h28m15s_grim_default,
			"/src/assets/rofi/20261031_11h28m57s_grim.png": _20261031_11h28m57s_grim_default,
			"/src/assets/rofi/20261031_11h29m06s_grim.png": _20261031_11h29m06s_grim_default
		}), /* #__PURE__ */ Object.assign({}))
	},
	{
		name: "Waybar",
		media: build(/* #__PURE__ */ Object.assign({
			"/src/assets/waybar/hyprland_screenshot_261029_040703.png": hyprland_screenshot_261029_040703_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040728.png": hyprland_screenshot_261029_040728_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040753.png": hyprland_screenshot_261029_040753_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040817.png": hyprland_screenshot_261029_040817_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040841.png": hyprland_screenshot_261029_040841_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040914.png": hyprland_screenshot_261029_040914_default,
			"/src/assets/waybar/hyprland_screenshot_261029_040951.png": hyprland_screenshot_261029_040951_default
		}), /* #__PURE__ */ Object.assign({}))
	},
	{
		name: "More",
		media: build(/* #__PURE__ */ Object.assign({
			"/src/assets/more/hyprland_screenshot_261031_114025.png": hyprland_screenshot_261031_114025_default,
			"/src/assets/more/hyprland_screenshot_261031_114132.png": hyprland_screenshot_261031_114132_default,
			"/src/assets/more/hyprland_screenshot_261031_114245.png": hyprland_screenshot_261031_114245_default,
			"/src/assets/more/hyprland_screenshot_261031_114331.png": hyprland_screenshot_261031_114331_default
		}), /* #__PURE__ */ Object.assign({}))
	}
];
//#endregion
export { previewCategories as n, previews as r, nextPreviewIndex as t };
