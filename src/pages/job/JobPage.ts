import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedPage } from './FeedPage'
import { JobAppliedPage } from './JobAppliedPage'

@Component({
  selector: 'page-page1',
  templateUrl: 'jobPage.html', 
  
})
export class JobPage {

  feedPage : any; 
  jobAppliedPage : any;

  constructor(public navCtrl: NavController) {
    this.feedPage = FeedPage;  
    this.jobAppliedPage = JobAppliedPage;
  }
}
