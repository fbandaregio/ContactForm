import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio de form listo');
   }

  getGeoName( termino: string ){
    let baseurl = 'http://api.geonames.org/';
    let url =  baseurl + `searchJSON?q=${termino}&maxRows=10&username=fedexxx`;
    return this.http.get( url )
      .pipe(map( ( resp: any) => resp.cities));
  }
}
