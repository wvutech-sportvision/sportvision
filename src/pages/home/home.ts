import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FriendsPage } from "../friends/friends";
import { MapPage } from "../map/map";
import { LoginPage } from "../login/login";
import { ForumPage } from "../forum/forum";
import { ProfilePage } from "../profile/profile";
import { SettingsPage } from "../settings/settings";
import { MatchmakingPage } from "../matchmaking/matchmaking";
import { ContactPage } from "../contact/contact";
import { AboutPage } from "../about/about";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(page) {
    if(page === 'friends') {
      this.navCtrl.push(FriendsPage);
    } else if(page === 'map') {
      this.navCtrl.push(MapPage);
    } else if(page === 'forum'){
      this.navCtrl.push(ForumPage);
    } else if(page === 'profile'){
      this.navCtrl.push(ProfilePage);
    } else if(page === 'about'){
      this.navCtrl.push(AboutPage);
    } else if(page === 'contact'){
      this.navCtrl.push(ContactPage);
    } else if(page === 'matchmaking'){
      this.navCtrl.push(MatchmakingPage);
    } else if(page === 'settings'){
      this.navCtrl.push(SettingsPage);
    }
  }

}
