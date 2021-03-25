import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-wa-ta',
  templateUrl: './wa-ta.page.html',
  styleUrls: ['./wa-ta.page.scss'],
})
export class WaTaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/ka.mp3']
    });
    sound.play();
  }

  kha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/kha.mp3']
    });
    sound.play();
  }

  ga() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/ga.mp3']
    });
    sound.play();
  }

  nya() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/nya.mp3']
    });
    sound.play();
  }

  da() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/da.mp3']
    });
    sound.play();
  }

  tsa() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/tsa.mp3']
    });
    sound.play();
  }

  tsha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/tsha.mp3']
    });
    sound.play();
  }

  zha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/zha.mp3']
    });
    sound.play();
  }

  za() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/za.mp3']
    });
    sound.play();
  }

  ra() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/ra.mp3']
    });
    sound.play();
  }

  la() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/la.mp3']
    });
    sound.play();
  }

  sha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/sha.mp3']
    });
    sound.play();
  }

  ha() {
    var sound = new Howl({
      src: ['./assets/subscripts/sound/wa_tag/ha.mp3']
    });
    sound.play();
  }
}
