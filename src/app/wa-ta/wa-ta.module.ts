import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaTaPageRoutingModule } from './wa-ta-routing.module';

import { WaTaPage } from './wa-ta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaTaPageRoutingModule
  ],
  declarations: [WaTaPage]
})
export class WaTaPageModule {}
