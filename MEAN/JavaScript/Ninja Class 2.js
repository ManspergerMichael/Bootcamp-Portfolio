function ninja(name){
    var speed = 3;
    var strength = 3;
    this.name = name;
    this.health = 100;
    this.sayName = function(){
        console.log("My name is "+this.name+"!");
        return this;
    }
    this.showStats = function(){
        console.log("My name is "+this.name+"! My strength is "+strength+"! My speed is "+speed+"! My health is "+this.health+"!");
        return this;
    }
    this.drinkSake = function(){
        console.log("DRUNKEN MASTER STYLE!");
        this.health = this.health + 10;
        return this;
    }

    this.punch = function(badGuy){
        if(badGuy instanceof ninja){
            badGuy.health - 5;
            console.log(this.name+" Punched "+badGuy.name+" and lost 5 health")
        }
        else{
            console.log("Error: Passed parameter is not of type ninja")
        }
    }

    this.kick = function(badGuy){
        if(badGuy instanceof ninja){
            badGuy.health - 15;
            console.log(this.name+" Kicked "+badGuy.name+" and lost 15 health")
        }
        else{
            console.log("Error: Passed parameter is not of type ninja")
        }
    }

    this.getStrength = function(){
        return this.strength;
    }

    this.getSpeed = function(){
        return speed;
    }
}

var naruto = new ninja("Naruto");
var speed = new ninja("Speed of Sound Sonic");
naruto.kick(speed);
speed.kick(naruto);