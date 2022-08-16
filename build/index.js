"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulSocket = void 0;
const ws_1 = require("ws");
var dbTypes;
(function (dbTypes) {
    dbTypes[dbTypes["mysql"] = 0] = "mysql";
    dbTypes[dbTypes["mongodb"] = 1] = "mongodb";
})(dbTypes || (dbTypes = {}));
class StatefulSocket {
    constructor(httpServer, options) {
        let autoAcceptConnections;
        if (options.trustedHosts) {
            this.trustedHosts = this.trustedHosts;
            autoAcceptConnections = false;
        }
        console.log(options.dbType);
        this.ws = new ws_1.Server({
            server: httpServer,
            autoAcceptConnections
        });
        this.globalConnections = {};
    }
}
exports.StatefulSocket = StatefulSocket;
