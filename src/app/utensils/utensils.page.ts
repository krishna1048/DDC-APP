import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-utensils',
  templateUrl: './utensils.page.html',
  styleUrls: ['./utensils.page.scss'],
})
export class UtensilsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  bowl() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/bowl.mp3']
    });
    sound.play();
  }
  
  chopping_board() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/chopping_board.mp3']
    });
    sound.play();
  }
  container() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/container.mp3']
    });
    sound.play();
  }

  cup() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/cup.mp3']
    });
    sound.play();
  }

  curry_cooker() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/curry_cooker.mp3']
    });
    sound.play();
  }
  flask() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/flask.mp3']
    });
    sound.play();
  }
  fork() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/fork.mp3']
    });
    sound.play();
  }
  knife() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/knife.mp3']
    });
    sound.play();
  }
  laddle() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/laddle.mp3']
    });
    sound.play();
  }
  lid() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/lid.mp3']
    });
    sound.play();
  }
  morter() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/morter.mp3']
    });
    sound.play();
  }
  oven() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/ovan.mp3']
    });
    sound.play();
  }
  plate() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/plate.mp3']
    });
    sound.play();
  }
  pot() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/pot.mp3']
    });
    sound.play();
  }
  pots() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/pots.mp3']
    });
    sound.play();
  }
  rice_cooker() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/rice_cooker.mp3']
    });
    sound.play();
  }
  rolling_pin() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/rolling_pin.mp3']
    });
    sound.play();
  }
  spoon() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/spoon.mp3']
    });
    sound.play();
  }
  table_mat() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/table_mat.mp3']
    });
    sound.play();
  }
  tea_sifter() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/tea_sifter.mp3']
    });
    sound.play();
  }
  tea_whisk() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/tea_whisk.mp3']
    });
    sound.play();
  }
  tongs() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/tongs.mp3']
    });
    sound.play();
  }
  tray() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/tray.mp3']
    });
    sound.play();
  }
  zancha() {
    var sound = new Howl({
      src: ['./assets/utensils/sound/zancha.mp3']
    });
    sound.play();
  }
}
