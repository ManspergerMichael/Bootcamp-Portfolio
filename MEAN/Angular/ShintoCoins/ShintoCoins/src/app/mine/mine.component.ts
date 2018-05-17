import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  
  constructor(private _ShintoService: ShintoService) {}
  answer:any;
  coinsOwned
  ngOnInit() {
    this.coinsOwned = this.getcoins();
  }
  getcoins(){
    return this._ShintoService.shareCoins();
  }

  mine(){
    
    if(this.answer == "I don't know"){
      this._ShintoService.addToCoins();
      this.coinsOwned = this.getcoins();
      console.log("correct", this._ShintoService.coinsOwned);
    }
    else {
      console.log("Wrong");
    }
  }
}
