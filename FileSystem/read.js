var fs=require("fs");

var contents=fs.readFileSync("./lib/saying.md","UTF-8");

console.log(contents);