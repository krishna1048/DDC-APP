import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-sa-go',
  templateUrl: './sa-go.page.html',
  styleUrls: ['./sa-go.page.scss'],
})
export class SaGoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ka.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ga.mp3']
    });
    sound.play();
  }

  nga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/nga.mp3']
    });
    sound.play();
  }

  nya() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/nya.mp3']
    });
    sound.play();
  }

  ta() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ta.mp3']
    });
    sound.play();
  }

  da() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/da.mp3']
    });
    sound.play();
  }

  na() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/na.mp3']
    });
    sound.play();
  }

  pa() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/pa.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ba.mp3']
    });
    sound.play();
  }

  ma() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/ma.mp3']
    });
    sound.play();
  }
  tsa() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go/tsa.mp3']
    });
    sound.play();
  }
}
