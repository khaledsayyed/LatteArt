import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable, ViewChild  } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { App3Component } from './app3.component';
import {HttpClientModule} from '@angular/common/http';
import { DataTableModule } from 'angular5-data-table';

@NgModule({
  declarations: [
    App3Component
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
   FormsModule,
   HttpClientModule,
   DataTableModule
  ],
  providers: [HttpClientModule],
  bootstrap: [App3Component]
})
export class App3Module { }
