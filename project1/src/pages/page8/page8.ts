import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page8',
  templateUrl: 'page8.html'
})
export class Page8 {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  slides = [
    {
      title: "Ingredients",
      title2: "Brilliant Bannana Loaf",
      description: "- 140g butter, softened, plus extra for the tin",
      description2: "- 140g caster sugar",
      description3: "- 2 large eggs, beaten",
      descritpion4: "- 140g self- raising flour",
    //  description5: "- 1 tsp baking powder.",
      image: "../../../www/images/stepone3.jpg"
    },
    {
      title: "Step One:",
      description: "- Heat oven to 180C/160C fan/gas 4.",
      description2: "- Butter a 2lb loaf tin and line the base and sides with baking parchment. Cream the butter and sugar until light and fluffy",
      description3: "Slowly add the eggs with a little flour.Fold in the remaining flour, baking powder and bananas.</br></p > ",
      image: "../../../www/images/steptwo3.jpg"
    },
    {
      title: "Step Two:",
      description: "- Pour into the tin and bake for about 30 mins until a skewer comes out clean.",
      description2: "- Cool in the tin for 10 mins, then remove to a wire rack.</p>",
      image: "../../../www/images/stepthree3.jpg"
    },
    {
      title: "Step Three:",
      description: "- Mix the icing sugar with 2-3 tsp water to make a runny icing.",
      description2: "Drizzle the icing across the top of the cake and decorate with banana chips </p > ",
      image: "../../../www/images/step333.jpg"
    }
  ];
}


