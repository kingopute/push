import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { DevotionalPage } from './../devotional/devotional';
/**
 * Generated class for the DevotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-devotion',
  templateUrl: 'devotion.html',
})
export class DevotionPage {
devotional = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

firebase.database().ref('devotional').on('value', snapshot => {
      this.devotional = snapshot.val();
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevotionPage');
  }

  series($event, item) {
    this.navCtrl.push(DevotionalPage, {item: item});
     //this.navCtrl.push('abajidetails', {item: item});
  }

}
