import { Model, DataTypes, Sequelize, DataType } from 'sequelize';

const UserModelInitiator = (sequelize : Sequelize, usersTable : string, userUniqueIdField : string)=>{
    let columns = {}

    columns[`${userUniqueIdField}`] = {
        type : userUniqueIdField != "id" ? DataTypes.UUID : DataTypes.INTEGER,
        autoIncrement : userUniqueIdField != "id" ? false : true,
        allowNull : false,
        primaryKey : userUniqueIdField != "id" ? false : true 
    };
    sequelize.define("User", {
        ...columns
    }, {tableName : usersTable});
    return sequelize;
}

export default UserModelInitiator;