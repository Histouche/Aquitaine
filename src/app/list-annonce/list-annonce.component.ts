import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListAnnonceComponent implements OnInit {

  groups = [
    {value: 'chambre-simple', viewValue: 'Chambre simple'},
    {value: 'chambre-double', viewValue: 'Chambre double'},
    {value: 'chambre-familiale', viewValue: 'Chambres familiale'},
    {value: 'chambre-multiples', viewValue: 'Chambres multiples'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
