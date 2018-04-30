//GIVEN
console.log(example);
let example = "I'm the example!";    
//After Hoisting
console.log(example);
let example = "I'm the example"
//let prevents the variable declration from hoisting to the top

//#1
//GIVEN
//console.log(hello);                                   
var hello = 'world';                                 
//After Hoisting
var hello;
console.log(hello);
//hello = 'world';

//result is undefined

//#2
//GIVEN
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);
}
//After hoisting
var needle;
function test(){
    var needle;
    needle = 'magnet';
    console.log(needle);
}
needle = 'haystack';
test();

//Expected output 'magnet


//#3
//Given
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);
//After Hoisting
var brendan;
function print(){
    brendan = 'only ok';
    console.log(brendan);
}
brendan = 'super cool';
console.log(brendan);
//Expected output 'super cool'

//#4
//Given
var food = 'chicken';
console.log(food);
eat();
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}
//After Hoisting
var food;
function eat(){
    var food;
    food = 'half-chicken';
    console.log(food);
    food = 'gone';
}
food = 'chicken';
console.log(food);
eat();
//Expected output 'chicken' 'half chicken'


//#5
//given
mean();
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);
//After Hoisting
var mean;
mean = function(){
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food)
}
mean();
console.log(food);
//expected output: chiscken fish undefined
//recieved "mean is not a function" error
//rearranged code for proper hoisting
var mean;
mean();
console.log(food);
mean = function(){
    var food;
    food = "chicken";
    console.log(food);
    food = "fish";
    console.log(food)
}

//#6
//Given
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);
	var genre = "r&b";
	console.log(genre);
}
console.log(genre);
//After Hoisting
var genre;
function rewind(){
    var genre;
    genre = "rock";
    console.log(genre);
    genre = "r&b";
    console.log(genre);
}
console.log(genre);
genre = 'disco';
rewind();
console.log(genre);
//expected output:undefined rock r&b  disco

//#7
//Given
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
	dojo = "seattle";
	console.log(dojo);
	var dojo = "burbank";
	console.log(dojo);
}
console.log(dojo);
//After Hoisting
var dojo; //?
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose";
console.log(dojo);
learn();
console.log(dojo);
//expected output: undefined seattle burbank undefined
//actual output: san jose seattle burbank san jose, is var implied?


//#8
//Given
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}
//After Hoisting
function makeDojo(name, students){
            const dojo = {};
            dojo.name = name;
            dojo.students = students;
            if(dojo.students > 50){
                dojo.hiring = true;
            }
            else if(dojo.students <= 0){
                dojo = "closed for now";
            }
            return dojo;
    }
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
//expected output: error assignment to const