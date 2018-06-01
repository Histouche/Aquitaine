import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AnnonceInterface} from '../interfaces/annonce-interface';
import {DataService} from '../services/data.service';
import { SearchPipe } from '../pipes/search-pipe.pipe';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListAnnonceComponent implements OnInit {


  public annonces: AnnonceInterface[];
  /* search filter */
  public search: any = '';
  /* */
  thumbLabel = true;
  value = 0;
  groups = [
    {value: 'chambre-simple', viewValue: 'Chambre simple'},
    {value: 'chambre-double', viewValue: 'Chambre double'},
    {value: 'chambre-familiale', viewValue: 'Chambres familiale'},
    {value: 'chambre-multiples', viewValue: 'Chambres multiples'}
  ];
  annonceList: any[] = [];


  constructor() {
  }

  ngOnInit() {
    this.annonceList = [
      {
        'titleAnnonce': 'Pullman Bordeaux Lac',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'prix': 70,
        'note': 8,
        'etoiles': '',
        'ville': 'Bordeaux',
        'chambreSimple' : 'oui',
        'chambreDouble': 'oui',
        'chambreFamiliale': 'non',
        'nbAvis' : 8,
        'etoile' : 3
      },
      {
        'titleAnnonce': 'Bordeaux Centre',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'note': 6,
        'etoiles': '',
        'ville': 'Bordeaux',
        'prix': 65,
        'chambreSimple' : 'oui',
        'chambreDouble': 'oui',
        'chambreFamiliale': 'non',
        'nbAvis' : 15,
        'etoile' : 4
      },
      {
        'titleAnnonce': 'Jardins du marais',
        'imgMiniature': 'https://imgio.trivago.com/itemimages/12/33/12330_v9_isq@2x.jpeg',
        'note': 7,
        'etoiles': '',
        'ville': 'Bordeaux',
        'prix': 45,
        'chambreSimple' : 'oui',
        'chambreDouble': 'non',
        'chambreFamiliale': 'non',
        'nbAvis' : 26,
        'etoile' : 3
      }
    ];
  }

}
