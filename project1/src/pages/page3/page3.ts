import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from "ionic-native";

@Component({
  selector: 'page-page3',
 templateUrl: 'page3.html'
 
})
export class Page3 {

  public base64Image: string;

  constructor(private navController: NavController, public alerCtrl: AlertController) {
    this.base64Image = "https://placehold.it/300x300";
  }

  public takePicture() {
    Camera.getPicture({
      quality: 75,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: false
    }).then(imageData => {
      this.base64Image = "data:image/jpeg;base64," + imageData;
    }, error => {
      console.log("ERROR -> " + JSON.stringify(error));
    });
  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Thank you',
      message: 'Recipe Posted!',
      buttons: ['Ok']
    });
    alert.present()

  }
}
