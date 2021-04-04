import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.page.html',
  styleUrls: ['./flowers.page.scss'],
})
export class FlowersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blue_poppy() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/blue_poppy.mp3']
    });
    sound.play();
  }
  
  foxglove() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/foxglove.mp3']
    });
    sound.play();
  }
  holeyhock() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/holeyhock.mp3']
    });
    sound.play();
  }

  khadro_meto() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/khadro_meto.mp3']
    });
    sound.play();
  }

  lotus() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/lotus.mp3']
    });
    sound.play();
  }
  merigold() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/merigold.mp3']
    });
    sound.play();
  }
  rhododendron() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/rhododendron.mp3']
    });
    sound.play();
  }
  sun_flower() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/sun_flower.mp3']
    });
    sound.play();
  }
  tshelay_jangma() {
    var sound = new Howl({
      src: ['./assets/flowers/sound/tshelay_jangma.mp3']
    });
    sound.play();
  }
  
}
