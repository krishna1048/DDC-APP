import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhoniumPageRoutingModule } from './phonium-routing.module';

import { PhoniumPage } from './phonium.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhoniumPageRoutingModule
  ],
  declarations: [PhoniumPage]
})
export class PhoniumPageModule {}
