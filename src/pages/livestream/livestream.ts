import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';
/**
 * Generated class for the LivestreamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livestream',
  templateUrl: 'livestream.html',
})
export class LivestreamPage {
livestream = [];

  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
      this.platform = platform;
     firebase.database().ref('livestream').on('value', snapshot => {
      this.livestream = snapshot.val().reverse();
    });
  }

  launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivestreamPage');
  }

}
