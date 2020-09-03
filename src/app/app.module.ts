import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OneModule } from './module/oneRow/one.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
