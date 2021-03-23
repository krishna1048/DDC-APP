import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-yang-zhi',
  templateUrl: './yang-zhi.page.html',
  styleUrls: ['./yang-zhi.page.scss'],
})
export class YangZhiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  geKu() {
    var sound = new Howl({
      src: ['./assets/sounds/Geku.mp3']
    });
    sound.play();
  }
  zhabZhu() {
    var sound = new Howl({
      src: ['./assets/sounds/Zhabchu.mp3']
    });
    sound.play();
  }
  drenBo() {
    var sound = new Howl({
      src: ['./assets/sounds/Dengbu.mp3']
    });
    sound.play();
  }
  naro() {
    var sound = new Howl({
      src: ['./assets/sounds/Naro.mp3']
    });
    sound.play();
  }
}
