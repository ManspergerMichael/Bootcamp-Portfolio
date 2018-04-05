function printRange(start, end, skip){

    if(skip == undefined){
        skip = 1;
    }
    if(end == undefined){
        end = start; 
        start = 0;
    }
    
    start = Math.abs(start);
    end = Math.abs(end);
    skip = Math.abs(skip);
    console.log(start);
    console.log(end);
    console.log(skip);

    for(var i = start; i < end; i+=skip){
        console.log(i);
    }
}