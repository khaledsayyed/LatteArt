import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { HttpModule,JsonpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { DragulaModule, DragulaService } from 'ng2-dragula/ng2-dragula'
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';


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
   HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
