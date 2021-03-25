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
      src: ['./assets/yang-zhi/Geku.mp3']
    });
    sound.play();
  }
  zhabZhu() {
    var sound = new Howl({
      src: ['./assets/yang-zhi/Zhabchu.mp3']
    });
    sound.play();
  }
  drenBo() {
    var sound = new Howl({
      src: ['./assets/yang-zhi/Dengbu.mp3']
    });
    sound.play();
  }
  naro() {
    var sound = new Howl({
      src: ['./assets/yang-zhi/Naro.mp3']
    });
    sound.play();
  }
}
