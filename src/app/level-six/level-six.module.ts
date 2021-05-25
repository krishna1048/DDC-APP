import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSixPageRoutingModule } from './level-six-routing.module';

import { LevelSixPage } from './level-six.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSixPageRoutingModule
  ],
  declarations: [LevelSixPage]
})
export class LevelSixPageModule {}
