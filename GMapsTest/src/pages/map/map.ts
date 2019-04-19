import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsPage } from "../friends/friends";
import { Geolocation, GeolocationOptions, Geoposition } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

    options : GeolocationOptions;
    currentPos : Geoposition;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(private geolocation: Geolocation, public navCtrl: NavController) {
  }


  ionViewDidLoad(){
      this.loadMap();
    }

    loadMap(){

      this.geolocation.getCurrentPosition().then((position) => {

        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        let mapOptions = {
          center: latLng, //Centers at the lat and lng of position, position points at the users currentPosition
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      }, (err) => {
        console.log(err);
      });
      //
      // // Create a <script> tag and set the USGS URL as the source.
      //       var script = document.createElement('script');
      //       // This example uses a local copy of the GeoJSON stored at
      //       // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
      //       script.src = 'src="https://www.google.com/maps/embed/v1/search?q=basketball&key=AIzaSyCD6JmpSdOHo6iz0CHb0i0t61aHFT8YpWI"';
      //       document.getElementsByTagName('head')[0].appendChild(script);
      //     }

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
