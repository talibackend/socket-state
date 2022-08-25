"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const UserModelInitiator = (sequelize, usersTable, userUniqueIdField) => {
    class User extends sequelize_1.Model {
    }
    ;
    let columns = {};
    columns[`${userUniqueIdField}`] = {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    };
    User.init({ column: columns }, { sequelize, tableName: usersTable });
};
exports.default = UserModelInitiator;
