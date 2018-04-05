#Class note: dictionaries are unorederd, output will be random
#how dict() function works
#for key,data in tempTuple:
    #add values of tuple elements as key:value pairs
    #new_dict[key] = data

name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]

def make_dict(list1, list2):
  new_dict = {}
  tempTuple = ()
  #if the lists are of difrent length
  if(len(list1) != len(list2)):
      #if list 1 is longer, use list 1 as key
      if(len(list1) > len(list2)):
          #print "list 1 is longer"
          tempTuple = zip(list1,list2)
      #if list 2 is longer, use list 2 as key list
      elif(len(list1) < len(list2)):
          #print "list 2 is longer"
          tempTuple = zip(list2,list1)
  #otherwise use list 1 as key
  else:
      tempTuple = zip(list1,list2)
  #create dictionaryt from tuple
  new_dict = dict(tempTuple)
  return new_dict

myDictionary = {}
myDictionary = make_dict(name, favorite_animal)
print myDictionary