import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'jobDetailPage.html'
})

export class JobDetailPage {
  constructor(public navCtrl: NavController, private navParams: NavParams) {
  }
}
