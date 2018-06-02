import { Component, ViewEncapsulation, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import 'hammerjs';
// import { UserService } from './services/user.service';
import { ApiService } from './services/api.service';
import {AnnonceInterface} from './interfaces/annonce-interface';
import { VariablesService } from './services/variables.service';
/*import { LocalStorageService } from 'angular-2-local-storage';*/
import { isPlatformBrowser, isPlatformServer } from '@angular/common';


declare var ga: any;
declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  loading: boolean;
  selection: String = 'home';
  menuOpen = false;
  title = 'app';
  _annoncesArray: AnnonceInterface[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private variables: VariablesService,/* private localStorageService: LocalStorageService,*/ private router: Router/*,private userService: UserService, private update: UpdateService*/) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
        this.variables.setLoading(true);
        /*console.log("verif token", this.localStorageService.get('id_token'));*/

        if (event instanceof NavigationEnd) {
          if (isPlatformBrowser(this.platformId)) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
          }
          this.variables.setLoading(false);
          this.loading = false;
        }
        /*console.log("router event start", event instanceof NavigationStart);
        console.log("router event end", event instanceof NavigationEnd);*/
      }
    });
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
