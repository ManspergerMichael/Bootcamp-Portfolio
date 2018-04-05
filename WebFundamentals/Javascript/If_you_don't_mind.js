//Time Variables
var HOUR = 12;
var MINUTE = 00;
var PERIOD = 'AM';

//takes HOUR MINUTE and PERIOD as parameters and constructs a specific string message to be printed to the console.
function clock(HOUR,MINUTE,PERIOD){
//Pecies of the message to print
var afterMessage = "I'ts just after ";
var almostMessage = "I'ts almost ";
var halfMessage = "It's half past ";
var quarterMessage = "It's quarter after ";
var fiveMessage = "It's five after "
var amMessage =" in the morning."
var afterNoonMessage = " in the afternoon";
var pmMessage =" in the evening."
var nightMessage =" at night";
//full message is constructed here
var fullMessage;


//Midnight and Noon messages
if(HOUR === 12 && MINUTE === 00 && PERIOD === 'AM'){
    fullMessage = "Midnight";
}
else if(HOUR === 12 && MINUTE === 00 && PERIOD === 'PM'){
    fullMessage = "Noon";
}
//This block constructs the "I'ts almost (HOUR + 1)"
else if(MINUTE > 30){
    //adds one hour to message
    fullMessage = almostMessage+(HOUR+1);
    //afternoon
    if(HOUR < 5 && PERIOD === 'PM'){
        fullMessage += afterNoonMessage;
    }
    //night
    else if(HOUR > 8 && PERIOD === 'PM'){
        fullMessage += nightMessage;
    }
    //morning
    else if(PERIOD == 'AM'){
        fullMessage += amMessage;
    }
    //evening
    else{
        fullMessage += pmMessage;
    }
}
//This block constructs the "Just after HOUR" message
else if(MINUTE < 30 && MINUTE > 15){
    fullMessage = afterMessage+HOUR;
    //afternoon
    if(HOUR < 5 && PERIOD === 'PM'){
        fullMessage += afterNoonMessage;
    }
    //night
    else if(HOUR > 8 && PERIOD === 'PM'){
        fullMessage += nightMessage;
    }
    //morning
    else if(PERIOD == 'AM'){
        fullMessage += amMessage;
    }
    //evening
    else{
        fullMessage += pmMessage;
    }
}
//This block constructs the "half past HOUR" message
else if(MINUTE === 30){
    fullMessage = halfMessage+HOUR;
    //afternoon
    if(HOUR < 5 && PERIOD === 'PM'){
        fullMessage += afterNoonMessage;
    }
    //night
    else if(HOUR > 8 && PERIOD === 'PM'){
        fullMessage += nightMessage;
    }
    //morning
    else if(PERIOD == 'AM'){
        fullMessage += amMessage;
    }
    //evening
    else{
        fullMessage += pmMessage;
    }
}
//This block constructs the "quarter past HOUR" message
else if(MINUTE === 15){
    fullMessage = quarterMessage+HOUR;
    //afternoon
    if(HOUR < 5 && PERIOD === 'PM'){
        fullMessage += afterNoonMessage;
    }
    //night
    else if(HOUR > 8 && PERIOD === 'PM'){
        fullMessage += nightMessage;
    }
    //morning
    else if(PERIOD == 'AM'){
        fullMessage += amMessage;
    }
    //evening
    else{
        fullMessage += pmMessage;
    }
}
//This block constructs the "five past HOUR" message
else if(MINUTE === 05){
    fullMessage = fiveMessage+HOUR;
    //afternoon
    if(HOUR < 5 && PERIOD === 'PM'){
        fullMessage += afterNoonMessage;
    }
    //night
    else if(HOUR > 8 && PERIOD === 'PM'){
        fullMessage += nightMessage;
    }
    //morning
    else if(PERIOD == 'AM'){
        fullMessage += amMessage;
    }
    //evening
    else{
        fullMessage += pmMessage;
    }
}
console.log(fullMessage);
}