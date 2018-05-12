import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';


@Component({
  selector: 'page-list_medicaments',
  templateUrl: 'list_medicaments.html'
})
export class ListMedicamentPage {


  constructor(private platform: Platform,
    private nativeHttp: HTTP,) {
      this.platform.ready().then(() => {
        this.nativeHttp.get('http://localhost:8080/MyLara/public', {}, {})
            .then(() => {
                console.log('cordova-plugin-advanced-http is installed properly');
            });
    });
  }

}
