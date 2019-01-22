import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


import { FirsttimerdetailsPage } from './../firsttimerdetails/firsttimerdetails';
/**
 * Generated class for the FirsttimerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firsttimer',
  templateUrl: 'firsttimer.html',
})
export class FirsttimerPage {
  firsttimer = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('firsttimer').on('value', snapshot => {
      this.firsttimer = snapshot.val().reverse();
    });
  }
    firsttimerdetails($event, item) {
    this.navCtrl.push(FirsttimerdetailsPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirsttimerPage');
  }

}
