import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AppliedFeedService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AppliedFeedService {
  _http: Http
  _data: any;
  _apiUrl: string = "http://104.197.151.41/blog/public/api/job/feed";

  constructor(public http: Http) {
    console.log('Hello AppliedFeedService Provider');
  }

  getFeed() {
    if (this._data) {
      return Promise.resolve(this._data);
    }

    return new Promise(resolve => {
      this._http.get(this._apiUrl).map(
        x => x.json()).subscribe(
        data => {
          this._data = data.feed;
          resolve(this._data);
        })
    });
  }
}
