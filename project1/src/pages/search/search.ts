import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { recipes } from '../../providers/recipes';
import { Http, Response } from '@angular/http';
import { AlertController, LoadingController, Platform, Keyboard } from 'ionic-angular';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [recipes]

})
export class search {
  public list: any;
  public items: any;
  //searchInput: string = '';

  constructor(
    public nav: NavController,
    public platform: Platform,
    public recipes: recipes,
    public alerCtrl: AlertController
  ) {
    this.loadFood();
  }

  loadFood() {
    this.recipes.load()
      .then(data => {
        this.list = data;
      });
  }

  initializeItems() {
    this.items = this.list;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.ingredients.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}





  
