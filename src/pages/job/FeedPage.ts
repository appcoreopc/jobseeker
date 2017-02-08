import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobDetailPage } from './JobDetailPage'
import { JobFeedService } from "../../providers/job-feed-service"

@Component({
  selector: 'page-page1',
  templateUrl: 'feedPage.html',
  providers: [JobFeedService]
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private feedService: JobFeedService, private loader: LoadingController) {
    
    let loadingUI = this.loader.create({ content: 'Please wait ...' });
    loadingUI.present();
    this.feedService.getFeed().then(data => {
      this.data = data.feed;
      loadingUI.dismiss();
    });
  }

  loadDetail(item) {
    this.navCtrl.push(JobDetailPage, item)
  }
}
