import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private _http:HttpClient) { }

  get(){
    return this._http.get('/getAll');
  }

  find(id){
    return this._http.get('/find/'+id);
  }

  edit(data){
    return this._http.post('/update', data);
  }
  
}
