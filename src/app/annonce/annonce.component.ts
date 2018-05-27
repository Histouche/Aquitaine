import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnnonceComponent implements OnInit {

  /* informations sur l'annonce */
  titleAnnonce: any = 'Pullman Bordeaux Lac';
  localisationAnnonce: any = 'Bordeaux';
  annonceimg: any[] = [
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    },
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    },
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    }
  ];
  hotelAdresse: any = '40 Rue Edmond Michelet';
  hotelNote: any = 8;
  hotelClassement: any = 3;
  nbHotelVille: any = 177;
  annoncePrix: any = 50;
  nbAvis: any = 8;

  /**/
  groups = [
    {value: 'chambre-simple', viewValue: 'Chambre simple'},
    {value: 'chambre-double', viewValue: 'Chambre double'},
    {value: 'chambre-familiale', viewValue: 'Chambres familiale'},
    {value: 'chambre-multiples', viewValue: 'Chambres multiples'}
  ];

  /* suggestions d'annonce similaires */
  annonceList: any[] = [
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    },
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    },
    {
      'name': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
