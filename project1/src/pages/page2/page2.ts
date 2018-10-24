import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { Page6 } from '../page6/page6'; 
import { Page7 } from '../page7/page7';
import { Page8 } from '../page8/page8';
import { users } from '../users/users';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
  })

export class Page2 {
  food: string = "";
  isAndroid: boolean = false;
  pushPage: any;
  pushPage2: any;
  pushPage3: any;
  pushPage4: any;
  public tap: number = 0
  myList = [{
    "list": "Avocado and tomato bagel",
    "icon": "nutrition"
  },
  {
    "list": "Omlette with a twist",
    "icon": "restaurant"
  },
  {
    "list": "Sweet homemade ice cream",
    "icon": "ice-cream"
  },
  {
    "list": "Authentic Italian pizza",
    "icon": "pizza"
  }
  ];
  myItemPage2s = [

    //{
    //  "Title": "Healthy Breakfast",
    //  "imgbackground": ".../../../www/images/image5.jpg",
    //},
    {
      "Title": "Smoothies",
      "imgbackground": ".../../../www/images/cat3.jpg"
    }
    //},
    //{
    //  "Title": "Desserts",
    //  "imgbackground": ".../../../www/images/cat2.jpg"
    //}
  ];
  myItem2Page2 = [

    {
      "img2": ".../../../www/images/kiwi-smoothie.jpg",
      "name": "JasonMark",
      "caption": " Kiwi, mango and pineapple fruit smoothie",
    },
  ];
  myItem3Page2 = [

    {
      "userimg": ".../../../www/images/leah.jpg",
      "username": "KateMarie",
    },
  ];
  //items: Array<string>;

  //ngOnInit() {
  //  this.setItems();
  //}

  //setItems() {
  //  this.items = ['Frying pan pizza', 'Banana Bread', 'Red berry fruit compote',
  //    'Pancakes and Cream',
  //    'Dinner party platter',
  //    'Apple Pie',
  //    'Green Kiwi Smoothie',
  //    'Tuscan bean soup',
  //    'Chinese style rice and curry',
  //    'Strawberry shortcake',
  //    'Omlette with a twist',
  //    'Sweet homemade ice cream',
  //    'Wholemeal sourdough loaf',
  //    'Tear and share feta flatbreads',
  //    'Sticky Chocolate cake',
  //    'Lemon drizzle slices',
  //    'Mexican bean soup with guacamole',
  //    'Bean & feta spread with Greek salad salsa & oatcakes',
  //    'Wild salmon veggie bowl',
  //    'Avocado and tomato bagel',
  //    '3 bean and vegetable soup'
  //  ]
  //}

  //filterItems(ev: any) {
  //  this.setItems();
  //  let val = ev.target.value;

  //  if (val && val.trim() !== '') {
  //    this.items = this.items.filter(function (item) {
  //      return item;
  //    });
  //  }
  //}
  items: any;
  constructor(public alerCtrl: AlertController, platform: Platform) {
    this.isAndroid = platform.is('android');
    this.pushPage = Page6;
    this.pushPage2 = Page7;
    this.pushPage3 = Page8;
    this.pushPage4 = users;
    this.initializeItems();
  }
 

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Saved',
      message: 'to your collections',
      buttons: ['Ok']
    });
    alert.present()

  }
  tapEvent(e) {
    this.tap++
  }
  presentConfirm() {
    let alert = this.alerCtrl.create({
      title: '',
      message: 'Do you want to follow this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Follow clicked');
          }
        }
      ]
    });
    alert.present();
  }
  initializeItems() {
    this.items = ['Frying pan pizza', 'Banana Bread', 'Red berry fruit compote',
      'Pancakes and Cream',
      'Dinner party platter',
      'Apple Pie',
      'Green Kiwi Smoothie',
      'Tuscan bean soup',
      'Chinese style rice and curry',
      'Strawberry shortcake',
      'Omlette with a twist',
      'Sweet homemade ice cream',
      'Wholemeal sourdough loaf',
      'Tear and share feta flatbreads',
      'Sticky Chocolate cake',
      'Lemon drizzle slices',
      'Mexican bean soup with guacamole',
      'Bean & feta spread with Greek salad salsa & oatcakes',
      'Wild salmon veggie bowl',
      'Avocado and tomato bagel',
      '3 bean and vegetable soup'
    ]
  
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
