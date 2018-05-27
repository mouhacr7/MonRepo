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
    this.apiUrl = 'http://localhost:3000';
    console.log(this.apiUrl);
  }

  getMedicaments() {
    return new Promise(resolve => {
    this.http.get(this.apiUrl+'/medicaments').subscribe(data => {
    resolve(data);}, 
    err => {
    console.log(err);
    });
    });
    }

}