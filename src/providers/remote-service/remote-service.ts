import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { IMedicament }  from "../../interface/IMedicament";

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {

  private baseUrl: string = "http://localhost:8080/Api/temp_medicaments.json";
  medicaments: IMedicament[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello MovieApiProvider Provider");
    if (this.platform.is("cordova") && this.platform.is("android") || this.platform.is("cordova") && this.platform.is("ios")) {
      this.baseUrl = "http://localhost:8080/Api/temp_medicaments.json";
    }
  }

  getMedicaments(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

}
