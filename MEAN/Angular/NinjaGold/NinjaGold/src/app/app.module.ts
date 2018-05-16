import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NinjaComponent } from './ninja/ninja.component';

import { NinjaService } from './ninja.service'
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './user/user.component';
import { ScoresComponent } from './scores/scores.component'

@NgModule({
  declarations: [
    AppComponent,
    NinjaComponent,
    UserComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [NinjaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
