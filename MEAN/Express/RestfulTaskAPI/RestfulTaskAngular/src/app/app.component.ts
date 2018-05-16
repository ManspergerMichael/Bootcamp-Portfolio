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
  taskDetail
  editTask
  _id
  title
  description
  completed
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
    //console.log(id);
    let observeable = this._httpService.find(id);
    observeable.subscribe(data =>{
      this.taskDetail = data['data'];
    })
  }

  create(event){
    console.log(this.title, this.description);
    this._httpService.create({title: this.title, description : this.description})
      .subscribe(data => {
        console.log("Added Task!");
        this.showTasks(event);
      });
  }

  delete(event, id){
    console.log(id);
    let observeable = this._httpService.delete(id)
      .subscribe(data => {
        console.log("Deleted Task!");
        this.taskDetail = [];
        this.showTasks(event);
      })
  }
  edit(event, id){
    let observeable = this._httpService.find(id);
    observeable.subscribe(data =>{
      console.log(data['data']);
      this.editTask = data['data'][0];
    })
  }
  editTaskProcess(event){
    console.log(this.editTask._id,this.editTask.title, this.editTask.description);
    this._httpService.edit({_id:this.editTask._id,title:this.editTask.title, description:this.editTask.description, completed:false})
      .subscribe(data =>{
        console.log("Edited Task!");
        this.showTasks(event);
      });
  }
}
