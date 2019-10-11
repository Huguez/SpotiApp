import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  
  list:any[] = [];
  loading:boolean;

  constructor( private spotify: SpotifyService ){ }

  buscar( termino: string ){
    if( termino == "" ){
      this.loading = false;
      return;
    }

    this.loading = true;

    this.spotify.getArtistas( termino ).subscribe(
      ( data: any ) => {
        this.list = data;
        this.loading = false;
      }
    );
  }

  
}