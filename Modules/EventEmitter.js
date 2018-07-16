var EventEmitter=require('events').EventEmitter;
var util=require('util');

var Person=function(name){
    this.name=name;
};

util.inherits(Person,EventEmitter);

var ben=new Person("Ben franklin");
ben.on('speak',function(said){
console.log(`${this.name}`);
});

ben.emit('speak',"you may delay, but time will not");