"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var toJSON_1 = require("./toJSON");
function createSerializer(options) {
    return {
        test: function (object) {
            return object instanceof three_1.Object3D;
        },
        print: function (object, printer) {
            return printer(toJSON_1.default(object, options));
        }
    };
}
exports.default = createSerializer;
//# sourceMappingURL=serializer.js.map