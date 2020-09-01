import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneOneComponent } from './one-one/one-one.component';



@NgModule({
  declarations: [OneOneComponent],
  exports: [OneOneComponent],
  imports: [
    CommonModule
  ]
})
export class FirstRowModule { }
