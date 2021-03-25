import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-za-dhuen',
  templateUrl: './za-dhuen.page.html',
  styleUrls: ['./za-dhuen.page.scss'],
})
export class ZaDhuenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  monday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/monday.mp3']
    });
    sound.play();
  }
  tuesday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/tuesday.mp3']
    });
    sound.play();
  }
  wednesday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/wednesday.mp3']
    });
    sound.play();
  }
  thursday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/thursday.mp3']
    });
    sound.play();
  }
  friday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/friday.mp3']
    });
    sound.play();
  }
  saturday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/saturday.mp3']
    });
    sound.play();
  }
  sunday() {
    var sound = new Howl({
      src: ['./assets/week_days/sound/sunday.mp3']
    });
    sound.play();
  }
}
