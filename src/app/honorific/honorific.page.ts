import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-honorific',
  templateUrl: './honorific.page.html',
  styleUrls: ['./honorific.page.scss'],
})
export class HonorificPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cloth() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/cloth.mp3']
    });
    sound.play();
  }
  ear() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/ear.mp3']
    });
    sound.play();
  }
  eye() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/eye.mp3']
    });
    sound.play();
  }
  eyebrow() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/eyebrow.mp3']
    });
    sound.play();
  }
  face() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/face.mp3']
    });
    sound.play();
  }
  father() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/father.mp3']
    });
    sound.play();
  }
  finger() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/finger.mp3']
    });
    sound.play();
  }
  food() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/food.mp3']
    });
    sound.play();
  }
  forehead() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/forehead.mp3']
    });
    sound.play();
  }
  hair() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/hair.mp3']
    });
    sound.play();
  }
  hand() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/hand.mp3']
    });
    sound.play();
  }
  head() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/head.mp3']
    });
    sound.play();
  }
  heel() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/heel.mp3']
    });
    sound.play();
  }
  knee() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/knee.mp3']
    });
    sound.play();
  }
  leg() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/leg.mp3']
    });
    sound.play();
  }
  mother() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/mother.mp3']
    });
    sound.play();
  }
  mouth() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/mouth.mp3']
    });
    sound.play();
  }
  nail() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/nail.mp3']
    });
    sound.play();
  }
  nose() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/nose.mp3']
    });
    sound.play();
  }
  palm() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/palm.mp3']
    });
    sound.play();
  }
  relatives() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/relatives.mp3']
    });
    sound.play();
  }
  sit() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/sit.mp3']
    });
    sound.play();
  }
  sleep() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/sleep.mp3']
    });
    sound.play();
  }
  stand() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/stand up.mp3']
    });
    sound.play();
  }
  teeth() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/teeth.mp3']
    });
    sound.play();
  }
  tongue() {
    var sound = new Howl({
      src: ['./assets/honorific/sound/tongue.mp3']
    });
    sound.play();
  }
}
