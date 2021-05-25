import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-level-four',
  templateUrl: './level-four.page.html',
  styleUrls: ['./level-four.page.scss'],
})
export class LevelFourPage implements OnInit
{
  @ViewChild(IonSlides) slides: IonSlides;
  answer: any = {};
  score: any = 0;

  constructor(public myService: SoundProviderService, public alertController: AlertController) {
  }

  ngOnInit() {
  }
  btnRa() {
    var sound = new Howl({
      src: ['./assets/colors/sound/black.mp3']
    });
    sound.play();
  }
  ka() {
    let sound = new Howl({
      src: ['./assets/colors/sound/blue.mp3']
    });
    sound.play();
  }
  ear() {
    let sound = new Howl({
      src: ['./assets/body_parts/sound/ear.mp3']
    });
    sound.play();
  }
  eye() {
    let sound = new Howl({
      src: ['./assets/body_parts/sound/eye.mp3']
    });
    sound.play();
  }
  nose() {
    let sound = new Howl({
      src: ['./assets/body_parts/sound/nose.mp3']
    });
    sound.play();
  }
  mouth() {
    let sound = new Howl({
      src: ['./assets/body_parts/sound/mouth.mp3']
    });
    sound.play();
  }
  head() {
    let sound = new Howl({
      src: ['./assets/body_parts/sound/head.mp3']
    });
    sound.play();
  }
  ah() {
    let sound = new Howl({
      src: ['./assets/colors/sound/white.mp3']
    });
    sound.play();
  }

  nga() {
    let sound = new Howl({
      src: ['./assets/consonants/sound/nga.mp3']
    });
    sound.play();
  }

  naro() {
    var sound = new Howl({
      src: ['./assets/colors/sound/yellow.mp3']
    });
    sound.play();
  }

  geku() {
    var sound = new Howl({
      src: ['./assets/colors/sound/pink.mp3']
    });
    sound.play();
  }
  btnNa() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ta.mp3']
    });
    sound.play();
  }
  btnTsa() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/wednesday.mp3']
    });
    sound.play();
  }
  btnCha() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/friday.mp3']
    });
    sound.play();
  }
  btnTsha() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/sunday.mp3']
    });
    sound.play();
  }
  btnZa() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/thursday.mp3']
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
