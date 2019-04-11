import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';


import { Geolocation } from '@ionic-native/geolocation';

import { GoogleMapComponent } from '../components/google-map/google-map';

import { FriendsPage } from "../pages/friends/friends";
import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ForumPage } from '../pages/forum/forum';
import { CognitoServiceProvider } from '../providers/cognito-service/cognito-service';
import { SystemVariableProvider } from '../providers/system-variable/system-variable';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    GoogleMapComponent,
    FriendsPage,
    MapPage,
    SignUpPage,
    ForumPage
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
    SignUpPage,
    ForumPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CognitoServiceProvider,
    SystemVariableProvider,
    Geolocation,
  ]
})
export class AppModule {}
