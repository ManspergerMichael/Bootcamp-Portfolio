var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";

//myString's datatype was initialized as string and will not accept a datatype of int.
//I corrected this by entering 9 as a string.

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("9"));
 //sayHello takes a string datatype argument. Changing the passed parameter from int to string fixes the bug.

 function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 
 //You can declare an argument as optional with typescript.
 //setting middleName to optional with the '?' operateor corrected the bug.
 //I tried putting in an if else block into the function but that created runtime errors.

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
 
 //jay's belt parameter was misspelled. The function tried to use a variable that wasn't there.


 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Fuma", "Kutaro");
 //Added the keyword new and passed strings to the constructor
 
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(shane));
 //turing is a dictionary object. The programmer: apparently looks for datatypes. Setting this-
 //type to Ninja allows the study finction to accept the shane object as a argument.


var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x; //removed brackets as there is no return statement
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y; //corrected syntax
console.log(multiply(5, 2)); //called function
// Nor is this working:
var math = (x, y) => { //added brackets and called function
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}
console.log(math(8, 3));

class Elephant {
    constructor(public age: number){}
    //birthday = function(){
    //   this.age++;
    // }
    birthday = () => this.age++;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
 //The this. keyword was binding to the window object. Using an arow function keeps the binding to the origonal context.