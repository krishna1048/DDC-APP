import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-la-go',
  templateUrl: './la-go.page.html',
  styleUrls: ['./la-go.page.scss'],
})
export class LaGoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ka.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ga.mp3']
    });
    sound.play();
  }

  nga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/nga.mp3']
    });
    sound.play();
  }

  cha() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ca.mp3']
    });
    sound.play();
  }

  ja() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ja.mp3']
    });
    sound.play();
  }

  ta() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ta.mp3']
    });
    sound.play();
  }

  da() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/da.mp3']
    });
    sound.play();
  }

  pa() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/pa.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ba.mp3']
    });
    sound.play();
  }

  lha() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go/ha.mp3']
    });
    sound.play();
  }
}
