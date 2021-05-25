import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-nga',
  templateUrl: './nga.page.html',
  styleUrls: ['./nga.page.scss'],
})
export class NgaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ngala.wav'], volume: 30
    });
    sound.play();
  }
  kasha() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ngaa.wav'], volume: 30
    });
    sound.play();
  }
  kangtri() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/ngangpa.wav'], volume: 30
    });
    sound.play();
  }

}
