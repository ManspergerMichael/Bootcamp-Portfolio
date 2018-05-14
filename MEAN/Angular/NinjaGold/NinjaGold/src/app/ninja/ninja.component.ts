import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';

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
  constructor(private _ninjaService:NinjaService) { 
    this.totalGold = 0;
    this.messages = [];
    this.scores = [];
    this.user = "";
    
  }

  ngOnInit() {
    var bob = this._ninjaService.getScores();
    bob.subscribe(data =>{
      this.scores = data;
    })
  }
  
  addScore(){
    this._ninjaService.addScore({user: this.user ,score: this.totalGold}).subscribe(data=>console.log(data));
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