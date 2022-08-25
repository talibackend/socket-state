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
            return new Sequelize(host, username, password, {dialect : "mysql", port : port ? port : 3306, database, ssl : useSSL ? useSSL : false});
        case DbTypes.postgres:
            return new Sequelize(host, username, password, {dialect : "postgres", port : port ? port : 5432, database, ssl : useSSL ? useSSL : false});
        default:
            return false;
    }
}

export default InitDB;