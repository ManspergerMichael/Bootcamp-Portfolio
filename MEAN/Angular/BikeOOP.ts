class Bike {
    public miles: number = 0;
    constructor(public price: number, public max_speed: number) {
       
    }
    display = function() {
        console.log(this.price, this.max_speed, this.miles);
        return this;
    }
    ride = function () {
        this.miles = this.miles + 10;
        return this;
    }
    reverse = function () {
        if (this.miles <= 0) {
            this.miles = 0;
            console.log("Can't go back any further!");
        }
        else{
            this.miles = this.miles - 5;
        }
        return this;
    }
   //birthday = function(){
   //   this.age++;
   // }
   //birthday = () => this.age++;
}
let bike1 = new Bike(200, 25);
let bike2 = new Bike(300, 40);
let bike3 = new Bike(500000, 88);

bike1.ride().ride().ride().reverse().display();

bike2.ride().ride().reverse().reverse().display();

bike3.reverse().reverse().reverse().display();