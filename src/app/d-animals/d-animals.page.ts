import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-d-animals',
  templateUrl: './d-animals.page.html',
  styleUrls: ['./d-animals.page.scss'],
})
export class DAnimalsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cat() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/cat.mp3']
    });
    sound.play();
  }
  
  dog() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/dog.mp3']
    });
    sound.play();
  }
  buffalo() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/buffalo.mp3']
    });
    sound.play();
  }

  cow() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/cow.mp3']
    });
    sound.play();
  }

  goat() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/goat.mp3']
    });
    sound.play();
  }
  hen() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/hen.mp3']
    });
    sound.play();
  }
  horse() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/horse.mp3']
    });
    sound.play();
  }
  ox() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/ox.mp3']
    });
    sound.play();
  }
  pig() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/pig.mp3']
    });
    sound.play();
  }
  rooster() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/rooster.mp3']
    });
    sound.play();
  }
  sheep() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/sheep.mp3']
    });
    sound.play();
  }
  yak() {
    var sound = new Howl({
      src: ['./assets/d_animals/sound/yak.mp3']
    });
    sound.play();
  }

}
