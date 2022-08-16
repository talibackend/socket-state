import { Server } from 'ws';
import { DbTypes, DbConnection } from './types';

export class StatefulSocket{
    private ws : Server;
    public httpServer : any;
    protected trustedHosts? : Array<string>;
    protected globalConnections : {};

    constructor(httpServer : any, options : {dbType : DbTypes, connectionParams : DbConnection, trustedHosts? : Array<string>}){
        let autoAcceptConnections : boolean = false;

        if(options.trustedHosts){
            this.trustedHosts = this.trustedHosts
            autoAcceptConnections = false;
        }
        console.log(options.dbType);

        this.ws = new Server({
            server : httpServer,
            autoAcceptConnections
        })
        this.globalConnections = {};
    }
}