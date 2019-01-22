import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirsttimerdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firsttimerdetails',
  templateUrl: 'firsttimerdetails.html',
})
export class FirsttimerdetailsPage {
  item = [];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirsttimerdetailsPage');
  }

}
