"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
class StatefulSocket {
    constructor(httpServer, options) {
        let autoAcceptConnections;
        this.ws = new ws_1.Server({
            server: httpServer,
            autoAcceptConnections: false
        });
    }
}
exports.default = StatefulSocket;