#1
def print255():
    for count in range(1,255):
        print count
#2

def odds():
    for count in range(1,255,2):
        print count
odds()

#3
def printIntsSum():
    sumofCount = 0
    for count in range(0,256):
        sumofCount += count
        print count
    print sumofCount

printIntsSum()

#4
def printArr(arr):
    for count in range(0, len(arr)):
        print arr[count]

arrList = [1,2,3,4,5]
printArr(arrList)

#5
def findMax(arr):
    maximum = arr[0]
    for count in range(0, len(arr)):
        if(maximum < arr[count]):
            maximum = arr[count]
    print maximum

arrList = [1,20,3,4,5]
findMax(arrList)

#6
def avgArr(arr):
    arrSum = 0
    arrAvg = 0
    for count in range(0,len(arr)):
        arrSum += arr[count]
    arrAvg = arrSum/len(arr)
    print arrAvg
avgArr([1,2,3,4,5])

#7
def returnOdds():
    arr = []
    for count in range(1,255):
        if(count%2!=0):
            arr.append(count)
    print arr
returnOdds()

#8
def squareArr(arr):
    for count in range(0,len(arr)):
        arr[count] = arr[count] * arr[count]
    return arr

arr = [1,2,3,4,5]
print squareArr(arr)

#9
def greaterThanY(arr, y):
    gCount = 0
    for count in range(0, len(arr)):
        if( arr[count] > y):
            gCount +=1
    return gCount

arr = [1,2,3,4,5]
y = 2
print greaterThanY(arr,y)

#10
def zeroOut(arr):
    for count in range(0, len(arr)):
        if(arr[count] < 0):
            arr[count] = 0
    return arr

arr = [1,2,-3,4,-5]
print zeroOut(arr)

#11
def maxMinAvg(arr):
    maximum = arr[0]
    minimum = arr[0]
    arrSum = 0
    avg = 0
    for count in range(0, len(arr)):
        if(maximum < arr[count]):
            maximum = arr[count]
        if(minimum > arr[count]):
            minimum = arr[count]
        arrSum += arr[count]
    avg = arrSum/len(arr)
    print maximum,minimum,avg
arr = [1,2,3,4,5]
maxMinAvg(arr)

#12
def shiftArr(arr):
    for count in range(0, len(arr)):
        if count == len(arr)-1:
            arr[count] = 0
        else:
            arr[count] = arr[count +1]
    return arr
arr = [1,2,3,4,5]
print shiftArr(arr)

#13
def swapString(arr):
    for count in range(0, len(arr)):
        if(arr[count] < 0):
            arr[count] = "Dojo"
    return arr

arr =[1,-2,3,-4,5]
print swapString(arr)