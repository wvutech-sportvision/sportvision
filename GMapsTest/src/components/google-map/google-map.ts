import { Component, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {
    
  }

  ngOnInit(){
    this.initMap();
  }

  initMap(){

    let coords = new google.maps.LatLng(37.778916, -81.1869202);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  }
}
