"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulSocket = void 0;
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
exports.StatefulSocket = StatefulSocket;
