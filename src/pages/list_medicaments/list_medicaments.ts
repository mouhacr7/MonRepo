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
  items: string[];
  medicaments = new Array<IMedicament>();

constructor(public navCtrl: NavController,
            public navParams: NavParams ,
            private medicamentsApiProvider: MedicamentsApiProvider
) {
  
}

ionViewDidLoad() {  
  this.medicamentsApiProvider.getMedicaments().subscribe(data =>{   
    this.medicaments = data;
      this.medicaments.forEach(medicament => {
        // console.log(medicament.id)
    });
  })
}

  goToDetail(medicaments: IMedicament) {
    this.navCtrl.push(InfosPage, medicaments);
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.medicamentsApiProvider.getMedicaments();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}