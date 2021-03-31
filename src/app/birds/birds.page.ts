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
      src: ['./assets/w_animals/sound/barking_deer.mp3']
    });
    sound.play();
  }
  
  common_maya() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/bear.mp3']
    });
    sound.play();
  }
  crow() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/boar.mp3']
    });
    sound.play();
  }

  cuckoo() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/deer.mp3']
    });
    sound.play();
  }

  dove() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/elephant.mp3']
    });
    sound.play();
  }
  duck() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/fox.mp3']
    });
    sound.play();
  }
  eagle() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/ibex.mp3']
    });
    sound.play();
  }
  hoopoe() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/leopard.mp3']
    });
    sound.play();
  }
  kalij() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/lion.mp3']
    });
    sound.play();
  }
  owl() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/monkey.mp3']
    });
    sound.play();
  }
  peacock() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/musk_deer.mp3']
    });
    sound.play();
  }
  pigeon() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/rabbit.mp3']
    });
    sound.play();
  }
  swallow() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/red_panda.mp3']
    });
    sound.play();
  }
  swan() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/rhino.mp3']
    });
    sound.play();
  }
  thanka() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/tiger.mp3']
    });
    sound.play();
  }
  vulture() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/wild_dog.mp3']
    });
    sound.play();
  }
  water_bird() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/wild_dog.mp3']
    });
    sound.play();
  }
}
