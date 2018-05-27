import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-signaler',
  templateUrl: 'signaler.html'
})
export class SignalerPage {

medicaments : any;

  constructor(
     public navCtrl: NavController,   
     public navParams: NavParams,
     public restProvider: RestProvider) {
      this.getMedicaments()
    }

    getMedicaments() {
      this.restProvider.getMedicaments()
      .then(data => {
      this.medicaments = data;
      console.log(this.medicaments);
      });
      }
}

