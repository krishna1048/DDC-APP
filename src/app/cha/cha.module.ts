import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChaPageRoutingModule } from './cha-routing.module';

import { ChaPage } from './cha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChaPageRoutingModule
  ],
  declarations: [ChaPage]
})
export class ChaPageModule {}
