import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-dza',
  templateUrl: './dza.page.html',
  styleUrls: ['./dza.page.scss'],
})
export class DzaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/dzong.wav'], volume: 30
    });
    sound.play();
  }
  
}
