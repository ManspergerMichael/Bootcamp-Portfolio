import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  value = 1.00
  coinsOwned
  constructor(private _ShintoService: ShintoService) { 
   
  }

  ngOnInit() {
    this.coinsOwned = this.getcoins();
  }
  getcoins(){
    return this._ShintoService.shareCoins();
  }

  buy(){
    this._ShintoService.buyCoin();
    this.coinsOwned = this.getcoins();
    console.log(this._ShintoService.coinsOwned);
  }

}
