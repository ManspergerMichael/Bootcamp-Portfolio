class Dot {
    constructor(x , y){
        this.x = x;
        this.y = y;
        console.log("New Dot!")
    }
    //prototype method
    showLocation() {
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This ${ this.constructor.name } is at x ${this.x} and y ${this.y}`);
    }
    //static method
    static getHelp(){
        console.log("Lets pretend this was helpful.")
    }
    parentFunction(){
        return "This is coming from the parent!";
    }
}

class Circle extends Dot {
    constructor(x, y, radius){
        super(x,y);
        this.radius = radius;
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
}

/* For ES6 basic
const dot1 = new Dot(10,10);
dot1.showLocation();
Dot.getHelp();
*/

const circle1 = new Circle(33,33,33);
console.log(circle1);
//circle1.showLocation();
circle1.childFunction();