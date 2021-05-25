import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-tsa',
  templateUrl: './tsa.page.html',
  styleUrls: ['./tsa.page.scss'],
})
export class TsaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/tsa.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/tsaycha.wav'], volume: 30
    });
    sound.play();
  }
  
}
