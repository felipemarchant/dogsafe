import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  isNewMatch: boolean = false;
  messages: any[] = [];
  typingMessage: string = '';
  showGiphy: boolean = false;
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isNewMatch = this.navParams.get('isNewMatch');
    this.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
    this.scrollBottom();
  }

  init() {
    // TODO: can be an API response
    if (!this.isNewMatch) {
      this.messages = [
        {
          isMe: false,
          avatar: 'assets/img/ben.png',
          type: 'text',// text || image
          body: 'Olá, seu bichinho é adorável.<br />O que acha?',
          timestamp: 'Oct 10, 2017 9:48am'
        },
        {
          isMe: true,
          type: 'text',// text || image
          body: 'O que?',
          timestamp: 'Oct 10, 2017 9:50am'
        },
        {
          isMe: false,
          avatar: 'assets/img/ben.png',
          type: 'text',// text || image
          body: 'Ter filhotinhos *--*',
          timestamp: 'Oct 10, 2017 9:52am'
        },
        {
          isMe: false,
          avatar: 'assets/img/ben.png',
          type: 'text',// text || image
          body: '?',
          timestamp: 'Oct 10, 2017 9:52am'
        }
      ];
    }
  }

  sendGif(imageUrl) {
    this.messages.push({
      isMe: true,
      type: 'image',
      body: imageUrl,
      timestamp: 'Oct 13, 2017 9:53am'
    });
    this.scrollBottom();

    this.fakeReply();
  }

  sendText() {
    this.messages.push({
      isMe: true,
      type: 'text',
      body: this.typingMessage,
      timestamp: 'Oct 13, 2017 9:55am'
    });
    this.typingMessage = '';
    this.scrollBottom();

    this.fakeReply();
  }

  fakeReply() {
    setTimeout(() => {
      this.messages.push({
        isMe: false,
        avatar: 'assets/img/ben.png',
        type: 'text',
        body: ';)',
        timestamp: 'Oct 10, 2017 9:55am'
      });

      this.scrollBottom();
    }, 500);
  }

  scrollBottom() {
    this.content.resize();
    this.content.scrollTo(0, this.content.scrollHeight, 350);
  }

  toggleGiphy() {
    this.showGiphy = !this.showGiphy;
    this.content.resize();
  }

}
