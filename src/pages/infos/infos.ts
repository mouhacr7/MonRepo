import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IMedicament }  from "../../interface/IMedicament";
import { InAppBrowser,InAppBrowserOptions } from '@ionic-native/in-app-browser'; 
import { RestProvider } from '../../providers/rest/rest';

const devise = 425;
@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {
  medocs : any;
  medicaments: IMedicament;
 public prixMRO : number;
 BaseMedicamentsUrl = 'http://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid=';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    private inAppBrowser: InAppBrowser
  ) {
    this.getPrices();
  }
 
  ionViewDidLoad() {
    this.medicaments = this.navParams.data;
  }

  getPrices() {
    this.restProvider.getMedicaments()
    .then(data => {
    this.medocs = data;
    this.medocs.forEach(medoc => {
      
       this.prixMRO = (medoc.presentations[0].price*devise)
       console.log(this.prixMRO)
    });
    });
    }

    InfosBase(medocId : any){
      let options: InAppBrowserOptions = {
        location:'yes',
        clearcache: 'yes',
        toolbar:'no',
        zoom:'yes'
        
      }

      // Opening a URL and returning an InAppBrowserObject
      return this.inAppBrowser.create(this.BaseMedicamentsUrl+medocId, '_self', options);
  
     // Inject scripts, css and more with browser.X
    }
}