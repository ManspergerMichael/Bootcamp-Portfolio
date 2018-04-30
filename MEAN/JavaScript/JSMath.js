function zero_negitivity(arr){
    let hasNegitive = true;
    for(let i = 0; i < arr.length;i++){
        if (arr[i] < 0){
            hasNegitive = false;
        }
    }
    return hasNegitive;
}

function is_even(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function how_many_even(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(!is_even(arr[i])){
            count +=1;
        }
    }
    return count;
}

function create_dummy_array(arr){
    let randomInt
}