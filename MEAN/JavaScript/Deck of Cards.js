class Deck{
    constructor(){
        this._deck = [];
        const suits = ['spades','hearts','clubs','diamonds']
        for(let i = 0; i < suits.length;i++){
            for(let j = 1; j < 14; j++){
                if( j == 1){
                    this._deck.push(new Card(suits[i], j, "Ace"));
                }
                else if( j == 11){
                    this._deck.push(new Card(suits[i], j, "Jack"));
                }
                else if( j == 12){
                    this._deck.push(new Card(suits[i], j, "Queen"));
                }
                else if( j == 13){
                    this._deck.push(new Card(suits[i], j, "King"));
                }
                else{
                    this._deck.push(new Card(suits[i], j,"noFace"));
                }
                //console.log("New Card")
            }
        }
    }
    showDeck(){
        for(let i = 0; i < this._deck.length; i++){
            console.log(this._deck[i].showCard());
        }
    }
    shuffleDeck(){
        this._deck.sort(function(a, b){return 0.5 - Math.random()});//found online
        return this;
        /*Demo
        //from back moving to front
        //if you can do this 7 times it is truly random
        for(let i = this._deck.length; i > 0; i--){
            //randomly select a card that hasent been selected
            let rdx = Math.floor(Math.random()*52);
            //swap it into randomly assembled deck section
            let temp = this._deck[rdx];
            this._deck[rdx]=this._deck[i];
            this._deck[i] = temp;
        }
        */
    }
    resetDeck(){
        this._deck = [];
        const suits = ['spades','hearts','clubs','diamonds']
        for(let i = 0; i < suits.length;i++){
            for(let j = 1; j < 14; j++){
                this._deck.push(new Card(suits[i], j))
                //console.log("New Card")
            }
        }
    }

    deal(){
        var card = this._deck[Math.floor(Math.random()*this._deck.length)]
        this._deck.splice(this._deck.indexOf(card),1);//indexOf returns the index of the entered value
        return card;

        /*
        .shift() = .pop() except on the front of the deck
        return this._deck.shift() 
        */
    }
}
class Card{
    constructor(suit, num, face){
        this._suit = suit;
        this._num = num;
        this._face = face;
    }
    getSuit(){
        return this._suit;
    }
    getNum(){
        return this._num;
    }
    showCard(){
        return `This is the ${this._num} of ${this._suit} Face: ${this._face}`
    }
}

class Player{
    constructor(name){
        this._name = name;
        this._hand = []
        for(let i = 1; i <= 2; i++){
            this._hand.push()
        }
    }
    takeCard(deck){
        if(deck instanceof Deck){
            let newCard = deck.deal();
            this._hand.push(newCard);
            return this;
        }
        else{
            console.log("Passed object is not of type Deck!");
            return false;
        }
        //copuling
    }
    discard(idx){
        idx = idx % this._hand.length;
        return this._hand.splice(this._hand[idx],1)
    }
}
var billy = new Player("Billy")
deck1 = new Deck();
billy.takeCard(deck1);
var aCard = billy.discard();
console.log(aCard[0].showCard());

/*
alternitives
for(let suit of suits) for(let suit in suits)
create dictionary of card face and value
let cardInfo = {
    "ace":1,
    "Two":2,
    ...
*/


//console.log("CREATED NEW DECK");
//card = deck1.deal();
//deck1.showDeck();
/*
console.log("This is the "+card.getNum()+" of "+card.getSuit());
console.log("Dealt card");
deck1.showDeck();
*/


/*
deck1.showDeck();
deck1.resetDeck();
console.log("RESET DECK");
deck1.showDeck();
*/
