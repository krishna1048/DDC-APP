import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-nya',
  templateUrl: './nya.page.html',
  styleUrls: ['./nya.page.scss'],
})
export class NyaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ngya.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ngyim.wav'], volume: 30
    });
    sound.play();
  }
  
}
