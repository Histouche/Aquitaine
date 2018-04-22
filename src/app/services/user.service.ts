import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { JwtHelper, AuthHttp, tokenNotExpired } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';
import { urlAPI } from './constantes.service';



export class User {
  id: string;
  email: string;
  pseudo: string;
  avatar: string;
  stayConnected: boolean;
  avatarColor: string;
  avatarLetters: string;

  constructor(email: string, id: string, pseudo: string, avatar:string, stay:boolean, avatarColor:string, avatarLetters:string) {
    this.email = email;
    this.id = id;
    this.pseudo = pseudo;
    this.avatar = avatar;
    this.stayConnected = stay;
    this.avatarColor = avatarColor;
    this.avatarLetters = avatarLetters;
  }
}

@Injectable()
export class UserService {
  private url = // 'https://progressive-web-apps.fr/API/';  // URL to web api
    'https://mediadev.info/pwafr/API/';
  userToken;
  currentUser: User;
  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private localStorageService: LocalStorageService, private http: Http, public authHttp: AuthHttp) {
    this.url = urlAPI;
  }

  login(user) {
    let userService = this;
    let data = new FormData();
    data.append('json', JSON.stringify( user ));
    return new Promise(function (resolve, reject) {
      /*appel api */
      userService.http.post(userService.url + 'login', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            /*console.log("decode ???", userService.jwtHelper.decodeToken(data['token']).data.email);*/
            if (data["response"]) {
              userService.setCurrentUser(data['token']);
            }
            resolve(data);
          },
          err => { reject(err); }
        )
    });
  }

  getAvatar() {
    let userService = this;
    let data = new FormData();
    data.append('json', JSON.stringify({ id: this.currentUser.id }));
    return new Promise(function (resolve, reject) {
      /* appel api */
      userService.authHttp.post(userService.url + 'getAvatar', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            resolve(data);
          },
          err => { reject(err); }
        )
    });
  }

  private setCurrentUser(token) {
    this.userToken = token;
    let dataToken = this.jwtHelper.decodeToken(this.userToken).data;
    this.currentUser = new User(dataToken.email, dataToken.id, dataToken.pseudo, dataToken.avatar, dataToken.stayConnected, dataToken.avatarColor, dataToken.avatarLetters);

    /*console.log(this.jwtHelper.decodeToken(this.userToken).id);*/
    return this.localStorageService.set('id_token', token);
  }

  loggedIn() {
    //    console.log('hello loggedIn');
    let token = this.localStorageService.get('id_token');
    if (token && token != '') {
      if (tokenNotExpired(null, token + '')) {
        this.userToken = token;
        // console.log(this.jwtHelper.decodeToken(this.userToken).data.stayConnected);
        let dataToken = this.jwtHelper.decodeToken(this.userToken).data;
        if (this.currentUser == null) {
          this.currentUser = new User(dataToken.email, dataToken.id, dataToken.pseudo, dataToken.avatar, dataToken.stayConnected, dataToken.avatarColor, dataToken.avatarLetters);
          let userService = this;
        }
      }
      return tokenNotExpired(null, token + '');
    } else {
      return false;
    }
  }

  deleteToken() {
    return this.localStorageService.remove('id_token');
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.deleteToken();
      observer.next(true);
      observer.complete();
    });
  }

  changeAvatar(url, iduser) {
    let userService = this;
    let data = new FormData();
    data.append('json', JSON.stringify({ id: iduser, url: url }));
    console.log(url, iduser);
    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'changeAvatar', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            if (data['response'] == true) {
              // userService.currentUser.setAvatar(url);
              userService.majToken(null, url);
              console.log("user changed", userService.currentUser);
            }
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  removeAvatar(iduser) {
    let userService = this;
    let data = new FormData();
    data.append('json', JSON.stringify({ id: iduser }));

    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'removeAvatar', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            if (data['response'] == true) {
              // userService.currentUser.setAvatar(null);
              userService.majToken(null, '');
            }
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  getProfil(id) {
    let userService = this;
    let data = new FormData();
    data.append('json', JSON.stringify({ id: id }));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'getProfil', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            let tpsrestant = userService.jwtHelper.decodeToken(userService.userToken).exp - (Date.now()/1000);
            if((tpsrestant/(60*60)<1 && !userService.currentUser.stayConnected) || (tpsrestant/(60*60)<48 && userService.currentUser.stayConnected)) {
              userService.majToken(null, null);
            }
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  changeProfil(user, id) {
    let userService = this;
    let data = new FormData();
    user.id = id;
    data.append('json', JSON.stringify(user));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'changeProfil', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            if (user.pseudo != userService.currentUser.pseudo) {
              // maj token?
              userService.majToken(user.pseudo, null);
            }
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  private
  majToken(pseudo, avatar) {
    let userService = this;
    let data = new FormData();
    let user = this.currentUser;
    if(pseudo!=null)
      user.pseudo = pseudo;
    if(avatar!=null)
      user.avatar = avatar;
    user['stayConnected'] = this.jwtHelper.decodeToken(this.userToken).data.stayConnected;
    console.log("userrr!", user);
    data.append('json', JSON.stringify(user));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'majToken', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            if (data['response']) {
              userService.setCurrentUser(data['token']);

            }
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  changeMdp(mdp) {
    let userService = this;
    let data = new FormData();

    data.append('json', JSON.stringify(mdp));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.authHttp.post(userService.url + 'changeMdp', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  reinitMdpMail(email) {
    let userService = this;
    let data = new FormData();

    data.append('json', JSON.stringify(email));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.http.post(userService.url + 'forgotMdpMail', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  reinitMdp(password, id, code) {
    let userService = this;
    let data = new FormData();
    password.id = id;
    password.code = code;
    data.append('json', JSON.stringify(password));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.http.post(userService.url + 'reinitMdp', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  verifCodeMdp(code, email) {
    let userService = this;
    let data = new FormData();
    code.email = email;
    console.log(code);
    data.append('json', JSON.stringify(code));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.http.post(userService.url + 'verifCodeMdp', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }

  renvoyerMailConfirm(email) {
    let userService = this;
    let data = new FormData();
    console.log(email);
    data.append('json', JSON.stringify({'email': email}));
    return new Promise(function (resolve, reject) {
      // appel api
      userService.http.post(userService.url + 'envoyerMailConfirmation', data)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            console.log(data);
            resolve(data);
          },
          err => { console.log(err); reject(err); }
        )
    });
  }
}

