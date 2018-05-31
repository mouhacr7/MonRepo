import { Component } from '@angular/core';
import { NavController, NavParams ,AlertController} from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { DomSanitizer } from '@angular/platform-browser';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-signaler',
  templateUrl: 'signaler.html'
})
export class SignalerPage {
  private image: string;

  constructor(
    public navCtrl: NavController,
    private camera: Camera,
    public navParams: NavParams ,
    public alertCtrl: AlertController,
    private domSanitizer: DomSanitizer) {
  }

  onTakePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      saveToPhotoAlbum: true,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        this.displayErrorAlert(err);
      });
  }

  displayErrorAlert(err){
    console.log(err);
    let alert = this.alertCtrl.create({
       title: 'Error',
       subTitle: 'Error while trying to capture picture',
       buttons: ['OK']
     });
     alert.present();
  }

}