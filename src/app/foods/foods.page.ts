import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  biscuits() {
    var sound = new Howl({
      src: ['./assets/foods/sound/biscuits.mp3']
    });
    sound.play();
  }
  
  curry() {
    var sound = new Howl({
      src: ['./assets/foods/sound/curry.mp3']
    });
    sound.play();
  }
  egg() {
    var sound = new Howl({
      src: ['./assets/foods/sound/egg.mp3']
    });
    sound.play();
  }

  kapta() {
    var sound = new Howl({
      src: ['./assets/foods/sound/kapta.mp3']
    });
    sound.play();
  }

  momo() {
    var sound = new Howl({
      src: ['./assets/foods/sound/momo.mp3']
    });
    sound.play();
  }
  paa() {
    var sound = new Howl({
      src: ['./assets/foods/sound/paa.mp3']
    });
    sound.play();
  }
  pickle() {
    var sound = new Howl({
      src: ['./assets/foods/sound/pickle.mp3']
    });
    sound.play();
  }
  rice() {
    var sound = new Howl({
      src: ['./assets/foods/sound/rice.mp3']
    });
    sound.play();
  }
  salad() {
    var sound = new Howl({
      src: ['./assets/foods/sound/salad.mp3']
    });
    sound.play();
  }
  seb() {
    var sound = new Howl({
      src: ['./assets/foods/sound/seb.mp3']
    });
    sound.play();
  }
  sweets() {
    var sound = new Howl({
      src: ['./assets/foods/sound/sweets.mp3']
    });
    sound.play();
  }
  zaw() {
    var sound = new Howl({
      src: ['./assets/foods/sound/zaw.mp3']
    });
    sound.play();
  }
}
