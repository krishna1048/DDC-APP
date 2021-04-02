import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-m-animals',
  templateUrl: './m-animals.page.html',
  styleUrls: ['./m-animals.page.scss'],
})
export class MAnimalsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ant() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/ant.mp3']
    });
    sound.play();
  }
  
  bees() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/bees.mp3']
    });
    sound.play();
  }
  crocodile() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/crocodile.mp3']
    });
    sound.play();
  }

  fish() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/fish.mp3']
    });
    sound.play();
  }

  flea() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/flea.mp3']
    });
    sound.play();
  }
  frog() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/frog.mp3']
    });
    sound.play();
  }
  grasshopper() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/grasshopper.mp3']
    });
    sound.play();
  }
  hippopotamus() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/hippopotamus.mp3']
    });
    sound.play();
  }
  house_fly() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/house_fly.mp3']
    });
    sound.play();
  }
  lizzard() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/lizard.mp3']
    });
    sound.play();
  }
  otter() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/otter.mp3']
    });
    sound.play();
  }
  rat() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/rat.mp3']
    });
    sound.play();
  }
  snake() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/snake.mp3']
    });
    sound.play();
  }
  squirrel() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/squirrel.mp3']
    });
    sound.play();
  }
  turtle() {
    var sound = new Howl({
      src: ['./assets/m_animals/sound/turtle.mp3']
    });
    sound.play();
  }
  
}
