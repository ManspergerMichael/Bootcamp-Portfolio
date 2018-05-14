import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //title = 'app';
  tasks = [];
  title = "Tasks"
  getTasksFromService(){
    let observeable = this._httpService.getTasks();
    observeable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
    });
  }
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.getTasksFromService();
  }
  
}
