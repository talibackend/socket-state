import { Server } from 'ws';
import { DbConnection, DbTypes } from './types';

export class StatefulSocket{
    private ws : Server;
    public httpServer : any;
    protected trustedHosts? : Array<string>;
    protected globalConnections : {};

    constructor(httpServer : any, options : {connectionParams : DbConnection, trustedHosts? : Array<string>}){
        
        let autoAcceptConnections : boolean = false;

        if(options.trustedHosts){
            this.trustedHosts = this.trustedHosts
            autoAcceptConnections = false;
        }
        console.log(options.connectionParams.type);

        this.ws = new Server({
            server : httpServer,
            autoAcceptConnections
        })
        this.globalConnections = {};
    }
}