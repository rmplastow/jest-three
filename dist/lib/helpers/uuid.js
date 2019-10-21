"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var R = require("ramda");
var ramda_1 = require("./ramda");
exports.UUID_PLACEHOLDER = "00000000-0000-0000-0000-000000000000";
exports.UUID_REGEX = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
/**
 * Converts a number to a UUID-like string.
 *
 * @number    number      Number to generate UUID from
 * @return    UUID string
 */
function numToUUID(id) {
    var hex = id.toString(16).toUpperCase();
    return "" + exports.UUID_PLACEHOLDER.slice(0, -hex.length) + hex;
}
exports.numToUUID = numToUUID;
/**
 * Replaces the UUID with substitute from map. If there is no substitute,
 * generates a new one.
 */
exports.replaceUUID = R.curry(function (map, uuid) {
    return R.ifElse(function (map) { return map.has(uuid); }, function (map) { return map.get(uuid); }, R.pipe(function (map) { return map.set(uuid, numToUUID(map.size)); }, function (map) { return map.get(uuid); }))(map);
});
/**
 * Replaces all UUIDs with generated, well-known substitutes. Assures that each
 * UUID is the same across snapshots.
 */
exports.replaceUUIDs = function (object) {
    var foundUUIDs = new Map();
    return ramda_1.recursiveMapValues(R.ifElse(R.test(exports.UUID_REGEX), exports.replaceUUID(foundUUIDs), R.identity), object);
};
//# sourceMappingURL=uuid.js.map