import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaTaPageRoutingModule } from './ra-ta-routing.module';

import { RaTaPage } from './ra-ta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaTaPageRoutingModule
  ],
  declarations: [RaTaPage]
})
export class RaTaPageModule {}
