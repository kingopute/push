import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SundayschooldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sundayschooldetails',
  templateUrl: 'sundayschooldetails.html',
})
export class SundayschooldetailsPage {
  item = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SundayschooldetailsPage');
  }

}
