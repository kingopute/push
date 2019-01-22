import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the TestimoniesdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testimoniesdetails',
  templateUrl: 'testimoniesdetails.html',
})
export class TestimoniesdetailsPage {
   public item;

  constructor(public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
     this.item = navParams.get('item')
  }

   share() {
    this.socialSharing.share(
      this.item.shareMessage, 
      this.item.shareSubject, 
      this.item.shareImage, 
      this.item.shareLink 
    ).
      then(() => {
      console.log('Shared!');
    }).catch((err) => {
      console.log('Oops, something went wrong:', err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestimoniesdetailsPage');
  }

}
