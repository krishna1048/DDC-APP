import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-kha',
  templateUrl: './kha.page.html',
  styleUrls: ['./kha.page.scss'],
})
export class KhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kha.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kham.wav'], volume: 30
    });
    sound.play();
  }
  kangtri() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/khab.wav'], volume: 30
    });
    sound.play();
  }

}
