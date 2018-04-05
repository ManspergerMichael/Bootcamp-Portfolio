Meeeeeeeee = {"Name": "Michael Mansperger",
              "Age": 32,
              "Country": "USA",
              "faveorite language": "Python",
              "Likes": ["Smiting my enemies",
                        "Seeing them driven before me",
                        "And listining to the lamentations of their women"]}

booksByGenra = {"Sci-Fi":["Will Save The Galixy For Food", "Hitchhickers Guide To The Galixy", "Starship Troopers"],
                "Fantasy":["Sojurn(Drizz Do Ur'din)", "Lord of The Rings", "Princess Bride"],
                "Self-Help":["12 Rules For Life","Power of Now"],
                "Graphic Novels":["Watchmen","Sandman","League of Extrodnary Gentalmen","Saga"] }

alergyDict = {"tupOne" : ("Gluten","Wheat","Peanuts"),
              "tupTwo" :("Milk","Cheese","Yogurt"),
              "tupthree" :("Suhgar","Bananas","Oranges")}


def dictionaryReader(dict):
    #iterates through the keys and data of the dictionary
    for key,data in dict.iteritems():
        #if data is of type str or int
        if(isinstance(data,str) or isinstance(data,int)):
            print "My {} is {}".format(key,data)
        #else if data is of type list or tuple
        elif(isinstance(data,list) or isinstance(data, tuple)):
            print key+": (",
            #for every item in the list or tuple
            for item in data:
                print item,
            print ")"

print dictionaryReader(Meeeeeeeee)
print dictionaryReader(booksByGenra)
print dictionaryReader(alergyDict)
#Dictionary with lists or tuples
'''
def dictionaryReaderTwo(dict):
    for key,value in dict.iteritems():
        for item in value:
            print key, ":", item
'''
