import { Server } from 'ws';

export class StatefulSocket{
    ws : Server;
    httpServer : any;
    trustedHost? : string;

    constructor(httpServer : any, options? : {trustedHost? : string}){
        let autoAcceptConnections : boolean;

        this.ws = new Server({
            server : httpServer,
            autoAcceptConnections : false
        })
    }
}