import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform( imagenes: any[] ): string {
    if( imagenes.length == 0 ){
      return 'assets/img/noimage.png'
    }

    return imagenes[0].url;
  }
}