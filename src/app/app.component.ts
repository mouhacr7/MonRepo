import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListMedicamentPage } from '../pages/list_medicaments/list_medicaments';
import { ListPharmaciePage } from '../pages/list_pharmacie/list_pharmacie';
import { InfosPage } from '../pages/infos/infos';
import { AboutPage } from "../pages/about/about";
import { SignalerPage } from "../pages/signaler/signaler";
import { ContactPage } from "../pages/contact/contact";
import { SharePage } from "../pages/share/share";
import { LanguagePage } from "../pages/language/language";
import { ShrinkingSegmentHeaderComponent } from '../components/shrinking-segment-header/shrinking-segment-header';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;  
  rootPage: any = SharePage;
  isSpeechAvailable = false;
  pages: Array<{title: string, component: any,icon : string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: '#takeCare', component: HomePage , icon : 'home' },
      { title: 'Mes médicaments', component: ListMedicamentPage , icon : 'medkit'},
      { title: 'Ma pharmacie', component: ListPharmaciePage , icon : 'map'},
    //  { title: 'Scanner un médicament', component: InfosPage , icon : 'qr-scanner'},
      { title: 'Signaler médicament(s) frauduleux', component: SignalerPage , icon : 'thumbs-down'},
      { title: 'Contact', component: ContactPage , icon : 'person'},
      { title: 'Découvrir #takeCare', component: SharePage , icon : 'color-wand'},
      { title: 'Recommandé à un(e) ami(e)', component: AboutPage , icon : 'share'},
      { title: 'Changer la langue', component: LanguagePage , icon : 'switch'}
    ]
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
