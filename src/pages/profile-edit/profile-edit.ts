import { Component } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
  REMEMBER: Install ImagePicker plugin first (https://ionicframework.com/docs/native/image-picker/)
 */

@IonicPage()
@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profile-edit.html',
})
export class ProfileEditPage {
  profileImages: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public imagePicker: ImagePicker,
    public app: App,
    private screenOrientation: ScreenOrientation ) {
      this.profileImages = [
        'assets/img/dog_perfil.jpg',
        'assets/img/dog_perfil.jpg',
        'assets/img/dog_perfil.jpg',
        'assets/img/dog_perfil.jpg',
        'assets/img/dog_perfil.jpg',
        ''
      ]
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileEditPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  openPhotoPicker(index) {
    this.imagePicker.getPictures({ maximumImagesCount: 1 })
      .then((results) => {
        this.profileImages[index] = results[0];
      }, (err) => { });
  }

  removeImage(index) {
    this.profileImages[index] = '';
  }

}
