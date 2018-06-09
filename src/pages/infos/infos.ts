import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IMedicament }  from "../../interface/IMedicament";
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {
  medicaments: IMedicament;
 public prixMRO : number;
 BaseMedicamentsUrl = 'http://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid=';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public restProvider: RestProvider,
    private tbrowser : ThemeableBrowser
  ) {}
 
  ionViewDidLoad() {
       this.medicaments = this.navParams.data;
  }
  
    InfosBase(medocId : any){
      const options: ThemeableBrowserOptions = {
        statusbar: {
            color: '#87d567'
        },
        toolbar: {
            height: 44,
            color: '#f0f0f0ff'
        },
        title: {
            color: '#003264ff',
            showPageTitle: true
        },
        backButton: {
            image: 'back',
            imagePressed: 'back_pressed',
            align: 'left',
            event: 'backPressed'
        },
        forwardButton: {
            image: 'forward',
            imagePressed: 'forward_pressed',
            align: 'left',
            event: 'forwardPressed'
        },
        closeButton: {
            image: 'close',
            imagePressed: 'close_pressed',
            align: 'left',
            event: 'closePressed'
        },
        customButtons: [
            {
                image: 'share',
                imagePressed: 'share_pressed',
                align: 'right',
                event: 'sharePressed'
            }
        ],
        menu: {
            image: 'menu',
            imagePressed: 'menu_pressed',
            title: 'Test',
            cancel: 'Cancel',
            align: 'right',
            items: [
                {
                    event: 'helloPressed',
                    label: 'Hello World!'
                },
                {
                    event: 'testPressed',
                    label: 'Test!'
                }
            ]
        },
        backButtonCanClose: true
   };
   
   const browser: ThemeableBrowserObject = this.tbrowser.create(this.BaseMedicamentsUrl+medocId, '_blank', options);
    }
}