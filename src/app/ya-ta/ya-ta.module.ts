import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaTaPageRoutingModule } from './ya-ta-routing.module';

import { YaTaPage } from './ya-ta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaTaPageRoutingModule
  ],
  declarations: [YaTaPage]
})
export class YaTaPageModule {}
