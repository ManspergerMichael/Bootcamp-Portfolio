import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NinjaService {

  constructor(private _http:HttpClient) { 
    
    console.log("hi service");
  }

  getScores(){
    return this._http.get('/topTen');    
  }

  addScore(data){ //calls server
    console.log(data);
    console.log('you tired to add score');
    return this._http.post('/scores', data);
  }
}
