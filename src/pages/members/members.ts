import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';


import { MembersdetailsPage } from './../membersdetails/membersdetails';
/**
 * Generated class for the MembersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-members',
  templateUrl: 'members.html',
})
export class MembersPage {
   members = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     firebase.database().ref('members').on('value', snapshot => {
      this.members = snapshot.val().reverse();
    });
  }

 membersdetails($event, item) {
    this.navCtrl.push(MembersdetailsPage, {item: item});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MembersPage');
  }

}
