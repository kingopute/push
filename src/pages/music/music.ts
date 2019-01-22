import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';


@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})
export class MusicPage {

  music: string = "videos";

  subitem = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia) {
  
    this.subitem = navParams.get('subitem')
  
  }

liveStream()
{
let options: StreamingVideoOptions = {
successCallback: () => { console.log() },
errorCallback: (e) => { console.log('Error: ', e) },
orientation: 'portrait'
};

// http://www.sample-videos.com/ 25
this.streamingMedia.playVideo('https://www.facebook.com/dayspringcmi/videos/513546495798133/', options);
}



}
