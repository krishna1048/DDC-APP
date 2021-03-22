import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JangKhaPageRoutingModule } from './jang-kha-routing.module';

import { JangKhaPage } from './jang-kha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JangKhaPageRoutingModule
  ],
  declarations: [JangKhaPage]
})
export class JangKhaPageModule {}
