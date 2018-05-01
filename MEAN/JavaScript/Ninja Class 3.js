class Ninja{
    constructor(name){
        this._name = name;
        this._health = 100;
        this._strength = 3;
        this._speed = 3;
    }
    sayName(){
        return this._name;
    }
    showStats(){
        return `My name is ${this._name} my health is ${this._health} my strength is ${this._strength} my speed ${this._speed}`
    }
    drinkSake(){
        //console.log("I shpy beeeter after I haaaave a feeeeeeeeewwwwww");
        this._health = this._health +10;
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this._health = 200;
        this._strength = 10;
        this._speed = 10;
        this._wisdom = 10;
    }
    speakWisdom(){
        super.drinkSake();
        console.log("Press x to not die.");
    }
    senseiStats(){
        var message = super.showStats();
        message += ` my wisdom is ${this._wisdom}`
        return message;
    }
}
var naruto = new Ninja("Naruto");
console.log(naruto.sayName());
console.log(naruto.showStats());
naruto.drinkSake();

var splinter = new Sensei("Splinter");
splinter.speakWisdom();
console.log(splinter.senseiStats());