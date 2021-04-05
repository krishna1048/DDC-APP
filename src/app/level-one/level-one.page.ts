import { Component, OnInit } from '@angular/core';
import {SoundProviderService} from '../sound-provider.service';
import {Howl, Howler} from 'howler';


@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.page.html',
  styleUrls: ['./level-one.page.scss'],
})
export class LevelOnePage implements OnInit {
  answer: any = {};
  x: any;
  constructor(public myService: SoundProviderService) { }

  ngOnInit() {
  }

  submit() {
    // tslint:disable-next-line:triple-equals
    if (String(this.answer) == 'ཀ'){
      console.log(String(this.answer));
      this.myService.successMusic();

    }

    else{
      console.log('False');
      this.myService.failureMusic();

    }
  }

  ka() {
    var sound = new Howl({
      src: ['./assets/consonants/sound/ka.mp3']
    });
    sound.play();
  }
}
