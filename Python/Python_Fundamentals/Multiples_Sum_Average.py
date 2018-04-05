#Prints all odd numbers between 1 and 1000
for i in range(1,1000):
    if i%2==0:
        pass
    else:
        print i

#Prints multiples of 5 between 5 an 1000000
for i in range(5,1000000):
    if i%5==0:
        print i

#Prints the sum of all values in an array if ints
a = [1, 2, 5, 10, 255, 3]
sum = 0
for i in a:
    sum += i
print sum

#prints the average of a list of ints
a = [1, 2, 5, 10, 255, 3]
sum =0
avg =0
for i in a:
    sum += i
avg = sum / len(a)
print avg
