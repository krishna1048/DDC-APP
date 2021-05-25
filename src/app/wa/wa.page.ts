import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-wa',
  templateUrl: './wa.page.html',
  styleUrls: ['./wa.page.scss'],
})
export class WaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  kewa() {
    var sound = new Howl({
      src: ['./assets/Tenselo/trail2/wa.wav'], volume: 30
    });
    sound.play();
  }
 
}
