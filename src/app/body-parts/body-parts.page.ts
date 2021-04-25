import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-body-parts',
  templateUrl: './body-parts.page.html',
  styleUrls: ['./body-parts.page.scss'],
})
export class BodyPartsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  calf() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/calf.mp3']
    });
    sound.play();
  }
  chest() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/chest.mp3']
    });
    sound.play();
  }
  chin() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/chin.mp3']
    });
    sound.play();
  }
  ear() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/ear.mp3']
    });
    sound.play();
  }
  elbow() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/elbow.mp3']
    });
    sound.play();
  }
  eye() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/eye.mp3']
    });
    sound.play();
  }
  eyelash() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/eyelash.mp3']
    });
    sound.play();
  }
  face() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/face.mp3']
    });
    sound.play();
  }
  finger() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/finger.mp3']
    });
    sound.play();
  }
  forehead() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/forehead.mp3']
    });
    sound.play();
  }
  hair() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/hair.mp3']
    });
    sound.play();
  }
  hand() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/hand.mp3']
    });
    sound.play();
  }
  head() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/head.mp3']
    });
    sound.play();
  }
  heel() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/heel.mp3']
    });
    sound.play();
  }
  knee() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/knee.mp3']
    });
    sound.play();
  }
  leg() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/leg.mp3']
    });
    sound.play();
  }
  mouth() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/mouth.mp3']
    });
    sound.play();
  }
  nail() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/nail.mp3']
    });
    sound.play();
  }
  nape() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/nape.mp3']
    });
    sound.play();
  }
  nose() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/nose.mp3']
    });
    sound.play();
  }
  palm() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/palm.mp3']
    });
    sound.play();
  }
  shin() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/shin.mp3']
    });
    sound.play();
  }
  shoulder() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/shoulder.mp3']
    });
    sound.play();
  }
  stomach() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/stomach.mp3']
    });
    sound.play();
  }
  teeth() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/teeth.mp3']
    });
    sound.play();
  }
  tongue() {
    var sound = new Howl({
      src: ['./assets/body_parts/sound/tongue.mp3']
    });
    sound.play();
  }
}
