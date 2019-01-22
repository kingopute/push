import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DvdstoredetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'dvdstoredetail'
})
@Component({
  selector: 'page-dvdstoredetail',
  templateUrl: 'dvdstoredetail.html',
})
export class DvdstoredetailPage {
 item = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DvdstoredetailPage');
  }

}
