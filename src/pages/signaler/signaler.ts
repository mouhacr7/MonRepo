import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
import { IMedicament }  from "../../interface/IMedicament";
import { MedicamentsApiProvider } from "../../providers/medicaments-api/medicaments-api";

@Component({
  selector: 'page-signaler',
  templateUrl: 'signaler.html'
})
export class SignalerPage {

  medicaments = new Array<IMedicament>();

  constructor(
     public navCtrl: NavController,
     private medicamentsApiProvider: MedicamentsApiProvider,
     public navParams: NavParams,private http: HTTP) {

    this.http.get('/android_asset/www/assets/api/temp_medicaments.json', {}, {})
   .then(data => {
 
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
    })
    .catch(error => {
 
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

   });
    
  }
  
ionViewDidLoad() {  
  this.medicamentsApiProvider.getMedicaments().subscribe(data =>{   
    this.medicaments = data;
      this.medicaments.forEach(medicament => {
        // console.log(medicament.id)
    });
  })
}
}

