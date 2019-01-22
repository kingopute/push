import { SocialPage } from './../social/social';
import { MusicPage } from './../music/music';
//import { TithingPage } from './../tithing/tithing';
import { ConnectPage } from './../connect/connect';
import { MinistriesPage } from './../ministries/ministries';
import { LeadersPage } from './../leaders/leaders';
import { BranchesPage } from './../branches/branches';
import { AboutUsPage } from './../about-us/about-us';

//import { FirsttimerpasscodePage } from './../firsttimerpasscode/firsttimerpasscode';
//import { MemberspasscodePage } from './../memberspasscode/memberspasscode';
import { DevotionalPage } from './../devotional/devotional';
import { LivestreamPage } from './../livestream/livestream';
import { WeeklydeclarationPage } from './../weeklydeclaration/weeklydeclaration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  more = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    firebase.database().ref('more').on('value', snapshot => {
      this.more = snapshot.val();
    });

  }

  about($event, subitem) {
    this.navCtrl.push(AboutUsPage, {subitem: subitem});
  }

  branches($event, subitem) {
    this.navCtrl.push(BranchesPage, {subitem: subitem});
  }

  leaders($event, subitem) {
    this.navCtrl.push(LeadersPage, {subitem: subitem});
  }

  ministries($event, subitem) {
    this.navCtrl.push(MinistriesPage, {subitem: subitem});
  }

  connect($event, subitem) {
    this.navCtrl.push(ConnectPage, {subitem: subitem});
  }

  weeklydeclaration($event, subitem) {
    this.navCtrl.push(WeeklydeclarationPage, {subitem: subitem});
  }

  music($event, subitem) {
    this.navCtrl.push(MusicPage, {subitem: subitem});
  }

   stream($event, subitem) {
    this.navCtrl.push(LivestreamPage, {subitem: subitem});
  }

  social($event, subitem) {
    this.navCtrl.push(SocialPage, {subitem: subitem});
  }

  //firsttimerpasscode() {
    //this.navCtrl.push(FirsttimerpasscodePage);
 // }

  //memberspasscode() {
    //this.navCtrl.push(MemberspasscodePage);
  //}

   devotional() {
    this.navCtrl.push(DevotionalPage);
  }

   //sundayschool() {
    //this.navCtrl.push(SundayschoolPage);
  //}


}
