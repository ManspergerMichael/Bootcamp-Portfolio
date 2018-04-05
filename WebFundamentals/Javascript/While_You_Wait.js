
for(var daysUntilMyBirthday = 60; daysUntilMyBirthday >= 0; daysUntilMyBirthday--){
    if(daysUntilMyBirthday >= 30){
        console.log(daysUntilMyBirthday +"days until my birthday. Such a long time...");
    }
    if(daysUntilMyBirthday < 30){
        console.log(daysUntilMyBirthday +"days until my birthday. It's getting closer!");
    }
    if(daysUntilMyBirthday < 5){
        console.log(daysUntilMyBirthday +"DAYS UNTIL MY BIRTHDAY!!!");
    }
    if(daysUntilMyBirthday === 1){
        console.log(daysUntilMyBirthday +"DAY UNTIL MY BIRTHDAY!!!");
    }
    if(daysUntilMyBirthday === 0){
        console.log(daysUntilMyBirthday ="yay!");
    }
}