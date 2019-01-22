import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DvdstorePage } from './dvdstore';

@NgModule({
  declarations: [
    DvdstorePage,
  ],
  imports: [
    IonicPageModule.forChild(DvdstorePage),
  ],
})
export class DvdstorePageModule {}
