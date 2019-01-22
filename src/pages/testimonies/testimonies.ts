import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestimoniesdetailsPage } from './../testimoniesdetails/testimoniesdetails';
import firebase from 'firebase';
/**
 * Generated class for the TestimoniesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimonies',
  templateUrl: 'testimonies.html',
})
export class TestimoniesPage {
testimonies = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  firebase.database().ref('testimonies').on('value', snapshot => {
      this.testimonies = snapshot.val().reverse();
    });

  }

   testimoniesdetails($event, item) {
    this.navCtrl.push(TestimoniesdetailsPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestimoniesPage');
  }

}
