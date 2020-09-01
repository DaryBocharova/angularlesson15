import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreeOneComponent } from './three-one/three-one.component';
import { ThreeTwoComponent } from './three-two/three-two.component';
import { SeconfRowModule } from '../seconf-row/seconf-row.module';



@NgModule({
  declarations: [ThreeOneComponent, ThreeTwoComponent],
  exports:[ThreeOneComponent, ThreeTwoComponent],
  imports: [
    CommonModule,
    SeconfRowModule
  ]
})
export class ThirdRowModule { }
