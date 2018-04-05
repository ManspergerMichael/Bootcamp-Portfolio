students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

def listReader(lister):
    for i in range(len(lister)):
        print lister[i]['first_name'], lister[i]['last_name']

def dictionaryReader(names):
    #iterate through the keys Students and Instrctors
    for dictOne, keys in names.items():
        #count to list names
        count = 1
        #to store string of first and last name
        name = ""
        #prints the keys Students and Instructors
        print dictOne
        #iterate through the list of objects held in the outer dictionary
        #Object - Lists - Object
        for lists in keys:
            name = lists['first_name']+lists['last_name']
            print str(count)+" - "+name+" - "+str(len(name))
            count +=1

#function calls
listReader(students)
dictionaryReader(users)


#function for reading users, didn't work but keeping it for refrence
def dictRead(names):
    for dictOne in names.iterkeys():
        count = 1
        name = ""
        print dictOne
        for dictOne in names.itervalues():
            for lists in dictOne:
                name = lists['first_name']+lists['last_name']
                print str(count)+" - "+name+" - "+str(len(name))
                count +=1



