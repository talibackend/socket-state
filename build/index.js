"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatefulSocket = void 0;
const types_1 = require("./types");
const connection_1 = require("./database/mysql/connection");
class StatefulSocket {
    constructor(httpServer, options) {
        let autoAcceptConnections = false;
        if (options.trustedHosts) {
            this.trustedHosts = this.trustedHosts;
            autoAcceptConnections = false;
        }
        this.connectionParams = options.connectionParams;
        this.initDbConnection();
        // this.ws = new Server({
        //     server : httpServer,
        //     autoAcceptConnections
        // })
        // this.globalConnections = {};
    }
    initDbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            if (types_1.SqlTypes.includes(`${this.connectionParams.type}`)) {
                this.dbInstance = (0, connection_1.default)(this.connectionParams);
            }
        });
    }
}
exports.StatefulSocket = StatefulSocket;
