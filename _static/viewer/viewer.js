import { i as e, n as t, r as n, t as r } from "./main-IbwkrrC0.js";
//#region viewer_src/auto_mount.ts
var i = document.querySelector("#colmap-viewer-root");
if (i) try {
	r(i);
} catch (e) {
	console.error("[COLMAP viewer] Initialization failed", e);
}
//#endregion
export { t as ReconstructionViewer, n as discoverSparseModels, r as mountColmapViewer, e as parseReconstruction };
