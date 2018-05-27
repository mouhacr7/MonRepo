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
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpClientModule } from "@angular/common/http";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from '@ionic-native/geolocation'; 
import { Toast } from '@ionic-native/toast';
import { MedicamentsApiProvider } from '../providers/medicaments-api/medicaments-api';
import { GoogleMaps } from '@ionic-native/google-maps';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { RestProvider } from '../providers/rest/rest';
//Imports tools for Headers Http Modules
// import { HttpBackend, HttpXhrBackend } from '@angular/common/http';
// import { NativeHttpModule, NativeHttpBackend, NativeHttpFallback } from 'ionic-native-http-connection-backend';
// import { Platform } from 'ionic-angular';

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
    LanguagePage
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
    GoogleMaps,
    HTTP,
    Geolocation,
    RemoteServiceProvider,
    RestProvider
  ]
})
export class AppModule {}
