import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-episode',
  templateUrl: 'episode.html',
})
export class EpisodePage {

  item = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.item = navParams.get('item')
  
  }

}
