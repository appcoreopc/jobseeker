import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProfileService } from '../../providers/profile-service';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [ProfileService]
})
export class ProfilePage {

  public data: any;
  image: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private profileService: ProfileService, private loader: LoadingController) {
    
    let loadingUI = this.loader.create({ content: 'Please wait ....' });
    loadingUI.present();
    this.profileService.getFeed().then(data => {
      this.data = data;
      loadingUI.dismiss();
    });
  }

  ionViewDidLoad() {
  }
}
