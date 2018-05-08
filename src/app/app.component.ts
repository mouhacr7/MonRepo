import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListMedicamentPage } from '../pages/list_medicaments/list_medicaments';
import { ListPharmaciePage } from '../pages/list_pharmacie/list_pharmacie';
import { InfosPage } from '../pages/infos/infos';
import {SignalerPage} from "../pages/signaler/signaler";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Acceuil', component: HomePage },
      { title: 'Liste Médicaments', component: ListMedicamentPage },
      { title: 'Liste Pharmacies', component: ListPharmaciePage },
      { title: 'infos', component: InfosPage },
      { title: 'signaler médicament(s) frauduleux', component: SignalerPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
