#find and replace

words = "It's thanksgiving day. It's my birthday,too!"
print words.find("day")
words = words.replace("day","month")
print words

#Min and max

x = [2,54,-2,7,12,98]
print ("Maximum: {}").format(max(x))
print ("Minimum: {}").format(min(x))

max = x[0];
min = x[0];
for i in x:
    if max < i:
        max = i
    if min > i:
        min = i
print "Max: {} Min: {}".format(max, min)


#First and Last

x = ["hello",2,54,-2,7,12,98,"world"]
y =[x[0],x[len(x)-1]]
print y


#New List
x = [19,2,54,-2,7,12,98,32,10,-3,6]
x = sorted(x)
#y = the first half of the list
y = x[:(len(x)/2)]
#deletes first half of the list
del x[:len(x)/2]
#insert list Y into x[0]
x.insert(0,y)
print x
