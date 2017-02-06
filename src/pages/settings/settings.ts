import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SettingService } from '../../providers/setting-service'


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [SettingService]
})
export class SettingsPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settingService: SettingService,
    private loader: LoadingController) {
    // this.settingService.getSettings().then(data => {
    //     this.data = data;
    //   }); 
    let loadingUI = this.loader.create({ content: 'Please wait ....' });
    loadingUI.present();
    this.settingService.getSettings().then(data => {
      this.data = data;
      loadingUI.dismiss();
    });
  }
}
