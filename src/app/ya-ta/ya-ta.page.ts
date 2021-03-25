import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-ya-ta',
  templateUrl: './ya-ta.page.html',
  styleUrls: ['./ya-ta.page.scss'],
})
export class YaTaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/ka.mp3']
    });
    sound.play();
  }

  kha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/kha.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/ga.mp3']
    });
    sound.play();
  }

  pa() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/pa.mp3']
    });
    sound.play();
  }

  pha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/pha.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/ba.mp3']
    });
    sound.play();
  }

  ma() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag/ma.mp3']
    });
    sound.play();
  }
}
