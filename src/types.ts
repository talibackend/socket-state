export enum DbTypes{
    mysql,
    postgres,
    mongodb
}
export const SqlTypes = [
    "0", "1"
];
export interface DbConnection{
    type : DbTypes,
    host : string,
    port? : number,
    username : string,
    password : string,
    database : string,
    useSSL? : boolean, 
    usersTable? : string,
    connectionStoreTable? : string,
    userUniqueIdField? : string
};