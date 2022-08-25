"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulSocket = void 0;
const ws_1 = require("ws");
const types_1 = require("./types");
class StatefulSocket {
    constructor(httpServer, options) {
        let autoAcceptConnections = false;
        if (options.trustedHosts) {
            this.trustedHosts = this.trustedHosts;
            autoAcceptConnections = false;
        }
        console.log(types_1.DbTypes[`${options.connectionParams.type}`]);
        this.ws = new ws_1.Server({
            server: httpServer,
            autoAcceptConnections
        });
        this.globalConnections = {};
    }
}
exports.StatefulSocket = StatefulSocket;
