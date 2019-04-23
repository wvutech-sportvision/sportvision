import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MapPage } from "../map/map";
import { MatchmakingPage } from "../matchmaking/matchmaking";
import { ProfilePage } from "../profile/profile";
import { ForumPage } from '../forum/forum';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  goTo(page) {
    if(page === 'map') {
      this.navCtrl.push(MapPage);
    } else if(page === 'matchmaking') {
      this.navCtrl.push(MatchmakingPage);
    } else if(page === 'profile') {
      this.navCtrl.push(ProfilePage);
    } else if(page === 'forum') {
      this.navCtrl.push(ForumPage);
    }
  }
}
