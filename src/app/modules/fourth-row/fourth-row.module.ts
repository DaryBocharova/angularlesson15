import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FourTwoComponent } from './four-two/four-two.component';
import { FourOneComponent } from './four-one/four-one.component';
import { FourThreeComponent } from './four-three/four-three.component';
import { ThirdRowModule } from '../third-row/third-row.module';



@NgModule({
  declarations: [FourTwoComponent, FourOneComponent, FourThreeComponent],
  exports:[FourTwoComponent, FourOneComponent, FourThreeComponent],
  imports: [
    CommonModule,
    ThirdRowModule
  ]
})
export class FourthRowModule { }
