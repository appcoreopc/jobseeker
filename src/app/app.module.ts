import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JobPage } from '../pages/Job/JobPage';
import { Page2 } from '../pages/page2/page2';
import { FeedPage } from '../pages/Job/FeedPage';
import { JobAppliedPage } from '../pages/Job/JobAppliedPage';
import { JobDetailPage } from '../pages/Job/JobDetailPage';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '2b1579f7'
  },
  'push': {
    'sender_id': '242381528282',
    'pluginConfig': {
      'ios': {
        'badge': true,
        'sound': true
      },
      'android': {
        'sound': true,
        'iconColor': '#343434'
      }
    }
  }
};

@NgModule({
  declarations: [
    MyApp,
    JobPage, FeedPage, JobAppliedPage, JobDetailPage, Page2, ProfilePage, SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JobPage, FeedPage, JobAppliedPage, JobDetailPage,
    Page2, ProfilePage, SettingsPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
