import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-pa',
  templateUrl: './pa.page.html',
  styleUrls: ['./pa.page.scss'],
})
export class PaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/par.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/pc.wav'], volume: 30
    });
    sound.play();
  }
  
  
}
