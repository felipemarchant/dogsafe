import { Component, Input } from '@angular/core';

/**
 * Generated class for the DemoAvatarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'demo-avatar',
  templateUrl: 'demo-avatar.html'
})
export class DemoAvatarComponent {
  @Input() sizeClass: string = 'thumb';// Can be 'thumb-xs'-'thumb-sm'-'thumb-md'-'thumb-lg'

  images: [any] = [
    'bigode.jpg',
    'costela.jpg',
    'floquinho.jpg',
    'pelanca.png',
    'sujeirinha.jpg',
    'tufinho.jpg',
  ];
  imageUrl: string;

  constructor() {
    let randomIndex = Math.floor(Math.random() * (this.images.length - 1));
    this.imageUrl = `assets/img/dog_profile_card/${this.images[randomIndex]}`;

  }
}
