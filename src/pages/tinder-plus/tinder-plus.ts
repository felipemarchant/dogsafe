import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the TinderPlusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tinder-plus',
  templateUrl: 'tinder-plus.html',
})
export class TinderPlusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TinderPlusPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
