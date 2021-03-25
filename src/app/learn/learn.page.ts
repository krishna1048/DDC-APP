import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.page.html',
  styleUrls: ['./learn.page.scss'],
})
export class LearnPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  btnKha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/kha.mp3']
    });
    sound.play();
  }
  btnKa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ka.mp3']
    });
    sound.play();
  }

  btnGa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ga.mp3']
    });
    sound.play();
  }

  btnNga() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/nga.mp3']
    });
    sound.play();
  }

  btnCa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ca.mp3']
    });
    sound.play();
  }
  btnCha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/cha.mp3']
    });
    sound.play();
  }

  btnJa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ja.mp3']
    });
    sound.play();
  }

  btnNya() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/nya.mp3']
    });
    sound.play();
  }

  btnTa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ta.mp3']
    });
    sound.play();
  }

  btnTha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/tha.mp3']
    });
    sound.play();
  }

  btnDa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/da.mp3']
    });
    sound.play();

  }

  btnNa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/na.mp3']
    });
    sound.play();

  }

  btnPa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/pa.mp3']
    });
    sound.play();
  }

  btnPha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/pha.mp3']
    });
    sound.play();
  }

  btnMa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ma.mp3']
    });
    sound.play();
  }

  btnBa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ba.mp3']
    });
    sound.play();

  }

  btnTsa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/tsa.mp3']
    });
    sound.play();
  }

  btnTsha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/tsha.mp3']
    });
    sound.play();
  }

  btnDza() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/dza.mp3']
    });
    sound.play();
  }

  btnWa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/wa.mp3']
    });
    sound.play();
  }

  btnZha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/zha.mp3']
    });
    sound.play();
  }

  btnZa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/za.mp3']
    });
    sound.play();
  }

  btnA() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/a.mp3']
    });
    sound.play();
  }

  btnYa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ya.mp3']
    });
    sound.play();
  }

  btnRa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ra.mp3']
    });
    sound.play();
  }

  btnLa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/la.mp3']
    });
    sound.play();
  }

  btnSha() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/sha.mp3']
    });
    sound.play();
  }

  btnSa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/sa.mp3']
    });
    sound.play();
  }

  btnHa() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ha.mp3']
    });
    sound.play();
  }

  btnAh() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ah.mp3']
    });
    sound.play();
  }
}

