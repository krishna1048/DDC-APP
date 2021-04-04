import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.page.html',
  styleUrls: ['./drinks.page.scss'],
})
export class DrinksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  alcohol() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/alcohol.mp3']
    });
    sound.play();
  }
  
  curd() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/curd.mp3']
    });
    sound.play();
  }
  juice() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/juice.mp3']
    });
    sound.play();
  }

  milk() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/milk.mp3']
    });
    sound.play();
  }

  poriage() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/poriadge.mp3']
    });
    sound.play();
  }
  tea() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/tea.mp3']
    });
    sound.play();
  }
  water() {
    var sound = new Howl({
      src: ['./assets/drinks/sound/water.mp3']
    });
    sound.play();
  }
}
