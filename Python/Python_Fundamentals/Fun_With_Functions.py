#Iterates fromn 1 to 2000, tests if count is an even or odd number, prints result
def OddEven():
    for count in range(1,2001):
        if(count%2==0):
            print "Number is {}. This is an even number.".format(count)
        elif(count%2!=0):
            print "Number is {}. This is an odd number.".format(count)

#Takes a list and a int as arguments, returns list with all values multiplyed by the int argument
def Multiply(arr, mult):
    for count in range(0, len(arr)):
        arr[count] = arr[count]*mult
    return arr
#a = [3,5,12,24]
#b = Multiply(a,5)
#print b

# layered multiples takes an array and creates a list of 1's equal to the value in the passed array
# that list is then appended to newList that wil be returned.
# input: [1,2,3] output: [[1],[1,1],[1,1,1]]
def layered_multiples(arr):
    newList = []
    innerList = []
    value = 0
    for count in range(0,len(arr)):
        value = arr[count]
        for newCount in range(0,value):
            innerList.append(1)
        newList.append(innerList)
        innerList = []
    return newList

a = [2,4,5]
b = layered_multiples(Multiply(a,3))
print b



