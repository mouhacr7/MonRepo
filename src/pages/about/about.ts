import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Platform } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private googleMaps : GoogleMaps,
    public plateform : Platform) {
      plateform.ready().then(() =>{
          this.loadMap();
      });
  }

  ngAfterViewInit() {
    this.loadMap();
  }


  loadMap() {

    let element : HTMLElement = document.getElementById('map');

    let map : GoogleMap = this.googleMaps.create(element);

    let mapOptions: GoogleMapOptions = {
      camera: {
         target: {
           lat: 43.0741904,
           lng: -89.3809802
         },
         zoom: 18,
         tilt: 30
       }
     };
 
    map = GoogleMaps.create('map_canvas', mapOptions);
 
    // Wait the MAP_READY before using any methods.
    map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
         console.log('Map is ready!');
 
         // Now you can use all methods safely.
         map.addMarker({
           title: 'Ionic',
           icon: 'blue',
           animation: 'DROP',
           position: {
             lat: 43.0741904,
             lng: -89.3809802
           }
         })
         .then(marker => {
           marker.on(GoogleMapsEvent.MARKER_CLICK)
             .subscribe(() => {
               alert('clicked');
             });
         });
 
      });
   }
}
