import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.page.html',
  styleUrls: ['./vegetables.page.scss'],
})
export class VegetablesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  beans() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/beans.mp3']
    });
    sound.play();
  }

  bitter_gourd() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/bitter_gourd.mp3']
    });
    sound.play();
  }
  brocooli() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/broccoli.mp3']
    });
    sound.play();
  }
  cabbage() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/cabbage.mp3']
    });
    sound.play();
  }
  cane() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/cane.mp3']
    });
    sound.play();
  }

  capsicum() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/capsicum.mp3']
    });
    sound.play();
  }

  potato() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/potato.mp3']
    });
    sound.play();
  }

  carrot() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/carrot.mp3']
    });
    sound.play();
  }
   
  cauliflower() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/cauliflower.mp3']
    });
    sound.play();
  }

  chayote() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/chayote.mp3']
    });
    sound.play();
  }
  chilli() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/chilli.mp3']
    });
    sound.play();
  }
  coriander() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/coriander.mp3']
    });
    sound.play();
  }

  cucumber() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/cucumber.mp3']
    });
    sound.play();
  }

  damru() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/damru.mp3']
    });
    sound.play();
  }

  fern() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/fern.mp3']
    });
    sound.play();
  }
  garlic() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/garlic.mp3']
    });
    sound.play();
  }
  ginger() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/ginger.mp3']
    });
    sound.play();
  }
  lettuce() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/lettuce.mp3']
    });
    sound.play();
  }
  mushroom() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/mushroom.mp3']
    });
    sound.play();
  }
  mustard() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/mustard.mp3']
    });
    sound.play();
  }

  olachoto() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/olachoto.mp3']
    });
    sound.play();
  }
  onion() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/onion.mp3']
    });
    sound.play();
  }
  orchid() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/orchid.mp3']
    });
    sound.play();
  }
  peas() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/peas.mp3']
    });
    sound.play();
  }

  pumkin() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/pumkin.mp3']
    });
    sound.play();
  }

  raddish() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/raddish.mp3']
    });
    sound.play();
  }
  spinach() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/spinach.mp3']
    });
    sound.play();
  }
  tomato() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/tomato.mp3']
    });
    sound.play();
  }
  turnip() {
    var sound = new Howl({
      src: ['./assets/vegetables/sound/turnip.mp3']
    });
    sound.play();
  }

}
