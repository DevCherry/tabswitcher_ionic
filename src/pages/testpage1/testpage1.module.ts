import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Testpage1Page } from './testpage1';

@NgModule({
  declarations: [
    Testpage1Page,
  ],
  imports: [
    IonicPageModule.forChild(Testpage1Page),
  ],
})
export class Testpage1PageModule {}
