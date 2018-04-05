#I can't belive it was this easy. Let me know if I need to redo this.
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}

def makeTuple(myDict):
    return myDict.items()

myTuple = makeTuple(my_dict)
print myTuple