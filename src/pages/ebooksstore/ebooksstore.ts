import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';

/**
 * Generated class for the EbooksstorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name :'ebooksstore'
})
@Component({
  selector: 'page-ebooksstore',
  templateUrl: 'ebooksstore.html',
})
export class EbooksstorePage {
ebooksstore = [];
  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
this.platform = platform;
 firebase.database().ref('ebooksstore').on('value', snapshot => {
      this.ebooksstore = snapshot.val().reverse();
    });

  }

  launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad EbooksstorePage');
  }

}
