import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
/**
 * Generated class for the DvdstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'dvdstore'
})
@Component({
  selector: 'page-dvdstore',
  templateUrl: 'dvdstore.html',
})
export class DvdstorePage {
 dvdstore = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

firebase.database().ref('dvdstore').on('value', snapshot => {
      this.dvdstore = snapshot.val().reverse();
    });

  }

   navigateTo(page)
  {
     this.navCtrl.push(page);
  }

series($event, item) {
    //this.navCtrl.push(DevotionaldetailsPage, {item: item});
     this.navCtrl.push('dvdstoredetail', {item: item});
  }
//dvdstoredetail(){
  //  this.navigateTo('dvdstoredetail');
//}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DvdstorePage');
  }

}
