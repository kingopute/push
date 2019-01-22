import {Component} from '@angular/core';
import {NavController, Events, NavParams} from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SermonsPage } from '../sermons/sermons';
import { EventsPage } from '../events/events';
import { MorePage } from '../more/more';
import { WeeklydeclarationPage } from '../weeklydeclaration/weeklydeclaration';
//import {DbService} from '../../providers/db-service';
import firebase from 'firebase';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import{Platform}  from 'ionic-angular';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.html'
})

export class WelcomePage {
  private source: any;
 latestvideo = [];
  constructor(public navCtrl: NavController,private theInAppBrowser: InAppBrowser, private platform: Platform, public events: Events, public nav: NavController, public navParams: NavParams) {
this.platform = platform;
firebase.database().ref('latestvideo').on('value', snapshot => {
      this.latestvideo = snapshot.val().reverse();
    });

   
  }

   launch(url){
  this.platform.ready().then(() =>{
    this.theInAppBrowser.create(url,"_self", "location=no");
});
}

 sermons() {
    this.navCtrl.push(SermonsPage);
  }

  event() {
    this.navCtrl.push(EventsPage);
  }

   pastorblog() {
    this.navCtrl.push(WeeklydeclarationPage);
  }

   more() {
    this.navCtrl.push(MorePage);
  }




  
 
}
