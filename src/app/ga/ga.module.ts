import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaPageRoutingModule } from './ga-routing.module';

import { GaPage } from './ga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaPageRoutingModule
  ],
  declarations: [GaPage]
})
export class GaPageModule {}
