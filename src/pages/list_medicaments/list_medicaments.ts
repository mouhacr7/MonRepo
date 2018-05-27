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
constructor(public navCtrl: NavController,
            public navParams: NavParams ,
            public restProvider: RestProvider
) {

  this.getMedicaments();
}

getMedicaments() {
  this.restProvider.getMedicaments()
  .then(data => {
  this.medicaments = data;
  console.log(this.medicaments);
  });
  }


  goToDetail(medicaments) {
    this.navCtrl.push(InfosPage, medicaments);
  }

}