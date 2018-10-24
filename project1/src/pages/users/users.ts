import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http, Response } from '@angular/http';
import { AlertController, LoadingController, Platform } from 'ionic-angular';
import { usersp } from '../../providers/userp';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
  providers: [usersp]

})
export class users {
  public list: any;
 


  constructor(
    public nav: NavController,
    public platform: Platform,
    public usersp: usersp,
    public alerCtrl: AlertController
  ) {
    this.loadPeople();
  }

  loadPeople() {
    this.usersp.load()
      .then(data1 => {
        this.list = data1;
      });
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

  }
 




  
