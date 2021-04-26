import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
})
export class LevelOnePage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  answer: any = {};
  score: any = 0;

  constructor(public myService: SoundProviderService) {
  }

  ngOnInit() {
  }
  btnRa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ra.mp3']
    });
    sound.play();
  }
  ka() {
    let sound = new Howl({
      src: ['./assets/consonants/sound/ka.mp3'],
      volume:7
    });
    sound.play();
  }

  ah() {
    let sound = new Howl({
      src: ['./assets/consonants/sound/ah.mp3']
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
    let sound = new Howl({
      src: ['./assets/yang-zhi/Naro.mp3']
    });
    sound.play();
  }

  geku() {
    let sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/geku.mp3']
    });
    sound.play();
  }
  btnNa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/na.mp3']
    });
    sound.play();
  }

  goToSlide() {
    // tslint:disable-next-line:triple-equals
    if (String(this.answer) == 'ཀ') {
      console.log(String(this.answer));
      // tslint:disable-next-line:no-unused-expression
      this.score = this.score + 1;
      this.myService.successMusic();
      console.log(String(this.score));
      this.slides.slideTo(1, 500);
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
}
