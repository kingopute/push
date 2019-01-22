import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { UserPage} from '../pages/user/user';

import { InAppBrowser } from '@ionic-native/in-app-browser';



import { AuthService } from '../pages/core/auth.service';
import { UserService } from '../pages/core/user.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';
import { Calendar } from '@ionic-native/calendar';

//import { MyApp } from './app.component';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { HomePage } from '../pages/home/home';
//import { ChatPage } from '../pages/chat/chat';
import { ChatPageModule } from '../pages/chat/chat.module';

import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/event-details/event-details';



import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';


import { SermonsPage } from '../pages/sermons/sermons';
import { SeriesPage } from '../pages/series/series';
import { EpisodePage } from '../pages/episode/episode';

import { HomePage } from '../pages/home/home';

import { VideosPipe } from './../pipes/videos/videos';
import { HttpModule } from '@angular/http';
import { StreamingMedia } from '@ionic-native/streaming-media';

import { DevotionPage } from '../pages/devotion/devotion';


import { LocationMapPage } from '../pages/location-map/location-map';
//import {GOOGLE_MAPS_PROVIDERS} from 'angular2-google-map/core';
import { AgmCoreModule } from 'angular2-google-map/core';
import { Injectable, ModuleWithProviders, InjectionToken } from '@angular/core';
import { SermonsdownloadPage } from './../pages/sermonsdownload/sermonsdownload';
import { TestimoniesPage } from './../pages/testimonies/testimonies';
import { TestimoniesdetailsPage } from './../pages/testimoniesdetails/testimoniesdetails';
//import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { Calendar } from '@ionic-native/calendar';
import { SocialSharing } from '@ionic-native/social-sharing';
//import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';





import { MorePage } from '../pages/more/more';
import { SocialPage } from './../pages/social/social';
import { MusicPage } from './../pages/music/music';
import { TithingPage } from './../pages/tithing/tithing';
import { ConnectPage } from './../pages/connect/connect';
import { MinistriesPage } from './../pages/ministries/ministries';
import { LeadersPage } from './../pages/leaders/leaders';
import { BranchesPage } from './../pages/branches/branches';
import { AboutUsPage } from './../pages/about-us/about-us';
import { MinistryDetailsPage } from './../pages/ministry-details/ministry-details';

import { FirsttimerpasscodePage } from './../pages/firsttimerpasscode/firsttimerpasscode';
import { FirsttimerPage } from './../pages/firsttimer/firsttimer';
import { FirsttimerdetailsPage } from './../pages/firsttimerdetails/firsttimerdetails';

import { MemberspasscodePage } from './../pages/memberspasscode/memberspasscode';
import { MembersPage } from './../pages/members/members';
import { MembersdetailsPage } from './../pages/membersdetails/membersdetails';

import { SundayschoolPage } from './../pages/sundayschool/sundayschool';
import { SundayschooldetailsPage } from './../pages/sundayschooldetails/sundayschooldetails';

import { ChildrendepartmentPage } from './../pages/childrendepartment/childrendepartment';
import { ChildrendepartmentdetailsPage } from './../pages/childrendepartmentdetails/childrendepartmentdetails';

import { WeeklydeclarationPage } from './../pages/weeklydeclaration/weeklydeclaration';
import { WeeklydeclarationdetailsPage } from './../pages/weeklydeclarationdetails/weeklydeclarationdetails';

import { DevotionalPage } from './../pages/devotional/devotional';
import { DevotionaldetailsPage } from './../pages/devotionaldetails/devotionaldetails';
import { OnlinegivingPage } from './../pages/onlinegiving/onlinegiving';
import { SermondownloadurlPage } from './../pages/sermondownloadurl/sermondownloadurl';
import { LivestreamPage } from './../pages/livestream/livestream';
import { PrayerrequestPage } from './../pages/prayerrequest/prayerrequest';
import { WelcomePage } from './../pages/welcome/welcome';

import { StorePage } from './../pages/store/store';
import { OneSignal } from '@ionic-native/onesignal';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    UserPage,
    HomePage,
    
    LocationMapPage,
    VideosPipe,

    SermonsPage,
    SeriesPage,
    EpisodePage,
    EventsPage,
    EventDetailsPage,
    SermonsdownloadPage,
    TestimoniesPage,
    TestimoniesdetailsPage,

    MorePage,
   SocialPage,
   MusicPage,
   TithingPage,
   ConnectPage,
   MinistriesPage,
   LeadersPage,
   BranchesPage,
   AboutUsPage,
   MinistryDetailsPage,
   FirsttimerpasscodePage,
   FirsttimerPage,
   FirsttimerdetailsPage,
   MemberspasscodePage,
   MembersPage,
   MembersdetailsPage,
   SundayschoolPage,
   SundayschooldetailsPage,
   DevotionalPage,
   DevotionaldetailsPage,
   OnlinegivingPage,
   SermondownloadurlPage,
   ChildrendepartmentPage,
ChildrendepartmentdetailsPage,
WeeklydeclarationPage,
WeeklydeclarationdetailsPage,
LivestreamPage,
PrayerrequestPage,
WelcomePage,
DevotionPage,
StorePage

  

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),

    //AngularFireModule.initializeApp(),
    AngularFireDatabaseModule,
    ChatPageModule,
  
   AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMgyfWT7Ur55veBZKf-QZyvWEiFh8USGs'
    }),

    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    UserPage,
    HomePage,
    

    LocationMapPage,
    
    HomePage,
    SermonsPage,
    SeriesPage,
    EpisodePage,
    EventsPage,
    EventDetailsPage,
    SermonsdownloadPage,
    TestimoniesPage,
    TestimoniesdetailsPage,


    MorePage,
   SocialPage,
   MusicPage,
   TithingPage,
   ConnectPage,
   MinistriesPage,
   LeadersPage,
   BranchesPage,
   AboutUsPage,
   MinistryDetailsPage,
   FirsttimerpasscodePage,
   FirsttimerPage,
   FirsttimerdetailsPage,
   MemberspasscodePage,
   MembersPage,
   MembersdetailsPage,
   SundayschoolPage,
   SundayschooldetailsPage,
   DevotionalPage,
   DevotionaldetailsPage,
   OnlinegivingPage,
   SermondownloadurlPage,
   ChildrendepartmentPage,
   ChildrendepartmentdetailsPage,
   WeeklydeclarationPage,
  WeeklydeclarationdetailsPage,
  LivestreamPage,
  PrayerrequestPage,
  WelcomePage,
  DevotionPage,
  StorePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    AuthService,
    TwitterConnect,
    UserService,
    Calendar,
    InAppBrowser,
    OneSignal,
     SocialSharing,StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
