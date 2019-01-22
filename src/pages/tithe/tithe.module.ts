import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TithePage } from './tithe';

@NgModule({
  declarations: [
    TithePage,
  ],
  imports: [
    IonicPageModule.forChild(TithePage),
  ],
})
export class TithePageModule {}
