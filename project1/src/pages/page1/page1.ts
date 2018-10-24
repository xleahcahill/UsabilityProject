import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';
import { Page4 } from '../page4/page4';
import { users } from '../users/users';
@Component({
    selector: 'page-page1',
    templateUrl: 'page1.html'
})
export class Page1 {
  public tap: number = 0;
  myItems = [
 
    {
      "Title": "Breakfast today.",
      "h2": "xleahcatherine",
      "ImgIcon": ".../../../www/images/jade.jpg",
      "Desc": "Pancakes today with strawberries & cream.",
      "Img2": ".../../../www/images/bbcgoodfood7.jpg"
      
    },
    {
      "Title": "Dinner party testing...",
      "h2": "Becpowell",
      "ImgIcon": ".../../../www/images/becpow.jpg",
      "Desc": "Testing out some recipes.",
      "Img2": ".../../../www/images/bbcgoodfood2.jpg"

    },
    {
      "Title": "Thin Crust Pizza",
      "h2": "Cathyworlock",
      "ImgIcon": ".../../../www/images/cathy.jpg",
      "Desc": "celebrating with #Pizza.",
      "Img2": ".../../../www/images/bbcgoodfood.jpg"

    }
  ];
  pushPage: any;
  pushPage2: any;
  constructor(public navCtrl: NavController, public platform: Platform,
    public actionsheetCtrl: ActionSheetController, public alertCtrl: AlertController) { 

   this.pushPage2 = users;
   this.pushPage = Page4;
 }
  tapEvent(e) {
    this.tap++
  }

    onLink(url: string) {
        window.open(url);
    }

    doPrompt() {
      let prompt = this.alertCtrl.create({
        title: 'Comment',
        message: "Leave a comment",
        inputs: [
          {
          //name: '',
            placeholder: '....'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Post',
            handler: data => {
              console.log('Saved clicked');
            }
          }
        ]
      });
      prompt.present();
    }


    openMenu() {
      let actionSheet = this.actionsheetCtrl.create({
        title: 'Save Posts',
        cssClass: 'action-sheets-basic-page',
        buttons: [
          {
            text: 'Share',
            icon: !this.platform.is('ios') ? 'share' : null,
            handler: () => {
              console.log('Share clicked');
            }
          },

          {
            text: 'Add to Collection',
            icon: !this.platform.is('ios') ? 'link' : null,
            handler: () => {
              console.log('Added');
            }
          },
          {
            text: 'Cancel',
            role: 'cancel', // will always sort to be on the bottom
            icon: !this.platform.is('ios') ? 'close' : null,
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present();
    }
}
