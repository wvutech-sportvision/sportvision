import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

var config = {
  apiKey: "AIzaSyANLCwRV98XjoZVdgXigs0ragffJz7dyug",
  authDomain: "sport-vision-70df1.firebaseapp.com",
  databaseURL: "https://sport-vision-70df1.firebaseio.com",
  projectId: "sport-vision-70df1",
  storageBucket: "sport-vision-70df1.appspot.com",
  messagingSenderId: "794677582911"
};

//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})

export class MyApp 
{
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    firebase.initializeApp(config);
  }
}
