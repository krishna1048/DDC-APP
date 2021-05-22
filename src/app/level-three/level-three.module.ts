import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelThreePageRoutingModule } from './level-three-routing.module';

import { LevelThreePage } from './level-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelThreePageRoutingModule
  ],
  declarations: [LevelThreePage]
})
export class LevelThreePageModule {}
