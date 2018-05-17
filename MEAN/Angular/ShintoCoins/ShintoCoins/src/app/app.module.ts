import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { TransactionComponent } from './transaction/transaction.component';

import { ShintoService } from './shinto.service';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    MineComponent,
    BuyComponent,
    SellComponent,
    BrowseComponent,
    TransactionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ShintoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
