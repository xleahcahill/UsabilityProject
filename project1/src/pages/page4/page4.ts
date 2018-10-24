import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page5 } from '../page5/page5';
import { Settings} from '../Settings/Settings'; 
@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html',

})
export class Page4 {
    params: Object;
    pushPage: any;
    pushPage2: any;
    constructor(public navCtrl: NavController){
      this.pushPage = Page5;
      this.pushPage2 = Settings;
    }
  }
