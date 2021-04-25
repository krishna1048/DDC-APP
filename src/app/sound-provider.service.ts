import { Injectable } from '@angular/core';
import {Howl, Howler} from 'howler';

@Injectable({
  providedIn: 'root'
})
export class SoundProviderService {

  constructor() { }

  successMusic(){
    var sound = new Howl({
      src: ['./assets/success.wav']
    });
    sound.play();
  }
  failureMusic(){
    var sound = new Howl({
      src: ['./assets/wrong.wav']
    });
    sound.play();
  }
}
