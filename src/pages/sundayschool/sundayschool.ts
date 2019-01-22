import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { SundayschooldetailsPage } from './../sundayschooldetails/sundayschooldetails';
/**
 * Generated class for the SundayschoolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sundayschool',
  templateUrl: 'sundayschool.html',
})
export class SundayschoolPage {
  sundayschool = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {

 firebase.database().ref('sundayschool').on('value', snapshot => {
      this.sundayschool = snapshot.val().reverse();
    });

  }

  series($event, item) {
    this.navCtrl.push(SundayschooldetailsPage, {item: item});
     //this.navCtrl.push('abajidetails', {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SundayschoolPage');
  }

}
