import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstRowModule } from './modules/first-row/first-row.module';
import { SeconfRowModule } from './modules/seconf-row/seconf-row.module';
import { ThirdRowModule } from './modules/third-row/third-row.module';
import { FourthRowModule } from './modules/fourth-row/fourth-row.module';
import { FifthRowModule } from './modules/fifth-row/fifth-row.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstRowModule,
    SeconfRowModule,
    ThirdRowModule,
    FourthRowModule,
    FifthRowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
