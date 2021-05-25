import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelTenPageRoutingModule } from './level-ten-routing.module';

import { LevelTenPage } from './level-ten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelTenPageRoutingModule
  ],
  declarations: [LevelTenPage]
})
export class LevelTenPageModule {}
