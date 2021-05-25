import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-level-ten',
  templateUrl: './level-ten.page.html',
  styleUrls: ['./level-ten.page.scss'],
})
export class LevelTenPage implements OnInit
{
  @ViewChild(IonSlides) slides: IonSlides;
  answer: any = {};
  score: any = 0;

  constructor(public myService: SoundProviderService, public alertController: AlertController) {
  }

  ngOnInit() {
  }
  cloth() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/cloth.mp3']
    });
    sound.play();
  }
  ear() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/ear.mp3']
    });
    sound.play();
  }
  head() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/head.mp3']
    });
    sound.play();
  }
  food() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/food.mp3']
    });
    sound.play();
  }
  hand() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/hand.mp3']
    });
    sound.play();
  }
  sit() {
    let sound = new Howl({
      src: ['./assets/honorific/sound/sit.mp3']
    });
    sound.play();
  }
  leg() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/leg.mp3']
    });
    sound.play();
  }
  greeting() {
    let sound = new Howl({
      src: ['./assets/greetings/greeting.mp3']
    });
    sound.play();
  }
  thankyou() {
    let sound = new Howl({
      src: ['./assets/greetings/thankyou.mp3']
    });
    sound.play();
  }

  welcome() {
    var sound = new Howl({
      src: ['./assets/greetings/welcome.mp3']
    });
    sound.play();
  }
  wish() {
    var sound = new Howl({
      src: ['./assets/greetings/wish.mp3']
    });
    sound.play();
  }
  goToSlide() {
    if (String(this.answer) == 'ཀ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(1, 500);


      // this.slides.slideTo(1, 500);
    } else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(1, 500);
    }
  }

  goToSlide1() {
    if (String(this.answer) == 'ཨ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(2, 500);
    } else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(2, 500);
    }
  }

  goToSlide2() {
    if (String(this.answer) == 'ོ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(3, 500);
    } else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(3, 500);
    }

  }

  goToSlide3() {
    if (String(this.answer) == 'ི') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(4, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(4, 500);
    }
  }

  goToSlide4() {
    if (String(this.answer) == 'ར') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(5, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(5, 500);
    }
  }

  goToSlide5() {
    if (String(this.answer) == 'ན') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(6, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(6, 500);
    }
  }

  goToSlide6() {
    if (String(this.answer) == 'ས') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(7, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(7, 500);
    }
  }
  goToSlide7() {
    if (String(this.answer) == 'ཆ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(8, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(8, 500);
    }
  }
  goToSlide8() {
    if (String(this.answer) == 'ཚ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(9, 500);
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(9, 500);
    }
  }
  async goToSlide9() {
    if (String(this.answer) == 'ཟ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(10, 500);
    }
  }
}
