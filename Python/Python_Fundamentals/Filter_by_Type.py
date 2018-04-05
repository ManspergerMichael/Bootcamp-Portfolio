#variables and data provided initilized here
sI = 45
mI = 100
bI = 455
eI = 0
spI = -23
sS = "Rubber baby buggy bumpers"
mS = "Experience is simply the name we give our mistakes"
bS = "Tell me and I forget. Teach me and I remember. Involve me and I learn."
eS = ""
aL = [1,7,4,21]
mL = [3,5,7,34,3,2,113,65,8,89]
lL = [4,34,22,68,9,13,3,5,7,9,2,12,45,923]
eL = []
spL = ['name','address','phone number','social security number']

#Set test to variable above to test
test = spL
#Tests if a number is above or below 100 and prints a message 
if(isinstance(test,int)):
    if(test >= 100):
        print "Thats a big number!"
    elif(test < 100):
        print "Thats a small number"

#Tests if a string is longer or shorter than 50 characters and prints a message
if(isinstance(test,str)):
    if(len(test) >= 50):
        print "Long sentence"
    elif(len(test) < 50):
        print "Short sentence"

#Tests if a list is larger or equal to 10 or less than 10
if(isinstance(test,list)):
    if(len(test) >= 10):
        print "Big List!"
    elif(len(test) < 10):
        print "Short List"