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

//Imports des tools de @ionic-native & @angular
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';

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
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListMedicamentPage,
    ListPharmaciePage,
    InfosPage,
    SignalerPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   // {provide: HttpBackend, useClass: NativeHttpFallback, deps: [Platform, NativeHttpBackend, HttpXhrBackend]},
    BarcodeScanner,
    Toast,
 

  ]
})
export class AppModule {}
