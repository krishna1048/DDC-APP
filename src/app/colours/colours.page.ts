import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-colours',
  templateUrl: './colours.page.html',
  styleUrls: ['./colours.page.scss'],
})
export class ColoursPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  black() {
    var sound = new Howl({
      src: ['./assets/colors/sound/black.mp3']
    });
    sound.play();
  }

  blue() {
    var sound = new Howl({
      src: ['./assets/colors/sound/blue.mp3']
    });
    sound.play();
  }

  brown() {
    var sound = new Howl({
      src: ['./assets/colors/sound/brown.mp3']
    });
    sound.play();
  }

  green() {
    var sound = new Howl({
      src: ['./assets/colors/sound/green.mp3']
    });
    sound.play();
  }

  white() {
    var sound = new Howl({
      src: ['./assets/colors/sound/white.mp3']
    });
    sound.play();
  }

  red() {
    var sound = new Howl({
      src: ['./assets/colors/sound/red.mp3']
    });
    sound.play();
  }

  orange() {
    var sound = new Howl({
      src: ['./assets/colors/sound/orange.mp3']
    });
    sound.play();
  }

  yellow() {
    var sound = new Howl({
      src: ['./assets/colors/sound/yellow.mp3']
    });
    sound.play();
  }
}
