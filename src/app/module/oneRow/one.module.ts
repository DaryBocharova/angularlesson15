import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoModule} from './twoRow/two.module';



@NgModule({
  declarations: [OneComponent],
  imports: [
    CommonModule,
    TwoModule
  ]
})
export class OneModule { }
