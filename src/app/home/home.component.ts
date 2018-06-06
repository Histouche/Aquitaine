import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ListAnnonceComponent } from '../list-annonce/list-annonce.component';
import { Data, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public datas;
  users;
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

  constructor(private router: Router, private _dataService: DataService) {

  }
  ngOnInit() {
    this._dataService.getJSON().subscribe(data => {
      console.log(data);
      this.datas = data;
    });
  }

  search() {
    this.router.navigate([]);
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

}
