import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import { ExplorePage } from '../explore/explore';
import { ProfilePage } from '../profile/profile';
import { ProfileEditPage } from '../profile-edit/profile-edit';
import { SettingsPage } from '../settings/settings';
import { TinderPlusPage } from '../tinder-plus/tinder-plus';
import { VoucherPage } from '../voucher/voucher';
import { MessagingPage } from '../messaging/messaging';
import { ServicosPage } from '../servicos/servicos';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@IonicPage()
@Component({
  selector: 'page-me',
  templateUrl: 'me.html',
})
export class MePage {
  @ViewChild(Slides) slides: Slides;
  currentSlideIndex: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MePage');
    // this.openProfileEdit();// TODO
  }

  slideChanged() {
    this.currentSlideIndex = this.slides.getActiveIndex();
  }

  goToExplore() {
    this.navCtrl.push(ExplorePage, {}, {
      direction: 'forward'
    });
  }

  openProfile() {
    let modal = this.modalCtrl.create(ProfilePage);
    modal.present();
  }

  openProfileEdit() {
    let modal = this.modalCtrl.create(ProfileEditPage);
    modal.present();
  }

  openSettings() {
    let modal = this.modalCtrl.create(SettingsPage);
    modal.present();
  }

  openTinderPlus() {
    let modal = this.modalCtrl.create(TinderPlusPage);
    modal.present();
  }
  openVoucher() {
    let modal = this.modalCtrl.create(VoucherPage);
    modal.present();
  }
  openDogNews()
  {
    this.navCtrl.push(MessagingPage, { tabs_index: '1' }, {
      direction: 'forward'
    });
  }
  openServico() {
    this.navCtrl.push(ServicosPage, {}, {
      direction: 'forward'
    });
  }
}
