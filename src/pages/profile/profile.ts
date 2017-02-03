import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProfileService } from '../../providers/profile-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileService]
})
export class ProfilePage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private profileService: ProfileService) {
    this.profileService.getFeed().then(data => {
     this.data = data;
    });
  }

  ionViewDidLoad() {
  }
}
