import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelFourPageRoutingModule } from './level-four-routing.module';

import { LevelFourPage } from './level-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelFourPageRoutingModule
  ],
  declarations: [LevelFourPage]
})
export class LevelFourPageModule {}
