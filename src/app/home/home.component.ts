import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ListAnnonceComponent } from '../list-annonce/list-annonce.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

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


  constructor(private router: Router) {}

  ngOnInit() {
  }

  search() {
    this.router.navigate([]);
  }

}
