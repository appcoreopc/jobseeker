import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {
 _http: Http
  _data: any;
  _apiUrl: string = "http://104.197.151.41/blog/public/api/profile";
  _url: string;

  constructor(public http: Http) {
    this._http = http;
  }

  getFeed() {
    if (this._data) {
      return Promise.resolve(this._data);
    }

    this._url = this._apiUrl;

    return new Promise(resolve => {
      this._http.get(this._url).map(
        x => x.json()).subscribe(
        data => {
          this._data = data.profile[0];
          resolve(this._data);
        })
    });
  }
}
