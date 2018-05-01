import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListAnnonceComponent implements OnInit {
  thumbLabel = true;
  value = 0;
  groups = [
    {value: 'chambre-simple', viewValue: 'Chambre simple'},
    {value: 'chambre-double', viewValue: 'Chambre double'},
    {value: 'chambre-familiale', viewValue: 'Chambres familiale'},
    {value: 'chambre-multiples', viewValue: 'Chambres multiples'}
  ];
  annonceList: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
