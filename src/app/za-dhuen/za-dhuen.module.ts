import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZaDhuenPageRoutingModule } from './za-dhuen-routing.module';

import { ZaDhuenPage } from './za-dhuen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZaDhuenPageRoutingModule
  ],
  declarations: [ZaDhuenPage]
})
export class ZaDhuenPageModule {}
