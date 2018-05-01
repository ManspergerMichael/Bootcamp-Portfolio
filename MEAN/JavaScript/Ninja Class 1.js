function ninjaConstructor(name){
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

    this.getStrength = function(){
        return this.strength;
    }

    this.getSpeed = function(){
        return speed;
    }
}

var naruto = new ninjaConstructor("Naruto");
naruto.sayName().showStats().drinkSake().showStats();