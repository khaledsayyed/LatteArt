import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { App2Component } from './app2.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    App2Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
   FormsModule,
   HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [App2Component]
})
export class App2Module { }
