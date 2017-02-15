import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { JobFeedService } from "../../providers/job-feed-service"

@Component({
  selector: 'page-page1',
  templateUrl: 'jobAppliedPage.html', 
  providers: [JobFeedService]
})

export class JobAppliedPage {
  data: any;

  constructor(public navCtrl: NavController, private feedService: JobFeedService, private loader: LoadingController) {

    let loadingUI = this.loader.create({ content: 'Please wait ....' });
    loadingUI.present();
    this.feedService.getFeed().then(data => {
      
      this.data = data.applied;
      loadingUI.dismiss();
    });
  }
}
