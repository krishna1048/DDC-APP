import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-aah',
  templateUrl: './aah.page.html',
  styleUrls: ['./aah.page.scss'],
})
export class AahPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  amchukuli() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/amchukuli.wav'], volume: 30
    });
    sound.play();
  }
  om() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/om.wav'], volume: 30
    });
    sound.play();
  }
  omso() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/omso.wav'], volume: 30
    });
    sound.play();
  }
}
