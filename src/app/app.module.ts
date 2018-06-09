import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//Route vers les pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListMedicamentPage } from '../pages/list_medicaments/list_medicaments';
import { ListPharmaciePage } from '../pages/list_pharmacie/list_pharmacie';
import { InfosPage } from '../pages/infos/infos';
import { SignalerPage } from "../pages/signaler/signaler";
import { AboutPage } from "../pages/about/about";
import { ContactPage } from "../pages/contact/contact";
import { SharePage } from "../pages/share/share";
import { LanguagePage } from "../pages/language/language";
import { HTTP } from '@ionic-native/http';
//Imports des tools de @ionic-native & @angular
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


import { Network } from '@ionic-native/network';
import { Geolocation } from '@ionic-native/geolocation'; 
import { InAppBrowser } from '@ionic-native/in-app-browser'; 
import { ThemeableBrowser } from '@ionic-native/themeable-browser';
import { Toast } from '@ionic-native/toast';
import { MedicamentsApiProvider } from '../providers/medicaments-api/medicaments-api';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { RestProvider } from '../providers/rest/rest';
import { ConnectivityServiceProvider } from '../providers/connectivity-service/connectivity-service';
import { GoogleMapsProvider } from '../providers/google-maps/google-maps';
//Imports tools for Headers Http Modules
// import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
// import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
// import { Platform } from 'ionic-angular';
 
import { ShrinkingSegmentHeaderComponent } from '../components/shrinking-segment-header/shrinking-segment-header';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListMedicamentPage,
    ListPharmaciePage,
    InfosPage,
    SignalerPage,
    AboutPage,
    ContactPage,
    SharePage,
    LanguagePage,
    ShrinkingSegmentHeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListMedicamentPage,
    ListPharmaciePage,
    InfosPage,
    SignalerPage,
    AboutPage,
    ContactPage,
    SharePage,
    LanguagePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   // {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    BarcodeScanner,
    Toast,
    MedicamentsApiProvider,
    HTTP,
    Geolocation,
    Network,
    RemoteServiceProvider,
    RestProvider,
    Camera,
    InAppBrowser,
    ThemeableBrowser,
    ConnectivityServiceProvider,
    GoogleMapsProvider
  ]
})
export class AppModule {}
