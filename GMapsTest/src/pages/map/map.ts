import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsPage } from "../friends/friends";
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

  //  let coords = new google.maps.LatLng(37.778916, -81.1869202);
    // let mapOptions: google.maps.MapOptions = {
    //   center: coords,
    //   zoom: 17,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // }

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)
  }, (err) => {
    console.log(err);
  });
    // let marker: google.maps.Marker = new google.maps.Marker({
    //   map: this.map,
    //   position: coords
    // })
  }

//   addMarker(){
//
//   let marker = new google.maps.Marker({
//     map: this.map,
//     animation: google.maps.Animation.DROP,
//     position: this.map.getCenter()
//   });
//
//   let content = "<h4>Information!</h4>";
//
//   this.addInfoWindow(marker, content);
//
// }
// addInfoWindow(marker, content){
//
//     let infoWindow = new google.maps.InfoWindow({
//       content: content
//     });
//
//     google.maps.event.addListener(marker, 'click', () => {
//       infoWindow.open(this.map, marker);
//     });
//
//   }

  goTo(page) {
  if(page === 'friends') {
    this.navCtrl.push(FriendsPage);
  }
}

back() {
  if(this.navCtrl.length() >= 2) {
    this.navCtrl.pop();
  }
}


}
