import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-infos',
  templateUrl: 'infos.html'
})
export class InfosPage {

public data:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:Http) {
     let header = new Headers();

        
        // header.append('Access-Control-Allow-Origin', '*');
        // header.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // header.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
      //   header.append('Accept','application/json');
      //   header.append('Authorization','Bearer .eyJhdWQiOiIxIiwianRpIjoiYzJiNDM0NGZmYzg5OGQ1ZWEyYjBjMGZmYmEyMDBkNmJmZjJlNTNiZGY1OWZhNzA2Y2Y4MWZhMzAzNjU4YTQ4Y2JjNTkxNWVhZDlhZTI4MWQiLCJpYXQiOjE1MjUwMzczNjcsIm5iZiI6MTUyNTAzNzM2NywiZXhwIjoxNTU2NTczMzY3LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.izGIdPdVum-yGzi55F9omDuTGVCIDdAE0aj2X2xzZB904CawiV6voWjH8qLcmDCBcfd5CUxeQLufNcQmKqeRCtKKLXb6rkz9O8aCRkD3vJizqj50yuZgeEMWFnr88tP9mgZ2Rv0zbn950rC4vFuRHvwnj1ZVGnfjS8Dctd5vHqfQy7fRvsCvQGYFjcAso_FnWMOjphHRNRMdfNTYbm_zr9ic9yMS3WE99fcZgsKV2oT_VeEj4INuFrGReS6xhuMpNcKabL9tXps8y8idi3qXLfAz5gvBunbuxQUiWrr-dpBK1Emqud2wQ_bzHy_Ta0SyNR_H3BACtUZ4R0By0t_tDxo3Y-JtYybmdogHHKTatuycvuC70ee7Q8ojgxkVRkXheH0NkVaeRZ4u4K3NIF03UpuWwEqMZ0oM51Fpwsu0Fw3Vi0WlhS_iBZYKPPWKWVnD1H8nVBjkgSFaiC22gCq5w-GuUH92c4xT9XGIWZum34lOS1CcgmPUtlQHhyGWI45zmKQqwbrfHVy0HYb4DWQZZDoqFntbCuuNeBU1U98H5WeO6fWlt9ZT5SjgUyqnZdKCjNHCp1SA7x5xKCvdIxB0WnCD4oTs6oU5ox9F4PTHQzml3Rqdda9vF9S3O1uSPo3wcRYnLZGzQI6WI6GCLP2BDL4Dm5GAlkmXnYFfr7XEhb8');
       this.http.get('http://localhost:8080/MyLara/public', {headers : header})
          .map(res => res.json())
            .subscribe(
                data => {
                    console.log(data);
                    this.data = data;
                },
                error => {
                    console.log('error');
                });

  }
}