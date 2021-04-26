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
      src: ['./assets/Tenselo/yangzhi/giku.wav'],
      volume:30
    });
    sound.play();
  }
  zhabZhu() {
    var sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/zhabju.wav'],
      volume:30
    });
    sound.play();
  }
  drenBo() {
    var sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/dambo.wav'],
      volume:30
    });
    sound.play();
  }
  naro() {
    var sound = new Howl({
      src: ['./assets/Tenselo/yangzhi/naro.wav'],
      volume:30
    });
    sound.play();
  }
}
