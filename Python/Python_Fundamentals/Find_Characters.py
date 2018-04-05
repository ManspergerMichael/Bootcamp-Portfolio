def findChar(words, char):
    newList = []
    count = 0
    while count < len(words):
        if(words[count].find(char) > -1):
            newList.append(words[count])
        count +=1
    print newList


word_list = ['hello','world','my','name','is','Anna']
char = 'o'
findChar(word_list, char)



