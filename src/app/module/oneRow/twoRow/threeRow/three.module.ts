import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { FourModule} from './fourRow/four.module';

@NgModule({
  declarations: [OneComponent, TwoComponent],
  imports: [
    CommonModule,
    FourModule
  ]
})
export class ThreeModule { }
