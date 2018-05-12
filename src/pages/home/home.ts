import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
//import { Toast } from '@ionic-native/toast';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

data={};
options:BarcodeScannerOptions;

constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, private toastcrtl :ToastController ) {

  } 6

 scan(){ 

      this.options = {
        torchOn : false,
        prompt:"Please scan your code",
        };
      this.barcodeScanner.scan(this.options).then((barcodeData) =>{
            // Success! Barcode data is here
            
            this.data = barcodeData;
            console.log(barcodeData.text);
      },(err) => {
        this.toastcrtl.create({
          message : err.message
        }).present()
        // An error occured
        // console.log(err);
      });
    }

}


