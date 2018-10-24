import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { recipes } from '../providers/recipes';
import { usersp } from '../providers/userp';
//import { Camera } from '@ionic-native/camera';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { Page3 } from '../pages/page3/page3';
import { Page4 } from '../pages/page4/page4';
import { Page5 } from '../pages/page5/page5';
import { Page6 } from '../pages/page6/page6';
import { Page7 } from '../pages/page7/page7';
import { Page8 } from '../pages/page8/page8';
import { search } from '../pages/search/search';
import { Settings } from '../pages/Settings/Settings';
import { users } from '../pages/users/users';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    search,
    Settings,
  users
   
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    Page8,
    search,
    Settings,
    users
  ],
 
  providers: [recipes, usersp, { provide: ErrorHandler, useClass: IonicErrorHandler }]

})
export class AppModule {}
