import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhaPageRoutingModule } from './dha-routing.module';

import { DhaPage } from './dha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhaPageRoutingModule
  ],
  declarations: [DhaPage]
})
export class DhaPageModule {}
