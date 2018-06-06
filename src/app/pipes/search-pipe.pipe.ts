import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(annonces: any, query: any, price: any): any {
  // on check si la champ est vide
    if (query === undefined) {
      return annonces;
    } else {
      if ( price === 0) {
        return annonces;
      } else {

      }
    }
    // filtre par titre d'annonce
    return annonces.filter(function (annonce) {
      return annonce.annonce.hotel.ville.nom.toLowerCase().includes(query.toLowerCase());
    });
  }

}
