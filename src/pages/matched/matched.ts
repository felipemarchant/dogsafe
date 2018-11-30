import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MatchedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matched',
  templateUrl: 'matched.html',
})
export class MatchedPage {

  public match_image: string = 'assets/img/icon.png';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    let nav_match_image = this.navParams.get('match_image');
    if (nav_match_image)
    {
      this.match_image = nav_match_image;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchedPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
