"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const types_1 = require("./types");
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const SocketInstance = new index_1.StatefulSocket(server, { connectionParams: {
        type: types_1.DbTypes.mysql,
        host: "localhost",
        port: 3306,
        username: "root",
        password: "",
        database: "socket_state",
        usersTable: "users",
        connectionStoreTable: "ws_connections",
        userUniqueIdField: "new_uid"
    } });
