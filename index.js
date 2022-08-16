const { StatefulSocket } = require('./build/index');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const SocketInstance = new StatefulSocket(server, {dbType : "mysql"});