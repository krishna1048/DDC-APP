import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-chha',
  templateUrl: './chha.page.html',
  styleUrls: ['./chha.page.scss'],
})
export class ChhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/chab.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/chum.wav'], volume: 30
    });
    sound.play();
  }
  kangtri() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/chu.wav'], volume: 30
    });
    sound.play();
  }
}
