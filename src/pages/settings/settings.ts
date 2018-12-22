import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  distance: number = 80;
  idade: number = 5;
  ageRange: object = {lower: 18, upper: 30};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

}
