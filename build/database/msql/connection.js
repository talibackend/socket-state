"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const types_1 = require("../../types");
const InitDB = (connectionParams) => {
    const { type, host, port, username, password, database, useSSL } = connectionParams;
    switch (type) {
        case types_1.DbTypes.mysql:
            return new sequelize_1.Sequelize(host, username, password, { dialect: "mysql", port: port ? port : 3306, database, ssl: useSSL ? useSSL : false });
        case types_1.DbTypes.postgres:
            return new sequelize_1.Sequelize(host, username, password, { dialect: "postgres", port: port ? port : 5432, database, ssl: useSSL ? useSSL : false });
        default:
            return false;
    }
};
exports.default = InitDB;
