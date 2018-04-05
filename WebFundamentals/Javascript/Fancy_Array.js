function fancyArray(arr, symbol, reversed){
//if reversed is false, iterate through array from the start
    if(!reversed){
        for(var i = 0;i<arr.length;i++){
            console.log(i+" "+symbol+" "+arr[i]);
        }
    }
    //else if reversed is false iterate from end to start
    else if(reversed){
        for(var i = arr.length -1; i > -1; i--){
        console.log(i+" "+symbol+" "+arr[i]);
        }
    }
}