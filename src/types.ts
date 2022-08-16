export enum DbTypes{
    mysql,
    mongodb
}
export interface MysqlConnection{
    host : string,
    port : string,
    username : string,
    password : string,
    database : string,
    users_table? : string,
    connection_store_table? : string
}