import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShaPageRoutingModule } from './sha-routing.module';

import { ShaPage } from './sha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShaPageRoutingModule
  ],
  declarations: [ShaPage]
})
export class ShaPageModule {}
