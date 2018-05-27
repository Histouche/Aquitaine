import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(annonces: any, query: any): any {
  // on check si la champ est vide
    if (query === undefined) { return annonces; }
    // filtre par titre d'annonce et ville
    return annonces.filter(function (annonce) {
      return annonce.titleAnnonce.toLowerCase().includes(query.toLowerCase());
    });
  }

}
