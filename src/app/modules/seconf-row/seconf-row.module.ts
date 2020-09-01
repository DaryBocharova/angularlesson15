import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoOneComponent } from './two-one/two-one.component';
import { FirstRowModule } from '../first-row/first-row.module';





@NgModule({
  declarations: [TwoOneComponent],
  exports:[TwoOneComponent],
  imports: [
    CommonModule,
    FirstRowModule
  ]
})
export class SeconfRowModule { }
