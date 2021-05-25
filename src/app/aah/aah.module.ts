import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AahPageRoutingModule } from './aah-routing.module';

import { AahPage } from './aah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AahPageRoutingModule
  ],
  declarations: [AahPage]
})
export class AahPageModule {}
