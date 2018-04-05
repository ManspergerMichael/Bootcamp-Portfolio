listToTest = ['magical unicorns',19,'hello',98.98,'world']
strCount = 0
intCount = 0
concatString =""
listSum = 0

for item in listToTest:
    if(isinstance(item,str)):
        strCount +=1
        concatString += item
    if(isinstance(item,int)):
        intCount +=1
        listSum += item
    if(isinstance(item,float)):
        intCount +=1
        listSum += item

if(strCount > 0 and intCount == 0):
    print "String: {} List type String".format(concatString)
elif (strCount ==0 and intCount > 0):
    print "Sum: {} List type Integer".format(listSum)
elif (strCount > 0 and intCount > 0):
    print "String: {} Sum: {} List type Mixed".format(concatString,listSum)
