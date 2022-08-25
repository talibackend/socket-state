"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlTypes = exports.DbTypes = void 0;
var DbTypes;
(function (DbTypes) {
    DbTypes[DbTypes["mysql"] = 0] = "mysql";
    DbTypes[DbTypes["postgres"] = 1] = "postgres";
    DbTypes[DbTypes["mongodb"] = 2] = "mongodb";
})(DbTypes = exports.DbTypes || (exports.DbTypes = {}));
exports.SqlTypes = [
    "0", "1"
];
;
