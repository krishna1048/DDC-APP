import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelEightPageRoutingModule } from './level-eight-routing.module';

import { LevelEightPage } from './level-eight.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelEightPageRoutingModule
  ],
  declarations: [LevelEightPage]
})
export class LevelEightPageModule {}
