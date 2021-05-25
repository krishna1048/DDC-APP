import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TsaPageRoutingModule } from './tsa-routing.module';

import { TsaPage } from './tsa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TsaPageRoutingModule
  ],
  declarations: [TsaPage]
})
export class TsaPageModule {}
