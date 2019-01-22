import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the DevotionaldetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devotionaldetails',
  templateUrl: 'devotionaldetails.html',
})
export class DevotionaldetailsPage {
 item = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.item = navParams.get('item')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevotionaldetailsPage');
  }

}
