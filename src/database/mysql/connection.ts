import { Sequelize } from 'sequelize';
import { DbConnection, DbTypes } from '../../types';

const InitDB = (connectionParams : DbConnection) : Sequelize | boolean=>{
    const {
        type,
        host,
        port,
        username,
        password,
        database,
        useSSL
    } = connectionParams;
    switch (type) {
        case DbTypes.mysql:
            return new Sequelize(host, username, password, {dialect : "mysql", port : port ? port : 3306, database, ssl : useSSL});
        case DbTypes.postgres:
            return new Sequelize(host, username, password, {dialect : "mysql", port : port ? port : 5413, database, ssl : useSSL});
        default:
            return false;
    }
}

export default InitDB;