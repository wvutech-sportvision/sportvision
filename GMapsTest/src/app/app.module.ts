import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMapComponent } from '../components/google-map/google-map';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

import { FriendsPage } from "../pages/friends/friends";
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';
import { SystemVariableProvider } from '../providers/system-variable/system-variable';
import { MatchmakingPage } from '../pages/matchmaking/matchmaking';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { AboutPage } from '../pages/about/about';
import { ForumPage } from '../pages/forum/forum';
import { ForumHomePage } from '../pages/forum-home/forum-home';
import { AddRoomPage } from '../pages/add-room/add-room';
import { RoomPage } from '../pages/room/room';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    GoogleMapComponent,
    FriendsPage,
    MapPage,
    MatchmakingPage,
    ProfilePage,
    SettingsPage,
    AboutPage,
    ForumPage,
    ForumHomePage,
    AddRoomPage,
    RoomPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    FriendsPage,
    MapPage,
    ProfilePage,
    MatchmakingPage,
    SettingsPage,
    AboutPage,
    ForumPage,
    ForumHomePage,
    AddRoomPage,
    RoomPage,
    ContactPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CognitoServiceProvider,
    SystemVariableProvider
  ]
})
export class AppModule {}
