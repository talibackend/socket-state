import { Model, DataTypes, Sequelize, DataType } from 'sequelize';

const UserModelInitiator = (sequelize : Sequelize, usersTable : string, userUniqueIdField : string)=>{

    class User extends Model{};
    let columns = {}

    columns[`${userUniqueIdField}`] = {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    };

    User.init({column : columns as DataType}, {sequelize, tableName : usersTable});

}

export default UserModelInitiator;