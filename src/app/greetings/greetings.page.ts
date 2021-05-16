import { Component, OnInit } from '@angular/core';
import {Howl, Howler} from 'howler';

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings.page.html',
  styleUrls: ['./greetings.page.scss'],
})
export class GreetingsPage implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  greeting() {
    var sound = new Howl({
      src: ['./assets/greetings/greeting.mp3']
    });
    sound.play();
  }

  thankyou() {
    var sound = new Howl({
      src: ['./assets/greetings/thankyou.mp3']
    });
    sound.play();
  }

  welcome() {
    var sound = new Howl({
      src: ['./assets/greetings/welcome.mp3']
    });
    sound.play();
  }

  wish() {
    var sound = new Howl({
      src: ['./assets/greetings/wish.mp3']
    });
    sound.play();
  }
}
