import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DhogChenPageRoutingModule } from './dhog-chen-routing.module';

import { DhogChenPage } from './dhog-chen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DhogChenPageRoutingModule
  ],
  declarations: [DhogChenPage]
})
export class DhogChenPageModule {}
