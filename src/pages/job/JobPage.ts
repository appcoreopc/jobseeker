import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from './FeedPage'

@Component({
  selector: 'page-page1',
  templateUrl: 'jobPage.html'
})
export class JobPage {

  feedPage : any; 

  constructor(public navCtrl: NavController) {
    this.feedPage = FeedPage;  
  }

  getItems(ev) {
  }
}
