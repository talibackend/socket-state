import { Server } from 'ws';
import { DbConnection, DbTypes, SqlTypes } from './types';
import SqlConnection from './database/mysql/connection';

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

        this.connectionParams = options.connectionParams;
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
        }
    } 
}