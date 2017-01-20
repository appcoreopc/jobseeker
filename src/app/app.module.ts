import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JobPage } from '../pages/Job/JobPage';
import { Page2 } from '../pages/page2/page2';
import { FeedPage } from '../pages/Job/FeedPage';

@NgModule({
  declarations: [
    MyApp,
    JobPage, FeedPage,
    Page2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JobPage, FeedPage,  
    Page2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
