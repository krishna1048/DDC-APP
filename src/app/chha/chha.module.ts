import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChhaPageRoutingModule } from './chha-routing.module';

import { ChhaPage } from './chha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChhaPageRoutingModule
  ],
  declarations: [ChhaPage]
})
export class ChhaPageModule {}
