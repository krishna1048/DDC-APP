import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaahPageRoutingModule } from './yaah-routing.module';

import { YaahPage } from './yaah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaahPageRoutingModule
  ],
  declarations: [YaahPage]
})
export class YaahPageModule {}
