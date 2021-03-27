import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-w-animals',
  templateUrl: './w-animals.page.html',
  styleUrls: ['./w-animals.page.scss'],
})
export class WAnimalsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  barking_deer() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/barking_deer.mp3']
    });
    sound.play();
  }
  
  bear() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/bear.mp3']
    });
    sound.play();
  }
  boar() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/boar.mp3']
    });
    sound.play();
  }

  deer() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/deer.mp3']
    });
    sound.play();
  }

  elephant() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/elephant.mp3']
    });
    sound.play();
  }
  fox() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/fox.mp3']
    });
    sound.play();
  }
  ibex() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/ibex.mp3']
    });
    sound.play();
  }
  leopard() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/leopard.mp3']
    });
    sound.play();
  }
  lion() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/lion.mp3']
    });
    sound.play();
  }
  monkey() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/monkey.mp3']
    });
    sound.play();
  }
  musk_deer() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/musk_deer.mp3']
    });
    sound.play();
  }
  rabbit() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/rabbit.mp3']
    });
    sound.play();
  }
  red_panda() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/red_panda.mp3']
    });
    sound.play();
  }
  rhino() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/rhino.mp3']
    });
    sound.play();
  }
  tiger() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/tiger.mp3']
    });
    sound.play();
  }
  wild_dog() {
    var sound = new Howl({
      src: ['./assets/w_animals/sound/wild_dog.mp3']
    });
    sound.play();
  }
}
