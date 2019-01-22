import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController} from 'ionic-angular';
import { MembersPage} from '../members/members';
/**
 * Generated class for the MemberspasscodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memberspasscode',
  templateUrl: 'memberspasscode.html',
})
export class MemberspasscodePage {
  private new_pin: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  enterPIN(){
  
    if (this.new_pin == "1111"){
       //alert('PIN  valid','Please provide a valid one.'); // just for browser
       //window.localStorage.setItem('new_pin', value.new_pin);
        this.navCtrl.push(MembersPage);
       // <button (click)="navigateTo('atn2016')">Nov. 2016</button>
    }

    else if (this.new_pin == "2222"){
       //alert('PIN  valid','Please provide a valid one.'); // just for browser
        this.navCtrl.push(MembersPage);
    }
    
     else { //on real device
      alert('PIN not valid');
    }

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MemberspasscodePage');
  }

}
