import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { ChatPage } from '../chat/chat';

@IonicPage()
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html',
})
export class MessagingPage {
  segmentView = '0';
  feedItems: any[] = [
    { url: 'assets/img/dog_profile_card/bigode.jpg', price: 'R$834,00', nome: "Bigode"},
    { url: 'assets/img/dog_profile_card/costela.jpg', price: 'R$652,00', nome: "Costela"},
    { url: 'assets/img/dog_profile_card/floquinho.jpg', price: 'ADOTAR', nome: "Floquinho"},
    { url: 'assets/img/dog_profile_card/pelanca.png', price: 'R$995,00', nome: "Pelanca"},
    { url: 'assets/img/dog_profile_card/tufinho.jpg', price: 'R$586,00', nome: "Tufinho"},
    { url: 'assets/img/dog_profile_card/sujeirinha.jpg', price: 'ADOTAR', nome: "Sujeirinha"},
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    let nav_tab_index = this.navParams.get('tabs_index');
    if (nav_tab_index) {
      this.segmentView = nav_tab_index;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingPage');
  }

  goToChat(isNewMatch = false) {
    this.navCtrl.push(ChatPage, {isNewMatch: isNewMatch});
  }

  goToExplore() {
    this.navCtrl.push(ExplorePage, {}, {
      direction: 'back'
    });
  }

}
