import { Server } from 'ws';
import { DbConnection, DbTypes, SqlTypes } from './types';
import SqlConnection from './database/sql/connection';
import UserModelInitiator from './database/sql/models/User';

export class StatefulSocket{
    private ws : Server;
    public httpServer : any;
    protected trustedHosts? : Array<string>;
    protected globalConnections : {};
    protected connectionParams : DbConnection;
    protected dbInstance;

    constructor(httpServer : any, options : {connectionParams : DbConnection, trustedHosts? : Array<string>}){
        
        let autoAcceptConnections : boolean = false;

        if(options.trustedHosts){
            this.trustedHosts = this.trustedHosts
            autoAcceptConnections = false;
        }

        options.connectionParams.userUniqueIdField = options.connectionParams.userUniqueIdField ? options.connectionParams.userUniqueIdField : "id"; 
        options.connectionParams.usersTable = options.connectionParams.usersTable ? options.connectionParams.usersTable : "users"; 
        options.connectionParams.connectionStoreTable = options.connectionParams.connectionStoreTable ? options.connectionParams.connectionStoreTable : "ws_connections"; 


        this.connectionParams = options.connectionParams;
        this.httpServer = httpServer;
        this.initDbConnection();

        // this.ws = new Server({
        //     server : httpServer,
        //     autoAcceptConnections
        // })

        // this.globalConnections = {};
    }
    public async initDbConnection(){
        if(SqlTypes.includes(`${this.connectionParams.type}`)){
            this.dbInstance = SqlConnection(this.connectionParams);
            try{
                this.dbInstance = UserModelInitiator(this.dbInstance, this.connectionParams.usersTable, this.connectionParams.userUniqueIdField)
                await this.dbInstance.sync({force : true});
            }catch(error){
                console.log(`Failed to connect to database : ${error}`);
            }
        }
    } 
}