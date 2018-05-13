import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IMedicament }  from "../../interface/IMedicament";

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

  medicaments: IMedicament;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
 
  ionViewDidLoad() {
    this.medicaments = this.navParams.data;
  }
}