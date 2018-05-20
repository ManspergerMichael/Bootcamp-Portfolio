import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  authors:any
  constructor(private _authorsService:AuthorsService){ }

  ngOnInit() {
    this.show();
  }
  
  show(){
    var observeable = this._authorsService.get()
    observeable.subscribe(data =>{
      this.authors = data['data'];
    })
  }

  delete(id){
    console.log("In Delete",id)
    var observeable = this._authorsService.delete(id);
    observeable.subscribe(data =>{
      console.log("deleted");
      this.show();
    })
  }
}
