import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';

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

  constructor(public myService: SoundProviderService, public alertController: AlertController) {
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
    var sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/naro.wav'],
      volume:45
    });
    sound.play();
  }

  geku() {
    var sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/giku.wav'],
      volume:45
    });
    sound.play();
  }
  btnNa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/na.mp3']
    });
    sound.play();
  }
  btnTsa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/tsa.mp3']
    });
    sound.play();
  }
  btnCha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/cha.mp3']
    });
    sound.play();
  }
  btnTsha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/tsha.mp3']
    });
    sound.play();
  }
  btnZa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/za.mp3']
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
      if (this.score>=0){
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: '<img src="./assets/birds/image/blacked_n_crane.jpg">\n',
          subHeader: 'Subtitle',
          message: 'This is an alert message.',
          buttons: ['OK', 'Next']
        });

        await alert.present();

        const { role } = await alert.onDidDismiss();
        console.log('onDidDismiss resolved with role', role);
      }
    }
    else {
      console.log('False');
      this.myService.failureMusic();
      this.slides.slideTo(10, 500);
    }
  }
}
