import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSevenPageRoutingModule } from './level-seven-routing.module';

import { LevelSevenPage } from './level-seven.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSevenPageRoutingModule
  ],
  declarations: [LevelSevenPage]
})
export class LevelSevenPageModule {}
