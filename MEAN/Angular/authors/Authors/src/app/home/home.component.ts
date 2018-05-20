import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors:any
  constructor(private _authorsService:AuthorsService) { }

  ngOnInit() {
    this.show()
  }
  
  show(){
    var bob = this._authorsService.get()
    bob.subscribe(data =>{
      this.authors = data['data'];
    })
  }
}
