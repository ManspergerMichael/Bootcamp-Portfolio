import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:any
  id
  constructor(private _authorsService:AuthorsService,private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.id = params['id'];
      console.log(this.id);
    });
    this.getAuthor(this.id);
  }
  getAuthor(id){
    var observeable = this._authorsService.find(id)
    observeable.subscribe(data => {
      console.log(data['data']);
      this.author = data['data'][0];
      console.log(this.author);
    })
  }

  edit(event){
    var observeable = this._authorsService.edit({_id:this.id, name:this.author.name});
    observeable.subscribe(data => console.log(data['message']))
  }

}
