import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
    
  token:string = 'BQDame130kwDs4WxzrMiA6LgruI52UgH4cIXOOvmdXfjtOPE4i-PKA0-XY57bqO--1NKuXt2zNnOJ_fDRoM';

  constructor( private http: HttpClient ){}
  
  getQuery( query: string ){
    const url = `https://api.spotify.com/v1/${ query }`;
    
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer '+this.token
    })
    
    return this.http.get( url, { headers } );
  }

  getNewReleases(){
    
    return this.getQuery( "browse/new-releases?limit=15" ).pipe( map( data => data['albums'].items ) )
  }

  getArtista( termino:string ){
    
    return this.getQuery( `search?q=${termino}&type=artist&limit=15` ).pipe( map( data => data['artists'].items ) )
  }
}
