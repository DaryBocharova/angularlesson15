import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { ThreeModule } from './threeRow/three.module';


@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule
  ]
})
export class TwoModule { }
