//reward after 30 days
var reward = 1; 
for(var day = 1; day < 31; day++){
    reward = reward * 2;
  
}
console.log("The reward after 30 days is $"+(reward * 0.01));

//number of days until reward is over $10000
var reward = 1;
for(var day = 1; (reward*0.01) < 10000; day++){
    reward = reward * 2;
}
console.log("It took "+day+" days to reach $10000 Reward is: $"+reward);

//number of days until reward reaches 1 billion
var reward = 1;
for(var day = 1; (reward*0.01) < 100000000; day++){
    reward = reward * 2;
}
console.log("It took "+day+" days to reach $100000000 Reward is: $"+(reward*0.01));

var reward = 1;
for(var day = 1; (reward*0.01) != Infinity; day++){
    reward = reward * 2;
}
console.log("It took "+day+" days to reach Infinity Reward is: $"+(reward*0.01));