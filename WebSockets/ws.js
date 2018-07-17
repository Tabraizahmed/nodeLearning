var WebSocketServer = require("ws").Server;
var wss = new WebSocketServer({ port: 3000 });

wss.on("connection", function(ws) {

    ws.on("message",function(message){
        if(message === 'exist'){
            ws.close();
        }
        else{
            wss.clients.forEach(function(client){
                client.send(message);
            })
        }
    })

	ws.send("Welcome to cyber chat");

});