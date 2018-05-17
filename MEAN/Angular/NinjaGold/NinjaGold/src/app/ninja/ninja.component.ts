import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-ninja',
  templateUrl: './ninja.component.html',
  styleUrls: ['./ninja.component.css']
})
export class NinjaComponent implements OnInit {
  totalGold;
  messages;
  scores;
  user;
  result;
  constructor(private _ninjaService:NinjaService, private _route:ActivatedRoute) { 
    this.totalGold = 0;
    this.messages = [];
    this.scores = [];
    this.user = "";
    
  }

  ngOnInit() {
    this.user = this._route.snapshot.paramMap.get('id');

    
  }
  
  addScore(){//calls method in ninja.service
    this.result = "";
    this._ninjaService
      .addScore({user: this.user ,score: this.totalGold})
        .subscribe(data=>{
          console.log(data);
          if(data['status'] == "Not goodly"){
          this.result = data['errors'];
        }
      });
  }

  process(type, min, max){
    console.log(type,min,max);
    var num = Math.floor(Math.random()*max)+min;
    this.totalGold += num;
    this.messages.push(`You went to the ${type} and earned ${num} golds!!!`)
    /*
    random number between min and max
    update totalGold
    prepare a message
    update self?
    */
  }
}
//total gold
//messages