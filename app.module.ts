import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { postComponent} from './post.component';
import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    postComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
