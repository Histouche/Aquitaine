import { Injectable } from '@angular/core';
import {HttpModule , Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {AnnonceInterface} from '../interfaces/annonce-interface';
@Injectable()
export class ApiService {

  constructor() { }

  getAnnonces() {}
}
