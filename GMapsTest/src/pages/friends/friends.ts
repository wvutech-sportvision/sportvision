import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";
/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


    goTo(page) {
      if(page === 'map') {
        this.navCtrl.push(MapPage);
      }
    }

    back() {
      if(this.navCtrl.length() >= 2) {
        this.navCtrl.pop();
      }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

}
