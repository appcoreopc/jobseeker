import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'jobDetailPage.html'
})

export class JobDetailPage {
  item : any; 
  constructor(public navCtrl: NavController, private navParams: NavParams) {
      console.log(navParams);
      this.item = navParams.data;
  }
}
