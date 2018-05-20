import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';//import in every componet

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author:any
  messages:any;
  errorFlag: boolean = false;
  constructor(private _auth:AuthorsService) { }

  ngOnInit() {
    this.author = {name:''}
  }

  create(event){
    this.messages = [];
    if(this.author.name < 3){
      this.errorFlag = true;
      this.messages.push({'message':"Name should be longer than 3 characters"});
      console.log(this.messages);
    }
    else{
      this.errorFlag = false;
      let observeable = this._auth.create(this.author);
      observeable.subscribe(data => {this.messages.push(data['message']);
      console.log(this.messages);
    });
    }
  }

}
