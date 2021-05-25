import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-yaah',
  templateUrl: './yaah.page.html',
  styleUrls: ['./yaah.page.scss'],
})
export class YaahPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/hadom.wav'], volume: 30
    });
    sound.play();
  }


}
