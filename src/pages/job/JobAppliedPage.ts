import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JobFeedService } from "../../providers/job-feed-service"

@Component({
  selector: 'page-page1',
  templateUrl: 'jobAppliedPage.html'
})

export class JobAppliedPage {

  data : any;

  constructor(public navCtrl: NavController, private feedService: JobFeedService) {
     feedService.getFeed().then(data => {
      this.data = data;
    });
  }

  getItems(ev) {
  }
}
