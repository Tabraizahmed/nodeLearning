var fs=require("fs");

var md= `
==========================

Sample subtitle
----------------
*point
*point
*point

`;

fs.write("sample.md",md.trim(),function(err){
    console.log(err);
})