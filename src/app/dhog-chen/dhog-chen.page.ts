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
      src: ['./assets/sounds/la_tag.mp3']
    });
    sound.play();
  }
  raTag() {
    var sound = new Howl({
      src: ['./assets/sounds/ra_tag.mp3']
    });
    sound.play();
  }
}
