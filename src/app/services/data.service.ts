import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(protected http: Http) {}

}
