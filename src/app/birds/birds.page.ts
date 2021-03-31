import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.page.html',
  styleUrls: ['./birds.page.scss'],
})
export class BirdsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blacked_n_crane() {
    var sound = new Howl({
      src: ['./assets/birds/sound/blacked_n_crane.mp3']
    });
    sound.play();
  }
  
  common_maya() {
    var sound = new Howl({
      src: ['./assets/birds/sound/common_maya.mp3']
    });
    sound.play();
  }
  crow() {
    var sound = new Howl({
      src: ['./assets/birds/sound/crow.mp3']
    });
    sound.play();
  }

  cuckoo() {
    var sound = new Howl({
      src: ['./assets/birds/sound/cuckoo.mp3']
    });
    sound.play();
  }

  dove() {
    var sound = new Howl({
      src: ['./assets/birds/sound/dove.mp3']
    });
    sound.play();
  }
  duck() {
    var sound = new Howl({
      src: ['./assets/birds/sound/duck.mp3']
    });
    sound.play();
  }
  eagle() {
    var sound = new Howl({
      src: ['./assets/birds/sound/eagle.mp3']
    });
    sound.play();
  }
  hoopoe() {
    var sound = new Howl({
      src: ['./assets/birds/sound/hoopoe.mp3']
    });
    sound.play();
  }
  kalij() {
    var sound = new Howl({
      src: ['./assets/birds/sound/kalij.mp3']
    });
    sound.play();
  }
  owl() {
    var sound = new Howl({
      src: ['./assets/birds/sound/owl.mp3']
    });
    sound.play();
  }
  peacock() {
    var sound = new Howl({
      src: ['./assets/birds/sound/peacock.mp3']
    });
    sound.play();
  }
  pigeon() {
    var sound = new Howl({
      src: ['./assets/birds/sound/pigeon.mp3']
    });
    sound.play();
  }
  swallow() {
    var sound = new Howl({
      src: ['./assets/birds/sound/swallow.mp3']
    });
    sound.play();
  }
  swan() {
    var sound = new Howl({
      src: ['./assets/birds/sound/swan.mp3']
    });
    sound.play();
  }
  thanka() {
    var sound = new Howl({
      src: ['./assets/birds/sound/thanka.mp3']
    });
    sound.play();
  }
  vulture() {
    var sound = new Howl({
      src: ['./assets/birds/sound/vulture.mp3']
    });
    sound.play();
  }
  water_bird() {
    var sound = new Howl({
      src: ['./assets/birds/sound/water_bird.mp3']
    });
    sound.play();
  }
}
