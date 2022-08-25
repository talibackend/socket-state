"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const types_1 = require("../../types");
const InitDB = (connectionParams) => {
    const { type, host, port, username, password, database, useSSL } = connectionParams;
    switch (type) {
        case types_1.DbTypes.mysql:
            return new sequelize_1.Sequelize(host, username, password, { dialect: "mysql", port: port ? port : 3306, database, ssl: useSSL });
        case types_1.DbTypes.postgres:
            return new sequelize_1.Sequelize(host, username, password, { dialect: "mysql", port: port ? port : 5413, database, ssl: useSSL });
        default:
            return false;
    }
};
exports.default = InitDB;
