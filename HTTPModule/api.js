var http=require("http");

var data=require("./data/inventory");

http.createServer(function(req,res){

res.writeHead(200,{"Content-Type":"text/json"});

res.end(JSON.stringify(data));

}).listen(3000);

console.log("server listening on port 3000");