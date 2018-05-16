import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user
  constructor(private _router: Router) {
    this.user = "";
    
   }

  ngOnInit() {
  }

  ninjaPage(){
    let info = this.user;
    let url = ['/ninja', info];
    this._router.navigate(url);
  }
}
