import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient) {  }

  async fetchBeers(){
   return this.http.get('https://api.openbrewerydb.org/breweries')
  }


}
