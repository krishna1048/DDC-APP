import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-zha',
  templateUrl: './zha.page.html',
  styleUrls: ['./zha.page.scss'],
})
export class ZhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/zham.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/zhayla.wav'], volume: 30
    });
    sound.play();
  }
}
