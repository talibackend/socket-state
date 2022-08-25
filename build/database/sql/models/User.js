"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserModelInitiator = (sequelize, usersTable, userUniqueIdField) => {
    let columns = {};
    columns[`${userUniqueIdField}`] = {
        type: userUniqueIdField != "id" ? sequelize_1.DataTypes.UUID : sequelize_1.DataTypes.INTEGER,
        autoIncrement: userUniqueIdField != "id" ? false : true,
        allowNull: false,
        primaryKey: userUniqueIdField != "id" ? false : true
    };
    sequelize.define("User", Object.assign({}, columns), { tableName: usersTable });
    return sequelize;
};
exports.default = UserModelInitiator;
