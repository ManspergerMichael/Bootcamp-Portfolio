import random 
def grades():
    print "Scores and Grades"
    for count in range(1,11):
        grade = random.randint(60,100)
        if(grade > 60 and grade < 69):
            print "Score: {}; Your grade is D".format(grade)
        if(grade > 70 and grade < 79):
            print "Score: {}; Your grade is C".format(grade)
        if(grade > 80 and grade < 89):
            print "Score: {}; Your grade is B".format(grade)
        if(grade > 90 and grade < 100):
            print "Score: {}; Your grade is A".format(grade)

grades()


