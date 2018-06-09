import { Component,ViewChild } from '@angular/core';
import { Nav,IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../home/home';
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
  @ViewChild(Nav) nav: Nav;  
  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
 
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
      image: "assets/imgs/zoom-search-2-icon.png",
    }
  ];
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  loadHome() {
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SharePage');
  }

}
