#Part 1
def stairs(arr):
    #initalize string of stars to be printed
    stars = ""
    #for each element in list...
    for count in range(len(arr)):
        #...for the value in each element, add * to the stars string, i.e value of 4 will create string '****'
       for stair in range(arr[count]):
           stars += "*"
        #after inner loop creates the string, print 
       print stars
       #empty the string so it can be used for the next element in the list
       stars = ""

#Part 2
def draw_stairs(arr):
    #Initilize strings
    stars = ""
    letters = ""
    #iterate through each element in list
    for count in range(len(arr)):
        #if an element is of type int...
        if(isinstance(arr[count],int)):
            #...add *'s equal to element value, i.e: value of 4 will make string '****'
            for stair in range(arr[count]):
                stars += "*"
            #after inner loop creates the string, print
            print stars
            #empty the string so it can be used for the next element in the list
            stars =""
        #if element in list is of type str
        elif(isinstance(arr[count],str)):
            #for the length of the string...
            for chars in arr[count]:
                #...add the first letter of the string to letters string, i.e: 'Jimmy'(length of 5) creates the string jjjjj
                letters += str.lower(arr[count][:1])
            #print letters string
            print letters
            #empty letters string for next element
            letters = ""

x = [4, 6, 1, 3, 5, 7, 25]
stairs(x)

y = [4, 6, "Jimmy", 3, 5, "Timmy", 25]
draw_stairs(y)

