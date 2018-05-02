var math = require("./mathlib")();

var sum = math.add(21,21);
console.log("The add function returned: "+sum);

var product = math.multiply(7,6);
console.log("The multiply function returned: "+product);

var square = math.square(3);
console.log("The square function returned: "+square);

var rand = math.random(1,100);
console.log("The random function returned: "+rand);