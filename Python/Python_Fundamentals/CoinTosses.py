import random
def coinTosses():
    heads = 0
    tails = 0
    for count in range(1,5001):
        flip = round(random.random())
        if(flip == 1.0):
            heads += 1
            print "Attempt #{}: Throwing a coin... It's a head! ... Got {} head(s) so far and {} tail(s) so far".format(count,heads,tails)
        else:
            tails += 1
            print "Attempt #{}: Throwing a coin... It's a tail! ... Got {} head(s) so far and {} tail(s) so far".format(count,heads,tails)
    print "Ending the Program, thank you!"

coinTosses()
