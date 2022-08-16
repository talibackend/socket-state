import { Server } from 'ws';
import { DbTypes, MysqlConnection } from './types';

export class StatefulSocket{
    ws : Server;
    httpServer : any;
    trustedHosts? : Array<string>;
    globalConnections : {};

    constructor(httpServer : any, options : {trustedHosts? : Array<string>, dbType : DbTypes}){
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