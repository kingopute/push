import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store',
  templateUrl: 'store.html',
})
export class StorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

   navigateTo(page)
  {
     this.navCtrl.push(page);
  }


dvdstore(){
    this.navigateTo('dvdstore');
}

ebooksstore(){
    this.navigateTo('ebooksstore');
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StorePage');
  }

}
