import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsPage } from "../friends/friends";
//import { MapPage } from "../map/map";
import { HomePage } from "../home/home";
import { ForumPage } from "../forum/forum";

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    let coords = new google.maps.LatLng(37.778916, -81.1869202);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })
  }

  addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "<h4>Information!</h4>";

  this.addInfoWindow(marker, content);

}
addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }
  goTo(page) {
    if(page === 'home') {
      this.navCtrl.push(HomePage);
    } else if(page === 'forum'){
      this.navCtrl.push(ForumPage);
    } else if(page === 'friends'){
      this.navCtrl.push(FriendsPage);
    } else if(page === 'profile'){
      this.navCtrl.push(FriendsPage);
    } else if(page === 'matchmaking'){
      this.navCtrl.push(MatchmakingPage);
    }
  }



}
