import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { IMedicament }  from "../../interface/IMedicament";
import { InfosPage } from "../infos/infos";
import { MedicamentsApiProvider } from "../../providers/medicaments-api/medicaments-api";

@Component({
  selector: 'page-list_medicaments',
  templateUrl: 'list_medicaments.html'
})
export class ListMedicamentPage {

  medicaments = new Array<IMedicament>();

constructor(public navCtrl: NavController, public navParams: NavParams , private medicamentsApiProvider: MedicamentsApiProvider
) {}

ionViewDidLoad() {
  this.medicamentsApiProvider.getMedicaments().subscribe(data =>{
    this.medicaments = data;
  })
}

  goToDetail(medicaments: IMedicament) {
    this.navCtrl.push(InfosPage, medicaments);

  }
}