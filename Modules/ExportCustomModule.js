var Person=require("./lib/Person");
var ben=new Person("Ben Franklin");
var geroge=new Person("George Washington");

geroge.on('speak',function(said){
    console.log(`${this.name}->${said}`);
})

var ben=new Person("Ben franklin");

ben.on('speak',function(said){
console.log(`${this.name}->${said}`);
});

ben.emit('speak',"you may delay, but time will not");
geroge.emit('speak','It is far better to be alone, than to be in bad company.');
