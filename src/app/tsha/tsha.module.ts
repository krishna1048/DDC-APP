import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TshaPageRoutingModule } from './tsha-routing.module';

import { TshaPage } from './tsha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TshaPageRoutingModule
  ],
  declarations: [TshaPage]
})
export class TshaPageModule {}
