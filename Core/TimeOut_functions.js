var waitTime=3000;
var currentTime=0;
var waitedInterval=500;
var percentWaited=0;

function writtenWaitingPercent(p){
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ....${p}`);
}

var interval=setInterval(function(){
    currentTime+=waitedInterval;
    percentWaited=Math.floor((currentTime/waitTime) * 100);
    writtenWaitingPercent(percentWaited);
},waitedInterval);

setTimeout(function(){
    clearInterval(interval);
    writtenWaitingPercent(100);
    console.log("done");
},waitTime);

process.stdout.write("\n\n");
writtenWaitingPercent(percentWaited);