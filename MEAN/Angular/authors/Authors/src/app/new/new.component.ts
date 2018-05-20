import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';//import in every componet
import { ActivatedRoute, Params, Router } from '@angular/router'; //for all routing and rout parameters

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author:any
  messages:any;
  errorFlag: boolean = false;
  constructor(private _auth:AuthorsService, private _route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.author = {name:''}
  }

  create(event){
    this.messages = [];
    this.errorFlag = false;
    if(this.author.name < 3){
      this.errorFlag = true;
      this.messages.push({'message':"Name should be longer than 3 characters"});
      console.log(this.messages);
    }
    else{
      this.errorFlag = false;
      this.messages = [];
      let observeable = this._auth.create(this.author);
      observeable.subscribe(data => {
        //console.log(data);
        if(data['message'] =="Error"){
          this.errorFlag = true;
          this.messages.push(data['error']);
          //console.log(this.messages);
        }
        else if(data['message'] == 'Success'){
          this.router.navigate(['home']);
        }
      });
    }
  }

}
