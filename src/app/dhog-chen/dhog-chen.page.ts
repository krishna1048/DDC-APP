import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-dhog-chen',
  templateUrl: './dhog-chen.page.html',
  styleUrls: ['./dhog-chen.page.scss'],
})
export class DhogChenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  laTag() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/la_tag.mp3']
    });
    sound.play();
  }
  raTag() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ra_tag.mp3']
    });
    sound.play();
  }

  waTag() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag.mp3']
    });
    sound.play();
  }

  yaTag() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/ya_tag.mp3']
    });
    sound.play();
  }
}
