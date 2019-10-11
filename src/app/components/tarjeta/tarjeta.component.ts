import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent{

  @Input() items: any[] = [];

  constructor( private router: Router ){ }
  
  verArtista( item:any ){
    
    let artistaID:string = "";
    
    if( item.type == "artist" ){
      artistaID = item.id;
    } else {
      artistaID = item.artists[0].id
    }

    this.router.navigate( ['/artista', artistaID ] );
  }

}
