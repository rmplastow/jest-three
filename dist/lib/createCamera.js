"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var globals_1 = require("./globals");
function createCamera(fov, aspect, near, far) {
    if (fov === void 0) { fov = 50; }
    if (aspect === void 0) { aspect = globals_1.window.innerWidth / globals_1.window.innerHeight; }
    if (near === void 0) { near = 1; }
    if (far === void 0) { far = 10000; }
    var camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(1, 1, 1);
    camera.aspect = globals_1.window.innerWidth / globals_1.window.innerHeight;
    camera.updateProjectionMatrix();
    return camera;
}
exports.default = createCamera;
//# sourceMappingURL=createCamera.js.map