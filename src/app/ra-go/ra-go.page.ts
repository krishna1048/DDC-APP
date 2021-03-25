import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-ra-go',
  templateUrl: './ra-go.page.html',
  styleUrls: ['./ra-go.page.scss'],
})
export class RaGoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ka.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ga.mp3']
    });
    sound.play();
  }

  nga() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/nga.mp3']
    });
    sound.play();
  }

  ja() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ja.mp3']
    });
    sound.play();
  }

  nya() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/nya.mp3']
    });
    sound.play();
  }

  ta() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ta.mp3']
    });
    sound.play();
  }

  da() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/da.mp3']
    });
    sound.play();
  }

  na() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/na.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ba.mp3']
    });
    sound.play();
  }

  ma() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/ma.mp3']
    });
    sound.play();
  }

  tsa() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/tsa.mp3']
    });
    sound.play();
  }

  dza() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go/dza.mp3']
    });
    sound.play();
  }

}
