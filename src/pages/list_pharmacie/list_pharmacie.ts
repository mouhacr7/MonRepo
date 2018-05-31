import { Component , ViewChild ,ElementRef} from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation'; 

declare var google;
@Component({
  selector: 'page-list_pharmacie',
  templateUrl: 'list_pharmacie.html'
})
export class ListPharmaciePage {
 options : GeolocationOptions;
  currentPos : Geoposition;
   @ViewChild('map') mapElement: ElementRef;
    map: any;
  constructor(public navCtrl: NavController,private geolocation : Geolocation, public platform : Platform, public navParams: NavParams,public toastCtrl: ToastController) {
    this.getUserPosition()
  }

  getUserPosition(){
    this.options = {
    enableHighAccuracy : false
    };
    this.geolocation.getCurrentPosition(this.options).then((pos : Geoposition) => {
  
        this.currentPos = pos;     
  
        console.log(pos);
        this.addMap(pos.coords.latitude,pos.coords.longitude);
  
    },(err : PositionError)=>{
        console.log("error : " + err.message);
    ;
    
    })
  }

   addMap(lat,long){

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
    center: latLng,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    this.addMarker();

}
addMarker(){

  let marker = new google.maps.Marker({
  map: this.map,
  animation: google.maps.Animation.DROP,
  position: this.map.getCenter()
  });

  let content = "<p>This is your current position !</p>";          
  let infoWindow = new google.maps.InfoWindow({
  content: content
  });

  google.maps.event.addListener(marker, 'click', () => {
  infoWindow.open(this.map, marker);
  });

}

   ionViewDidEnter(){
  this.getUserPosition();
} 
}