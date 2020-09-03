import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OneComponent } from './module/oneRow/one/one.component';
import { OneModule } from './module/oneRow/one.module';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent
  ],
  imports: [
    BrowserModule,
    OneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
