import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import {
  FormGroup,
  FormControl

} from '@angular/forms';

@Component({
  selector: 'page-Settings',
  templateUrl: 'Settings.html',
})

export class Settings {
  langs;
  langForm;
  constructor(public alerCtrl: AlertController) {
  this.langForm = new FormGroup({
    "langs": new FormControl({ value: 'rust', disabled: false })
  }); }

  doSubmit(event) {
    console.log('Submitting form', this.langForm.value);
    event.preventDefault();

  }
  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Thank you',
      message: 'Details Saved',
      buttons: ['Ok']
    });
    alert.present()

  }
 
}
