import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the OfferingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'offering'
})
@Component({
  selector: 'page-offering',
  templateUrl: 'offering.html',
})
export class OfferingPage {
   //music: string = "offering";
    music: string = "videos";
   offering = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    firebase.database().ref('offering').on('value', snapshot => {
      this.offering = snapshot.val().reverse();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferingPage');
  }

}
