import { Component, OnInit } from '@angular/core';
import { NinjaService } from '../ninja.service';
@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  scores
  constructor(private _ninjaService: NinjaService) { 
    this.scores;
  }

  ngOnInit() {
    var bob = this._ninjaService.getScores();
    bob.subscribe(data =>{
      this.scores = data;
    })
  }

}
