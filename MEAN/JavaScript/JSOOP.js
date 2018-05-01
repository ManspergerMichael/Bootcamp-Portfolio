function catConstructor(name, color){
    this.name = name;
    this.color = color;
   
}

function kittenConstuctor(name,color,size){
    var kitten = catConstructor(name,color);
    this.size = size;
    this.purr = function(){
        console.log("Purr!");
    }
}
var cat1 = new catConstructor("Stinky","Brown");
var kitten1 = new kittenConstuctor("MurderCruel", "Black", "Tiny");
catConstructor.prototype.purr = function(){
    console.log("Prototype Meow!");
}
kittenConstuctor.prototype.purr = function(){
    console.log("Prototype Purr!");
}

cat1.purr();
kittenConstuctor.purr();