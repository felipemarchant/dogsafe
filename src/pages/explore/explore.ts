/*
  Reference: [How To Build Ionic Tinder Cards Using Angular 2 Swing](https://devdactic.com/ionic-2-tinder-cards)
*/

import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import 'rxjs/Rx';
import * as _ from 'lodash';

import { Direction, SwingStackComponent, StackConfig, SwingCardComponent } from 'angular2-swing';
import { MatchedPage } from '../matched/matched';
import { MePage } from '../me/me';
import { MessagingPage } from '../messaging/messaging';
import { ProfilePage } from '../profile/profile';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html'
})
export class ExplorePage {
  @ViewChild('cardStack') swingStack: SwingStackComponent;
  @ViewChildren('card') swingCards: QueryList<SwingCardComponent>;

  cards: any[];
  stackConfig: StackConfig;
  users: any[];
  isLoading: boolean = true;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private screenOrientation: ScreenOrientation) {
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [
        Direction.LEFT,
        Direction.RIGHT
      ],
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth/2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 800;
      }
    };
  }

  ngAfterViewInit() {
    this.cards = [];
    this.users = [
      {
        id: 1,
        name: 'Bigode',
        age: 29,
        job_title: 'UX/UI lover',
        profile_image_url: 'assets/img/dog_profile_card/bigode.jpg',
        //Custom Data
        breed:'Maltes',
        locale:'Guarulhos, SP'
      },
      {
        id: 2,
        name: 'Floquinho',
        age: 39,
        job_title: 'Ionic Team is awesome',
        profile_image_url: 'assets/img/dog_profile_card/floquinho.jpg',
        //Custom Data
        breed: 'Poodle',
        locale: 'Campinas, SP'
      },
      {
        id: 3,
        name: 'Pelânca',
        age: 30,
        job_title: 'Another awesome Ionic guy',
        profile_image_url: 'assets/img/dog_profile_card/pelanca.png',
        //Custom Data
        breed: 'Pug',
        locale: 'Alphaville, SP'
      },
      {
        id: 4,
        name: 'Tufinho',
        age: 35,
        job_title: 'Game character assasin',
        profile_image_url: 'assets/img/dog_profile_card/tufinho.jpg',
        //Custom Data
        breed: 'Beagle',
        locale: 'Guarulhos, SP'
      },
      {
        id: 5,
        name: 'Costela',
        age: 31,
        job_title: 'All guys are awesome',
        profile_image_url: 'assets/img/dog_profile_card/costela.jpg',
        //Custom Data
        breed: 'Dachshund',
        locale: 'Outro Preto, MG'
      },
      {
        id: 6,
        name: 'Sujeirinha',
        age: 41,
        job_title: 'Ionic again',
        profile_image_url: 'assets/img/dog_profile_card/sujeirinha.jpg',
        //Custom Data
        breed: 'Sem raça definida',
        locale: 'Santarém, PA'
      }
    ]

    this.addNewCard();
    this.addNewCard();
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  // Called whenever we drag an element
  onItemMove(element, x, y, r) {
    let nope = element.querySelector('.stamp-nope');
    let like = element.querySelector('.stamp-like');
    let caculatedValue = Math.min(100, Math.abs(x) - 20) / 100;// 0 - 1

    if (x < 0 && Math.abs(x) > 20) {
      nope.style.opacity = caculatedValue;
    } else {
      like.style.opacity = caculatedValue;
    }

    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;

    // Zoom effect for the cards underneath
    let cardBehind = this.swingCards.toArray()[1].getNativeElement();
    cardBehind.style['transform'] = `scale(${0.94 + 0.06 * caculatedValue}, ${0.94 + 0.06 * caculatedValue})`;
  }

  // Add new cards to our array
  addNewCard() {
    let difference = _.difference(this.users, this.cards);
    let randomIndex = Math.floor(Math.random() * (difference.length));

    this.cards.push(difference[randomIndex]);

    console.info('CURRENT STACK:', this.cards.map(c => c.name));
  }

  disliked() {
    this.addNewCard();
    let removedCard = this.cards.shift();

    console.log('You disliked: ' + removedCard.name);
  }

  liked() {
    this.addNewCard();
    let removedCard = this.cards.shift();
    this.checkMatching(removedCard);

    console.log('You liked: ' + removedCard.name);
  }

  checkMatching(card) {
    let randomIndex = Math.floor(Math.random() * 2);
    let image = card.profile_image_url;
    let name = card.profile_image_url;
    if(randomIndex && name != 'Costela')
    {
      let modal = this.modalCtrl.create(MatchedPage, { match_image: image });
      modal.present();
    }
  }

  goToMe() {
    this.navCtrl.push(MePage, {}, {
      direction: 'back'
    });
  }

  goToMessaging() {
    this.navCtrl.push(MessagingPage, {}, {
      direction: 'forward'
    });
  }

  openProfile(isMe) {
    let modal = this.modalCtrl.create(ProfilePage, {isMe: isMe});
    modal.present();
  }

  getMoreCards() {
    if (this.cards.length == 0) {
      this.addNewCard();
    }
  }

  trackByFn(index, item) {
    return item.id;
  }
}
