import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    //this.getTasks();
    
  }

  getTasks(){
    return this._http.get('/getAll');
    //let tempObservable = this._http.get('/getAll'); //response is an Observeable type
    //tempObservable.subscribe(data => console.log("Got our tasks!", data));//like a callback, .suscribe waits for the response then exicutes
  }

  find(id){
    console.log("in service");
    return this._http.get('/find/'+id)
    //let tempObserveable = this._http.get('/find/5af4d17b57b9053a5d9396dd');
    //tempObserveable.subscribe(data => console.log("Got our JSON object!", data));
  }
  
  create(data){
    console.log("in create");
    return this._http.post('/create', data);
    //let tempObserveable = this._http.get('/create');
    //tempObserveable.subscribe(data => console.log("Created an object!", data));
  }

  delete(id){
    console.log(id)
    return this._http.get('/delete/'+id);
    //tempObserveable.subscribe(data => console.log("Deleted an object!", data));
  }

  edit(data){
    return this._http.post('/update/'+data._id, data);
  }
}
