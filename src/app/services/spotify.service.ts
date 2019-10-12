import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  //Este token esxpira cada hora   
  token:string = 'BQBkuCJtO-V1niQjXqLgY8weNSxB6VMkP0pOMXZSOiq0xFnHroDR3geCJuLAwFgsZ77QRXW9EBn5NTFvpjE';

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
