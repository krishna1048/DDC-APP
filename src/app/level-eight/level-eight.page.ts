import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-level-eight',
  templateUrl: './level-eight.page.html',
  styleUrls: ['./level-eight.page.scss'],
})
export class LevelEightPage implements OnInit
{
  @ViewChild(IonSlides) slides: IonSlides;
  answer: any = {};
  score: any = 0;

  constructor(public myService: SoundProviderService, public alertController: AlertController) {
  }

  ngOnInit() {
  }
  lotus() {
    let sound = new Howl({
      src: ['./assets/flowers/sound/lotus.mp3']
    });
    sound.play();
  }
  blue() {
    let sound = new Howl({
      src: ['./assets/flowers/sound/blue_poppy.mp3']
    });
    sound.play();
  }
  sun() {
    let sound = new Howl({
      src: ['./assets/flowers/sound/sun_flower.mp3']
    });
    sound.play();
  }
  rose() {
    let sound = new Howl({
      src: ['./assets/flowers/sound/rose.mp3']
    });
    sound.play();
  }
  merigold() {
    let sound = new Howl({
      src: ['./assets/flowers/sound/merigold.mp3']
    });
    sound.play();
  }
  cup() {
    let sound = new Howl({
      src: ['./assets/utensils/sound/cup.mp3']
    });
    sound.play();
  }
  container() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/container.mp3']
    });
    sound.play();
  }
  knife() {
    let sound = new Howl({
      src: ['./assets/utensils/sound/knife.mp3']
    });
    sound.play();
  }
  oven() {
    let sound = new Howl({
      src: ['./assets/utensils/sound/ovan.mp3']
    });
    sound.play();
  }

  plate() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/plate.mp3']
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
