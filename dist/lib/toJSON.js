"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("./helpers/uuid");
function toJSON(object, config) {
    if (config === void 0) { config = {}; }
    var _a = config.shouldReplaceUUIDs, shouldReplaceUUIDs = _a === void 0 ? true : _a;
    var objJSON = object.toJSON();
    if (shouldReplaceUUIDs) {
        return uuid_1.replaceUUIDs(objJSON);
    }
    else {
        return objJSON;
    }
}
exports.default = toJSON;
//# sourceMappingURL=toJSON.js.map