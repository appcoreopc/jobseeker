import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { JobDetailPage } from './JobDetailPage'

@Component({
  selector: 'page-page1',
  templateUrl: 'feedPage.html'
})
export class FeedPage {

  data: any = [
    {
      title: 'test1',
      description: 'test1',
      detailDescription: '',
      imageUrl: 'http://www.marketindex.com.au/sites/default/files/small-old-asx-logo.png'
    },
    {
      title: 'test2',
      description: 'test2',
      detailDescription: '',
      imageUrl: 'http://www.marketindex.com.au/sites/default/files/small-old-asx-logo.png'
    },
    {
      title: 'test3',
      description: 'test3',
      detailDescription: '',
      imageUrl: 'http://www.marketindex.com.au/sites/default/files/small-old-asx-logo.png'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadDetail(item) {
    this.navCtrl.push(JobDetailPage, item)
  }

}
