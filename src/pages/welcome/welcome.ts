import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  introSlides: any;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App) {
    this.introSlides = [
      {
        title: 'Encontre o par perfeito para seu Bichinho',
        image: 'assets/img/intro/dog_safe_logo_slider.png'
      },
      /*{
        title: 'Você no controle do seu Pet:<br /> Vacinas, banho, tosa, etc.',
        image: 'assets/img/intro/intro_2.png'
      },
      {
        title: 'Faça doações ou adote <br /> o seu!',
        image: 'assets/img/intro/intro_3.png'
      },
      {
        title: 'Converse a vontade com<br/ >os donoscom nosso messager',
        image: 'assets/img/intro/intro_4.png'
      }*/
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  goToSwipe() {
    this.app.getRootNav().setRoot(ExplorePage)
      .then(() => {
        console.log('Welcome to your ExplorePage!');
      })
  }

}
