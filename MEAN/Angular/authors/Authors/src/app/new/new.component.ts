import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';//import in every componet

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author:any
  messages:any
  constructor(private _auth:AuthorsService) { }

  ngOnInit() {
    this.author = {name:''}
  }

  create(event){
    let observeable = this._auth.create(this.author);
    observeable.subscribe(data => this.messages = data['message']);
  }

}
