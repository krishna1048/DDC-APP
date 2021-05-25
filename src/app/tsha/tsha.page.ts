import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-tsha',
  templateUrl: './tsha.page.html',
  styleUrls: ['./tsha.page.scss'],
})
export class TshaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/tsha.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/tshaylu.wav'], volume: 30
    });
    sound.play();
  }
  
}
