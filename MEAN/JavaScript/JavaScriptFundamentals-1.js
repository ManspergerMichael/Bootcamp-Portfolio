//Basic 1
let x = [];
console.log(x);
x.push("Coding");
x.push("Dojo");
x.push("Rocks");
x.pop();
console.log(x);

//Basic 2
const y = [];
console.log(y);
y.push(88);
console.log(y);
//returned an array of length 1 with the value of 88

//basic 3
let z = [9,10,6,5,-1,20,13,2];
console.log("Printing array");
for (let i = 0; i<z.length;i++){
    console.log(z[i]);
}
console.log("Printing array except last element");
for(let i = 0; i<z.length-1;i++){
    console.log(z[i]);
}

//Basic 4
let names = ["Kadie","Joe","Fritz","Pierre","Alphonso"];
for(let i = 0; i < names.length; i++){
    if(names[i].length == 5)
    console.log(names[i]);
}

//Basic 5
let yell = function(string){
    console.log(string.toUpperCase());
}
yell("gigity");