import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhaPageRoutingModule } from './pha-routing.module';

import { PhaPage } from './pha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhaPageRoutingModule
  ],
  declarations: [PhaPage]
})
export class PhaPageModule {}
