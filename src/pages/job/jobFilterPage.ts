import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { JobFeedService } from '../../providers/job-feed-service'

@Component({
  selector: 'page-job-feed',
  templateUrl: 'jobFilterPage.html',
  providers: [JobFeedService]
})

export class JobFilterPage {

  data: any;
  cacheData: any;

  monthString: string; 
  dayString : string; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private jobService: JobFeedService,
    private loader: LoadingController) {

    var currentDate = this.getDateObject();
    this.monthString = currentDate.monthName;
    this.dayString = currentDate.day;

    let loadingUI = this.loader.create({ content: 'Please wait ...' });
    loadingUI.present();
    this.jobService.getFeed().then(data => {
      this.data = data.appointments;
      this.cacheData = JSON.parse(JSON.stringify(this.data));
      loadingUI.dismiss();
    });
  }

  getDateObject(): any {

    var DateObject = (function () {
      var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
      ];
      var date = function (str) {
        this.set(str);
      };
      date.prototype = {
        set: function (str) {
          var dateDef = str ? new Date(str) : new Date();
          this.day = dateDef.getDate();
          this.dayPadded = (this.day < 10) ? ("0" + this.day) : "" + this.day;
          this.month = dateDef.getMonth() + 1;
          this.monthPadded = (this.month < 10) ? ("0" + this.month) : "" + this.month;
          this.monthName = monthNames[this.month - 1];
          this.year = dateDef.getFullYear();
        }
      };
      return date;
    })();

    return new DateObject('');
  }

  ionViewDidLoad() {
  }

  getItems(ev: any) {
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.data = this.data.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else {
      this.data = this.cacheData.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
