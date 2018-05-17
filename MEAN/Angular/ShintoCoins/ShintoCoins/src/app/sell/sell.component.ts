import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  value = 1.00
  coinsOwned
  error
  constructor(private _ShintoService: ShintoService) { }

  ngOnInit() {
    this.coinsOwned = this._ShintoService.shareCoins();
  }
  sell(){
    if(this.coinsOwned == 0){
      this.error = "You have no coins to sell";
    }
    else{
      this._ShintoService.sellCoin();
      this.coinsOwned = this._ShintoService.shareCoins();
      this.error = null;
    }
  }
}
