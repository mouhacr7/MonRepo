import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
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
  this.search_photos();
  this.getMedicaments();
}
search_photos(){
  this.restProvider.getMedicaments()
  .then(data => {
  this.medicaments = data;
  this.medicaments.forEach(medicament => {
      if(medicament.poster_path){
          console.log('photo existe..')
      }else{
        this.photo_medic = 'assets/imgs/logo_pharm.png'
      }
  });
  });
}
getMedicaments() {
  this.restProvider.getMedicaments()
  .then(data => {
  this.medicaments = data;
  this.medicaments.forEach(medicament => {

  });
  });
  }


  goToDetail(medicaments) {
    this.navCtrl.push(InfosPage, medicaments);
  }

}