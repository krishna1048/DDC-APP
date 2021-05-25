import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-sha',
  templateUrl: './sha.page.html',
  styleUrls: ['./sha.page.scss'],
})
export class ShaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/shing.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/shogu.wav'], volume: 30
    });
    sound.play();
  }
  kangtri() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/sha.wav'], volume: 30
    });
    sound.play();
  }
}
