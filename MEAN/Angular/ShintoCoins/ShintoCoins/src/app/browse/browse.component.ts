import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledger
  constructor(private _ShintoService: ShintoService) { }

  ngOnInit() {
    this.ledger = this._ShintoService.shareLedger();
  }

}
