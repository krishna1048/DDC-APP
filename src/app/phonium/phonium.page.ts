import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-phonium',
  templateUrl: './phonium.page.html',
  styleUrls: ['./phonium.page.scss'],
})
export class PhoniumPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kasha.wav'],
      volume:30
    });
    sound.play();
  }

  chair() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kangtri.wav'],
      volume:30
    });
    sound.play();
  }
  potato() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kewa.wav'],
      volume:30
    });
    sound.play();
  }

  lips() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/kha.wav'],
      volume:30
    });
    sound.play();
  }
}
