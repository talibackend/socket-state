import { Server } from 'ws';
enum dbTypes{
    mysql,
    mongodb
}

export class StatefulSocket{
    ws : Server;
    httpServer : any;
    trustedHosts? : Array<string>;
    globalConnections : {};

    constructor(httpServer : any, options : {trustedHosts? : Array<string>, dbType : dbTypes}){
        let autoAcceptConnections : boolean;

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