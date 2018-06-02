import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute, Params, Router } from '@angular/router'; //required for parameter routes


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any
  message:String
  name:String
  id
  constructor(private _authorsService:AuthorsService,private _route: ActivatedRoute, private _router:Router) { 
  }

  ngOnInit() {
    this.author = {name:""};//prepares author as a JSON object
    this.id = this._route.snapshot.paramMap.get("id");
    this.getAuthor(this.id);
  }
  getAuthor(id){
    var observeable = this._authorsService.find(id)
    observeable.subscribe(data => {
      console.log(data['data'][0]);
      this.author = data['data'][0];
      console.log(this.author.name);
    })
  }

  edit($event){
    console.log(this.name);
    var observeable = this._authorsService.edit(this.id,this.author);
    observeable.subscribe(data => {this.message =data['message']})
  }

}
