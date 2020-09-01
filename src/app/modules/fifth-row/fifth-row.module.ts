import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveOneComponent } from './five-one/five-one.component';
import { FiveTwoComponent } from './five-two/five-two.component';
import { FiveThreeComponent } from './five-three/five-three.component';
import { FiveFourComponent } from './five-four/five-four.component';
import { FiveFiveComponent } from './five-five/five-five.component';
import { FourthRowModule } from '../fourth-row/fourth-row.module';



@NgModule({
  declarations: [FiveOneComponent, FiveTwoComponent, FiveThreeComponent, FiveFourComponent, FiveFiveComponent],
  exports:[FiveOneComponent, FiveTwoComponent, FiveThreeComponent, FiveFourComponent, FiveFiveComponent],
  imports: [
    CommonModule,
    FourthRowModule
  ]
})
export class FifthRowModule { }
