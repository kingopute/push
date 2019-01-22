import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

import { ChildrendepartmentdetailsPage } from './../childrendepartmentdetails/childrendepartmentdetails';
/**
 * Generated class for the ChildrendepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-childrendepartment',
  templateUrl: 'childrendepartment.html',
})
export class ChildrendepartmentPage {
  childrendepartment = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     firebase.database().ref('childrendepartment').on('value', snapshot => {
      this.childrendepartment = snapshot.val().reverse();
    });
  }

   series($event, item) {
    this.navCtrl.push(ChildrendepartmentdetailsPage, {item: item});
     //this.navCtrl.push('abajidetails', {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChildrendepartmentPage');
  }

}
