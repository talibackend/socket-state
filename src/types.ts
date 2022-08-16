export enum DbTypes{
    mysql,
    mongodb
}
export interface DbConnection{
    host : string,
    port? : number,
    username : string,
    password : string,
    database : string,
    usersTable? : string,
    connectionStoreTable? : string,
    userUniqueIdField? : string
};