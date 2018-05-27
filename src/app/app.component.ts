import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'hammerjs';
import { ApiService } from './services/api.service';
import {AnnonceInterface} from './interfaces/annonce-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApiService]
})
export class AppComponent implements OnInit {

  selection: String = 'home';
  menuOpen = false;
  title = 'app';
  _annoncesArray: AnnonceInterface[];

  constructor(private apiService: ApiService) {

  }

  getAnnonces(): void {
    /*this.apiService.getAnnonces()
      .subscribe(
        resultArray => this._annoncesArray = resultArray,
        error => console.log("Erreur ::" + error)
      )*/
  }

  ngOnInit(): void {
    console.log('aaa');
    this.getAnnonces();
  }

  select(item) {
    console.log(this.selection, item);
    this.selection = item;
    /*this.variables.setPage(item);*/
    this.menuOpen = false;
    /*
    this.variables.setMenuOpen(false);
        console.log('selected !!!', this.selection);
    */
  }

}
