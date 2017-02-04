import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingService } from '../../providers/setting-service'


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers: [SettingService]
})
export class SettingsPage {
  data: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private settingService: SettingService) {
    this.settingService.getFeed().then(data => {
      console.log(data);
      this.data = data;
    });
  }
}
