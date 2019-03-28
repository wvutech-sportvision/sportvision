import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FriendsPage } from "../friends/friends";
import { MapPage } from "../map/map";
import { LoginPage } from "../login/login";

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
    }
  }

}
