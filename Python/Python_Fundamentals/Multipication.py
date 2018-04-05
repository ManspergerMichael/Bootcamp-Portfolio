
print "x",
for count in range(1,13,1):
    print count,
print '\n'
for fCount in range(1,13,1):
    print fCount,
    for sCount in range(1,13,1):
        if(sCount == 12):
            print fCount * sCount
        else:
            print fCount * sCount,

