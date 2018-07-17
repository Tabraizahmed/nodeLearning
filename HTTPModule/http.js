var https=require("http");
//var fs=require("fs");

var options={
    hostname:"aspmvcsnippets.com",
    port:80,
    path:"/Article/image-swaping-using-jquery.aspx",
    method:"GET"
};

var req=https.request(options,function(res){
    var responseBody="";

    console.log("Response from server started");
    console.log(`Server status: ${res.statusCode} `);
    console.log("Response Headers: %j", res.headers);

    res.setEncoding("UTF-8");
    
    res.once("data",function(chunk){
        console.log(`--chunk-- ${chunk.length} `);
        responseBody += chunk;
    });

    res.on("end",function(){
        
            console.log("File Downloaded");
       
    })
});
req.on("error",function(err){
    console.log(`problem with request : ${err.message} `);
});