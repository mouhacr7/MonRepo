import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  apiUrl : string;
  constructor(public http: HttpClient) {
    this.apiUrl = 'http://192.168.137.1:3000/medicaments';
    //console.log(this.apiUrl);
    this.getMedicaments();
  }

  getMedicaments() {
    return new Promise(resolve => {
    this.http.get<any>(this.apiUrl).subscribe((data : any) => {
      
    resolve(data);
  }, 
    err => {
      alert(err);
    console.log(err);
    });
    });
    }

    ionViewDidLoad(){
      return new Promise(resolve => {
        this.http.get<any>(this.apiUrl).subscribe((data : any) => {
          
        resolve(data);
      }, 
        err => {
         
        console.log(err);
        });
        });
    }


}
