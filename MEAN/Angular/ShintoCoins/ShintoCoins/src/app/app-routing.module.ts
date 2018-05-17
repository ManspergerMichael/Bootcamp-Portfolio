import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { PageNotFoundComponet } from './pagenotfound/pagenotfound.component'; //create a component for no page found
import { MineComponent } from './mine/mine.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';
import { BrowseComponent } from './browse/browse.component';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'mine', component: MineComponent},
  { path: 'buy', component: BuyComponent},
  { path: 'sell', component: SellComponent},
  { path: 'browse', component: BrowseComponent},
  { path: 'transaction/:id', component: TransactionComponent},
  { path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
