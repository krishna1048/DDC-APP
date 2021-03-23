import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnKha() {
    var sound = new Howl({
      src: ['./assets/sounds/kha.mp3']
    });
    sound.play();
  }
  btnKa() {
    var sound = new Howl({
      src: ['./assets/sounds/ka.mp3']
    });
    sound.play();
  }

  btnGa() {
    var sound = new Howl({
      src: ['./assets/sounds/ga.mp3']
    });
    sound.play();
  }

  btnNga() {
    var sound = new Howl({
      src: ['./assets/sounds/nga.mp3']
    });
    sound.play();
  }
}
