import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-ja',
  templateUrl: './ja.page.html',
  styleUrls: ['./ja.page.scss'],
})
export class JaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ja.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/jatsa.wav'], volume: 30
    });
    sound.play();
  }
  
}
