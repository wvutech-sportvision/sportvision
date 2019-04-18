import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MapPage } from "../map/map";
import { FriendsPage } from "../friends/friends";
import { HomePage } from "../home/home";
/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html',
})
export class ForumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


    goTo(page) {
      if(page === 'map') {
        this.navCtrl.push(MapPage);
      } else if(page === 'home'){
        this.navCtrl.push(HomePage);
      } else if(page === 'friends'){
        this.navCtrl.push(FriendsPage);
      } else if(page === 'profile'){
        this.navCtrl.push(FriendsPage);
      } else if(page === 'matchmaking'){
        this.navCtrl.push(MatchmakingPage);
      }
    }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

}
