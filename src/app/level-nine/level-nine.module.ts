import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelNinePageRoutingModule } from './level-nine-routing.module';

import { LevelNinePage } from './level-nine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelNinePageRoutingModule
  ],
  declarations: [LevelNinePage]
})
export class LevelNinePageModule {}
