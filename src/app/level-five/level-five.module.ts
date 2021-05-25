import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelFivePageRoutingModule } from './level-five-routing.module';

import { LevelFivePage } from './level-five.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelFivePageRoutingModule
  ],
  declarations: [LevelFivePage]
})
export class LevelFivePageModule {}
