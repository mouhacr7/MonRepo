import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  slides = [
    {
      title: "Bienvenue à #takeCare!", 
      description: "#takeCare est une application mobile qui permet de récolter des informations sur vos médicaments et de localiser sa pharmacie...",
      image: "assets/imgs/takeCare.jpg",
    },
    {
      title: "Scanner un médicament?",
      description: "Les informations recherchées peuvent etre obtenu juste à travers le Scanner...",
      image: "assets/imgs/qrCode.png",
    },
    {
      title: "Recherche avancée",
      description: "Recherche organisée et approfondie de médicaments et reperage des pharamacies par catégorie et sous-catégorie...",
      image: "assets/imgs/advanced-search.png",
    }
  ];


  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

}
