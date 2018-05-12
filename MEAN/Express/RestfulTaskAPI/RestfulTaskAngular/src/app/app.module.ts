import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpService} from './http.service';//registers the new service
import { HttpClientModule } from '@angular/common/http'; //reguire httpclientmodule, is this a included module?

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService], //set (app)service as a provider
  bootstrap: [AppComponent]
})
export class AppModule { }
