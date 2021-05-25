import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-ba',
  templateUrl: './ba.page.html',
  styleUrls: ['./ba.page.scss'],
})
export class BaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  jili() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/jili.wav'], volume: 30
    });
    sound.play();
  }
  jaa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/jaa.wav'], volume: 30
    });
    sound.play();
  }
  bongku() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/bongku.wav'], volume: 30
    });
    sound.play();
  }
}
