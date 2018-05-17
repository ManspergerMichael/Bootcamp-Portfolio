import { Component, OnInit } from '@angular/core';
import { ShintoService } from '../shinto.service';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  id
  ledger
  transaction
  constructor(private _ShintoService:ShintoService, private _route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this._route.snapshot.paramMap.get('id');
    this.ledger = this._ShintoService.shareLedger();
    console.log(this.id);
  }

}
