import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  //title = 'app';
  tasks = [];
  taskDetail = [];
  title = "Tasks";
  constructor(private _httpService: HttpService){}

  //ngOnInit(){
  //  this.getTasksFromService();
  //}

  do(event){
    console.log("DOING THINGS!!!");
  }
  //components envoke services
  showTasks(event){
    let observeable = this._httpService.getTasks();
    observeable.subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data['data'];
    });
  }

  displayTask(event, id){
    console.log(id);
    let observeable = this._httpService.find(id);
    observeable.subscribe(data =>{
      this.taskDetail = data['data'];
    })
  }
  
}
