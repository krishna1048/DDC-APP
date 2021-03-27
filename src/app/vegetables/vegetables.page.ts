import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.page.html',
  styleUrls: ['./vegetables.page.scss'],
})
export class VegetablesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  beans() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/beans.mp3']
    });
    sound.play();
  }

  potato() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/potato.mp3']
    });
    sound.play();
  }

  bitter_gourd() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/bitter_gourd.mp3']
    });
    sound.play();
  }
  brocooli() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/broccoli.mp3']
    });
    sound.play();
  }

  cabbage() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/cabbage.mp3']
    });
    sound.play();
  }
}
