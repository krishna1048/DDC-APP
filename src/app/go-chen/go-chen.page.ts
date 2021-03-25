import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-go-chen',
  templateUrl: './go-chen.page.html',
  styleUrls: ['./go-chen.page.scss'],
})
export class GoChenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  raGo() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/ra_go.mp3']
    });
    sound.play();
  }
  laGo() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/la_go.mp3']
    });
    sound.play();
  }

  saGo() {
    var sound = new Howl({
      src: ['./assets/superscripts/sound/sa_go.mp3']
    });
    sound.play();
  }
}
