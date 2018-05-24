import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Toast } from '@ionic-native/toast';
import { IMedicament }  from "../../interface/IMedicament";
import { AlertController } from 'ionic-angular';
//import { ListMedicamentPage } from '../../pages/list_medicaments/list_medicaments';
import { MedicamentsApiProvider } from "../../providers/medicaments-api/medicaments-api";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data={};
options:BarcodeScannerOptions;
medicaments = new Array<IMedicament>();

constructor(public navCtrl: NavController,public alertCtrl : AlertController ,private barcodeScanner: BarcodeScanner, private medicamentsApiProvider: MedicamentsApiProvider,private toastcrtl :ToastController ) {

}

  ionViewDidLoad() {
    this.medicamentsApiProvider.getMedicaments().subscribe(data =>{
      this.medicaments = data;
     
    })
  }
  
 scan(){ 

      this.options = {
        torchOn : false,
        prompt:"Veuillez scannez le code barre ou le DATAMATRIX",
        };
      this.barcodeScanner.scan(this.options).then((barcodeData) =>{
            // Success! Barcode data is here
            this.data = barcodeData;
            const alert = this.alertCtrl.create({
              title: 'Scan Results',
              subTitle: barcodeData.text,
              buttons: ['OK']
            });
            alert.present();
            
      },(err) => {
        this.toastcrtl.create({
          message : err.message
        }).present()
        // An error occured
        // console.log(err);
      });
    }

}


