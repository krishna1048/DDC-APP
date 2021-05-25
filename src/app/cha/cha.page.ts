import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.page.html',
  styleUrls: ['./cha.page.scss'],
})
export class ChaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/changkha.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/changzar.wav'], volume: 30
    });
    sound.play();
  }
}
