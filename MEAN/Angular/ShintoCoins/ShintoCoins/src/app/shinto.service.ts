import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShintoService {
  coinsOwned = 0;
  value = 1;
  ledger = [];
  constructor() { }

  shareCoins(){
    return this.coinsOwned;
  }
  shareLedger(){
    return this.ledger;
  }

  addToCoins(){
    this.coinsOwned = this.coinsOwned + 1;
    this.ledger.push({ id: Math.floor(Math.random()*9999)+1 ,Action: 'Mined', Ammount: 1, Value: this.value })
  }
  
  buyCoin(){
    this.coinsOwned = this.coinsOwned +1;
    this.ledger.push({ id: Math.floor(Math.random()*9999)+1 ,Action: 'Bought', Ammount: 1, Value: this.value })
  }

  sellCoin(){
    this.coinsOwned = this.coinsOwned -1;
    this.ledger.push({ id: Math.floor(Math.random()*9999)+1 ,Action: 'Sold', Ammount: 1, Value: this.value })
  }
}
