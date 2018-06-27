import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumerPage } from './numer';

@NgModule({
  declarations: [
    NumerPage,
  ],
  imports: [
    IonicPageModule.forChild(NumerPage),
  ],
})
export class NumerPageModule {}
