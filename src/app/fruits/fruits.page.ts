import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.page.html',
  styleUrls: ['./fruits.page.scss'],
})
export class FruitsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  apple() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/apple.mp3']
    });
    sound.play();
  }
  
  avocado() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/avocado.mp3']
    });
    sound.play();
  }
  cucumber() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/cucumber.mp3']
    });
    sound.play();
  }

  banana() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/banana.mp3']
    });
    sound.play();
  }

  fig() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/fig.mp3']
    });
    sound.play();
  }
  grapes() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/grapes.mp3']
    });
    sound.play();
  }
  guava() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/guava.mp3']
    });
    sound.play();
  }
  gundrum() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/gundrum.mp3']
    });
    sound.play();
  }
  hazelnut() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/hazelnut.mp3']
    });
    sound.play();
  }
  jackfruit() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/jackfruit.mp3']
    });
    sound.play();
  }
  lemon() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/lemon.mp3']
    });
    sound.play();
  }
  litchi() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/litchi.mp3']
    });
    sound.play();
  }

  mango() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/mango.mp3']
    });
    sound.play();
  }
  orange() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/orange.mp3']
    });
    sound.play();
  }

  passion() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/passion_fruit.mp3']
    });
    sound.play();
  }
  peach() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/peach.mp3']
    });
    sound.play();
  }

  pear() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/pear.mp3']
    });
    sound.play();
  }

  persimmon() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/persimmon.mp3']
    });
    sound.play();
  }
  pine_apple() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/pine_apple.mp3']
    });
    sound.play();
  }
  plum() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/plum.mp3']
    });
    sound.play();
  }
  pomegranate() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/pomegranate.mp3']
    });
    sound.play();
  }
  sugar_cane() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/sugar_cane.mp3']
    });
    sound.play();
  }
  watermelon() {
    var sound = new Howl({
      src: ['./assets/fruits/sound/watermelon.mp3']
    });
    sound.play();
  }
}
