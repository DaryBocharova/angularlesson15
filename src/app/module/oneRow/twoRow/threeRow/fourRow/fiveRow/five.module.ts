import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './five/one/one.component';
import { TwoComponent } from './five/two/two.component';
import { ThreeComponent } from './five/three/three.component';
import { FourComponent } from './five/four/four.component';
import { FiveComponent } from './five/five/five.component';



@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent, FourComponent, FiveComponent],
  imports: [
    CommonModule
  ]
})
export class FiveModule { }
