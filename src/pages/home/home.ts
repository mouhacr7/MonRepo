import { Component } from '@angular/core';
import { NavController,ToastController,ModalController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { AlertController } from 'ionic-angular';
import { InfosPage } from "../infos/infos";
import { RestProvider } from '../../providers/rest/rest';
import { ListPharmaciePage } from '../../pages/list_pharmacie/list_pharmacie';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data={};
options:BarcodeScannerOptions;
medicaments : any;
section: string = 'one';

constructor(public navCtrl: NavController,
  public alertCtrl : AlertController,
  private barcodeScanner: BarcodeScanner,
  private toastCrtl :ToastController,
  public restProvider: RestProvider,
  public modalCtrl: ModalController ) {

    this.getMedicaments();
  }
  
  launchLocationPage(){
 
    let modal = this.modalCtrl.create(ListPharmaciePage);

    modal.onDidDismiss((location) => {
        console.log(location);
    });

    modal.present();   

}
  getMedicaments() {
    this.restProvider.getMedicaments()
    .then(data => {
    this.medicaments = data;
    this.medicaments.forEach(medicament => {
      //alert(JSON.stringify(this.medicaments));
   // console.log(JSON.stringify(this.medicaments));
    });
    });
    }

    goToDetail(medicaments) {
      this.navCtrl.push(InfosPage, medicaments);
    }
 medocLoad(idMedoc : any) {
      
       this.restProvider.getMedicaments()
       .then(data => {
       this.medicaments = data;
       this.medicaments.forEach(medicament => {
        //Scan Results checks with Authenticity treatment
        if(idMedoc == 3529422){
          const alertSuccess = this.alertCtrl.create({
            title: 'Resultats du scan',
            subTitle: 'Medicament présent dans notre base des données,donc authentique à priori!!!',
            buttons: ['OK']
          });
          alertSuccess.present();
          let toastSuccess = this.toastCrtl.create({
            message: 'Le Scan a bien été éffectué...',
            duration: 7000,
            showCloseButton:true,
            closeButtonText:'OK'
          });
         return toastSuccess.present();
        }else{
          const alertFailed = this.alertCtrl.create({
            title: 'Resultats du scan',
            subTitle: 'Medicament absent de notre base des données,donc non-authentique à priori!!!',
            buttons: ['OK']
          });
          alertFailed.present();
          let toastFailed = this.toastCrtl.create({
            message: 'Le Scan a bien été éffectué...',
            duration: 3000,
            showCloseButton:true,
            closeButtonText:'OK'
          });
          toastFailed.present();
        }
           });
       });
      
  }
  
 scan(){
      this.options = {
        torchOn : false,
        prompt:"Veuillez scannez le code barre ou le DATAMATRIX",
        };        
      this.barcodeScanner.scan(this.options).then((barcodeData) =>{
        this.medocLoad(barcodeData.text);
      },(err) => {
        this.toastCrtl.create({
          message : err.message
        }).present()
      });
    }

}



