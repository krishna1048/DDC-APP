import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-pha',
  templateUrl: './pha.page.html',
  styleUrls: ['./pha.page.scss'],
})
export class PhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/phob.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/phab.wav'], volume: 30
    });
    sound.play();
  }
  kangtri() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/chamla.wav'], volume: 30
    });
    sound.play();
  }
}
