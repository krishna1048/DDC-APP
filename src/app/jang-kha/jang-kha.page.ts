import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-jang-kha',
  templateUrl: './jang-kha.page.html',
  styleUrls: ['./jang-kha.page.scss'],
})
export class JangKhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  leykor() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/0.mp3']
    });
    sound.play();
  }

  chi() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/1.mp3']
    });
    sound.play();
  }

  nge() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/2.mp3']
    });
    sound.play();
  }

  suum() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/3.mp3']
    });
    sound.play();
  }

  nga() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/5.mp3']
    });
    sound.play();
  }

  dhu() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/6.mp3']
    });
    sound.play();
  }

  dhin() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/7.mp3']
    });
    sound.play();
  }

  gay() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/8.mp3']
    });
    sound.play();
  }

  gu() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/9.mp3']
    });
    sound.play();
  }

  zhi() {
    var sound = new Howl({
      src: ['./assets/numbers/sound/4.mp3']
    });
    sound.play();
  }
}
