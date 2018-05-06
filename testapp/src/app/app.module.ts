import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import * as $ from 'jquery';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import 'bootstrap-timepicker/js/bootstrap-timepicker.js';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime.js';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
	 DragulaModule,
   FormsModule,
   HttpClientModule,
   NKDatetimeModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
