import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { IonSlides } from '@ionic/angular';


@Component({
  selector: 'app-level-six',
  templateUrl: './level-six.page.html',
  styleUrls: ['./level-six.page.scss'],
})
export class LevelSixPage implements OnInit
{
  @ViewChild(IonSlides) slides: IonSlides;
  answer: any = {};
  score: any = 0;

  constructor(public myService: SoundProviderService, public alertController: AlertController) {
  }

  ngOnInit() {
  }
  monkey() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/monkey.mp3']
    });
    sound.play();
  }
  tiger() {
    let sound = new Howl({
      src: ['./assets/w_animals/sound/tiger.mp3']
    });
    sound.play();
  }
  ear() {
    let sound = new Howl({
      src: ['./assets/d_animals/sound/cow.mp3']
    });
    sound.play();
  }
  eye() {
    let sound = new Howl({
      src: ['./assets/d_animals/sound/dog.mp3']
    });
    sound.play();
  }
  nose() {
    let sound = new Howl({
      src: ['./assets/d_animals/sound/cat.mp3']
    });
    sound.play();
  }
  mouth() {
    let sound = new Howl({
      src: ['./assets/d_animals/sound/sheep.mp3']
    });
    sound.play();
  }
  head() {
    let sound = new Howl({
      src: ['./assets/d_animals/sound/yak.mp3']
    });
    sound.play();
  }
  bear() {
    let sound = new Howl({
      src: ['./assets/w_animals/sound/bear.mp3']
    });
    sound.play();
  }

  deer() {
    let sound = new Howl({
      src: ['./assets/w_animals/sound/deer.mp3']
    });
    sound.play();
  }

  fox() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/fox.mp3']
    });
    sound.play();
  }
  elephant() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/elephant.mp3']
    });
    sound.play();
  }
  goToSlide() {
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
    if (String(this.answer) == '???') {
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
