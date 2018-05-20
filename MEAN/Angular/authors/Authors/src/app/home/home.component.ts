import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any
  constructor(private _authorsService:AuthorsService,private _route: ActivatedRoute, private _router:Router){ }

  ngOnInit() {
    this.show();
  }
  
  show(){
    var bob = this._authorsService.get()
    bob.subscribe(data =>{
      this.authors = data['data'];
    })
  }

  delete(id){
    console.log("In Delete",id)
    var observeable = this._authorsService.delete(id);
    observeable.subscribe(data =>{
      console.log("deleted");
    })
  }
}
