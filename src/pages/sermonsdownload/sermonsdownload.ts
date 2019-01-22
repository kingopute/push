import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';
import { SermondownloadurlPage } from './../sermondownloadurl/sermondownloadurl';
/**
 * Generated class for the SermonsdownloadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sermonsdownload',
  templateUrl: 'sermonsdownload.html',
})
export class SermonsdownloadPage {
  sermonsdownload = [];

  constructor(private theInAppBrowser: InAppBrowser, private platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
  this.platform = platform;
 firebase.database().ref('sermonsdownload').on('value', snapshot => {
      this.sermonsdownload = snapshot.val().reverse();
    });

  }

launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SermonsdownloadPage');
  }
series($event, item) {
    this.navCtrl.push(SermondownloadurlPage, {item: item});
  }


}
