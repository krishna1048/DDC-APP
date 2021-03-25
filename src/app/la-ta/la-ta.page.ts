import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-la-ta',
  templateUrl: './la-ta.page.html',
  styleUrls: ['./la-ta.page.scss'],
})
export class LaTaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/ka.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/ga.mp3']
    });
    sound.play();
  }

  ba() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/ba.mp3']
    });
    sound.play();
  }

  za() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/za.mp3']
    });
    sound.play();
  }

  ra() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/ra.mp3']
    });
    sound.play();
  }

  sa() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag/sa.mp3']
    });
    sound.play();
  }
}
