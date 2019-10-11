import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  //Este token esxpira cada hora   
  token:string = 'BQCNW5c61S53SWANP0RoaWO_ygweHaFUvix9q0Y0KzTeCQddc6IHNReyxZMdlbihtmnCQxOSgvcEl3Z0Ec4';

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

  getArtistas( termino:string ){
    
    return this.getQuery( `search?q=${termino}&type=artist&limit=15` ).pipe( map( data => data['artists'].items ) )
  }

  getArtista( id:string ){
    
    return this.getQuery( `artists/${id}` ); //.pipe( map( data => data['artists'].items ) )
  }

  getTopTracks( id:string ){
    return this.getQuery( `artists/${id}/top-tracks?country=us` ).pipe( map( data =>  data['tracks'] ) );
  }
     
}
