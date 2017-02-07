import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { JobPage } from '../pages/Job/JobPage';
import { Page2 } from '../pages/page2/page2';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { Push, PushToken } from '@ionic/cloud-angular';
import { NotificationService } from '../providers/notificationService';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = JobPage;

  pages: Array<{title: string, component: any, icon : string}>;

  constructor(public platform: Platform, private push : Push) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: JobPage, icon : 'md-home' },
      { title: 'My Profile', component: ProfilePage, icon : 'md-person' },
      { title: 'Messages', component: JobPage, icon : 'md-mail' },
      { title: 'Settings', component: SettingsPage, icon : 'md-options' }
    ];  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();

      new NotificationService(this.platform, this.push).registerPushNotification();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
