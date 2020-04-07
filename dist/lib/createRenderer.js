"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var createContext = require("gl");
var THREE = require("three");
var canvas_1 = require("canvas");
var globals_1 = require("./globals");
function createRenderer(options) {
    var context = createContext(1, 1);
    var canvas = canvas_1.createCanvas(globals_1.window.innerWidth, globals_1.window.innerHeight);
    // Mock function to avoid errors inside THREE.WebGlRenderer():
    canvas.addEventListener = function () { };
    return new THREE.WebGLRenderer(__assign({ context: context, canvas: canvas }, options));
}
exports.default = createRenderer;
//# sourceMappingURL=createRenderer.js.map