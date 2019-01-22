import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { SermonsPage } from '../pages/sermons/sermons';
import { UserPage } from '../pages/user/user';
import { HomePage } from '../pages/home/home';

import { EventsPage } from './../pages/events/events';
import { SermonsdownloadPage } from './../pages/sermonsdownload/sermonsdownload';
import { TestimoniesPage } from './../pages/testimonies/testimonies';
import { MorePage } from './../pages/more/more';

import{PipesModule} from './../pipes/pipes.module';
import { VideosPipe } from './../pipes/videos/videos';

//import { ChathomePage } from '../pages/chathome/chathome';
//import { ChatroomPage } from '../pages/chatroom/chatroom';
import { FirsttimerpasscodePage } from './../pages/firsttimerpasscode/firsttimerpasscode';
import { DevotionPage } from './../pages/devotion/devotion';
import { SundayschoolPage } from './../pages/sundayschool/sundayschool';
import { OnlinegivingPage } from './../pages/onlinegiving/onlinegiving';

import { ChildrendepartmentPage } from './../pages/childrendepartment/childrendepartment';
import { ChildrendepartmentdetailsPage } from './../pages/childrendepartmentdetails/childrendepartmentdetails';

import { PrayerrequestPage } from './../pages/prayerrequest/prayerrequest';
import { WelcomePage } from './../pages/welcome/welcome';

import { StorePage } from './../pages/store/store';


import { OneSignal } from '@ionic-native/onesignal';


import firebase from 'firebase/app';
import 'firebase/auth';

//import firebase from 'firebase';
//import { Component, ViewChild } from '@angular/core';
//import { Platform,  } from 'ionic-angular';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any = WelcomePage;


  pages: PageInterface[] = [

  { title: 'Welcome', name: 'WelcomePage',  component: WelcomePage,  icon: 'home' },
  { title: 'Sermons', name: 'SermonsPage',  component: SermonsPage,  icon: 'mic' },
  { title: 'Events', name: 'EventsPage', component: EventsPage,  icon: 'calendar' },
  {title: 'Online Store', name: 'StorePage', component: StorePage, icon: 'cart'},
  { title: 'Testimonies', name: 'TestimoniesPage', component: TestimoniesPage,  icon: 'megaphone' },
  { title: 'Online Giving', name: 'OnlinegivingPage', component: OnlinegivingPage,  icon: 'card' },
  { title: 'Prayer Request', name: 'LoginPage', component: PrayerrequestPage,  icon: 'people' },
  { title: 'Daily Devotional', name: 'DevotionPage', component: DevotionPage,  icon: 'book' },
  { title: 'Download Sermons', name: 'SermonsdownloadPage', component: SermonsdownloadPage,  icon: 'download' },

  //{ title: 'Children Church', name: 'ChildrendepartmentPage', component: ChildrendepartmentPage,  icon: 'book' },




  //{ title: 'Ministers', name: 'LoginPage', component: LoginPage,  icon: 'people' },
  { title: 'More', name: 'MorePage', component: MorePage,  icon: 'menu' },
  //{ title: 'Whatsapp', name: 'WhatsappPage', component: WhatsappPage,  icon: 'logo-whatsapp' },
  //{ title: 'Curriculum', name: 'PasscodePage', component: TabsPage, tabComponent: PasscodePage, index: 3, icon: 'book' },
  //{ title: 'More', name: 'MorePage', component: TabsPage, tabComponent: MorePage, index: 3, icon: 'paper' },
  //{ title: 'Extras', name: 'ExtrasPage', component: TabsPage, tabComponent: ExtrasPage, index: 4, icon: 'apps' },

  //{ title: 'Share', name: 'SharePage', component: SharePage, icon: 'shuffle' },
  //{ title: 'Special', name: 'SpecialPage', component: SpecialPage, icon: 'shuffle' },
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public oneSignal:OneSignal) {

    firebase.initializeApp({
      apiKey: "AIzaSyAXZWnzAFDllKomQgt8Jp3gLktuCNr9YGI",
      authDomain: "zionheritage.firebaseapp.com",
      databaseURL: "https://zionheritage.firebaseio.com",
      projectId: "zionheritage",
      storageBucket: "zionheritage.appspot.com",
      messagingSenderId: "745739780842"
    });



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();


      //OneSignal Configuration
      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      // window["plugins"].OneSignal
      //   .startInit("bb7a49a7-87ff-4620-bf25-3ad306929fff", "YOUR_GOOGLE_PROJECT_NUMBER_IF_ANDROID")
      //   .handleNotificationOpened(notificationOpenedCallback)
      //   .endInit();

      this.initApp();

    });
  }



  initApp(){

    // this.statusBar.overlaysWebView(true);
    //this.statusBar.backgroundColorByHexString('#ffffff');


    this.oneSignal.startInit('f7642426-5998-40f4-884b-bcf4547555d5', '745739780842');
    
    this.oneSignal.setSubscription(true);
    //this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe(() => {
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
    });

    this.oneSignal.endInit();

    //this.ga.startTrackerWithId('UA-85xxxxx7-3')
    //.then(() => {

      //this.ga.trackView('App V3 Started');

      // })
      //.catch(e => console.log('Error starting GoogleAnalytics', e));
    }


    openPage(page: PageInterface) {
      let params = {};

      // The index is equal to the order of our tabs inside tabs.ts
      if (page.index) {
        params = { tabIndex: page.index };
      }

      // If tabs page is already active just change the tab index
      if (this.nav.getActiveChildNavs().length && page.index != undefined) {
        this.nav.getActiveChildNavs()[0].select(page.index);
      } else {
        // Tabs are not active, so reset the root page 
        // In this case: moving to or from SpecialPage
        this.nav.setRoot(page.component, params);
      }
    }

    isActive(page: PageInterface) {
      // Again the Tabs Navigation
      let childNav = this.nav.getActiveChildNavs()[0];

      if (childNav) {
        if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
          return 'primary';
        }
        return;
      }

      // Fallback needed when there is no active childnav (tabs not active)
      if (this.nav.getActive() && this.nav.getActive().name === page.name) {
        return 'primary';
      }
      return;
    }



  }
