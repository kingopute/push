import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WeeklydeclarationdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weeklydeclarationdetails',
  templateUrl: 'weeklydeclarationdetails.html',
})
export class WeeklydeclarationdetailsPage {

subitems = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      //this.subitems = navParams.get('subitem')
         this.subitems = navParams.get('subitems')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklydeclarationdetailsPage');
  }

}
