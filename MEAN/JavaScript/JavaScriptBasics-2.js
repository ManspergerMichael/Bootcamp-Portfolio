function magic_multiply(x,y){
    let arr = [];
    let str = "";

    if (x == 0 && y == 0){
        return "All inputs 0";
    }
    
    if(x.constructor === Array && typeof y === 'number'){
        for(let i = 0; i < x.length; i++){
            arr.push(x[i] * y);
        }
        return arr;
    }

    if(y.constructor === Array && typeof x === 'number'){
        for(let i = 0; i < y.length; i++){
            arr.push(y[i] * x);
        }
        return arr;
    }

    /*
    if(typeof x === 'string' || typeof y === 'string'){
        return "Error: Can not multiply by string";
    }
    */
   if (typeof x === 'string' && typeof y === 'number'){
        for(let i = y; i > 0; i--){
            str += x;
        }
        return str;
   }
   
   return x * y;
    
}

let test1= magic_multiply(5,2);
console.log(test1);

let test2 = magic_multiply(0,0);
console.log(test2);

let test3 = magic_multiply([1,2,3], 2);
console.log(test3);

//let test4 = magic_multiply(7, 'three');
//console.log(test4);

let test5 = magic_multiply("Brendo", 4);
console.log(test5);