import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ){
    
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQBZ7mpoi1sfDtiZGD4xOX3qgSHUGQ8Jc141J8FJZ04idXeCsnvZoY3QnArBACD-S6gM4pTkphLORTynHg8'
    })

    return this.http.get( "https://api.spotify.com/v1/browse/new-releases?limit=20", { headers } );
  }

}
