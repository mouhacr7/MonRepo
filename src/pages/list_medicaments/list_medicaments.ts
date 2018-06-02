import { Component } from '@angular/core';
import { NavController, NavParams, Alert } from "ionic-angular";
import { InfosPage } from "../infos/infos";
import { RestProvider } from '../../providers/rest/rest';

  @Component({
  selector: 'page-list_medicaments',
  templateUrl: 'list_medicaments.html'
})
export class ListMedicamentPage {
  items: String[];
  medicaments : any;
  photo_medic : any;
constructor(public navCtrl: NavController,
            public navParams: NavParams ,
            public restProvider: RestProvider
) {
  this.getMedicaments();
}
// search_photos(){
//   this.restProvider.getMedicaments()
//   .then(data => {
//   this.medicaments = data;
//   this.medicaments.forEach(medicament => {
  
//   });
//   });
// }
getMedicaments() {
  this.restProvider.getMedicaments()
  .then(data => {
  this.medicaments = data;
  alert(JSON.stringify(this.medicaments))
  this.medicaments.forEach(medicament => {
    //alert(JSON.stringify(this.medicaments));
 // console.log(JSON.stringify(this.medicaments));
  });
  });
  }


  goToDetail(medicaments) {
    this.navCtrl.push(InfosPage, medicaments);
  }

}