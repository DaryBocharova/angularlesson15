import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FiveModule} from './fiveRow/five.module';


@NgModule({
  declarations: [OneComponent, TwoComponent, ThreeComponent],
  imports: [
    CommonModule,
    FiveModule
  ]
})
export class FourModule { }
