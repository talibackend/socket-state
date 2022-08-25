import { StatefulSocket } from './index';
import { DbTypes } from './types';
import * as express from 'express';
import * as http from 'http';
const app = express();
const server = http.createServer(app);

const SocketInstance = new StatefulSocket(server, {connectionParams : {
    type : DbTypes.mysql,
    host : "localhost",
    port : 3306,
    username : "root",
    password : "",
    database : "socket_state",
    usersTable : "users",
    connectionStoreTable : "ws_connections",
    userUniqueIdField : "id"
}});
