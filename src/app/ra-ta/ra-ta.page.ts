import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-ra-ta',
  templateUrl: './ra-ta.page.html',
  styleUrls: ['./ra-ta.page.scss'],
})
export class RaTaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ka.mp3']
    });
    sound.play();
  }

  kha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/kha.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ga.mp3']
    });
    sound.play();
  }

  ta() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ta.mp3']
    });
    sound.play();
  }

  tha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/tha.mp3']
    });
    sound.play();
  }

  da() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/da.mp3']
    });
    sound.play();
  }

  na() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/na.mp3']
    });
    sound.play();
  }

  pa() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/pa.mp3']
    });
    sound.play();
  }

  pha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/pha.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ba.mp3']
    });
    sound.play();
  }

  ma() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ma.mp3']
    });
    sound.play();
  }
  sa() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/sa.mp3']
    });
    sound.play();
  }

  ha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag/ha.mp3']
    });
    sound.play();
  }

  shah() {
    var sound = new Howl({
      src: ['./assets/Tenselo/missing sound/sha1.wav'],
      volume:30
    });
    sound.play();
  }
}
