import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YaPageRoutingModule } from './ya-routing.module';

import { YaPage } from './ya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YaPageRoutingModule
  ],
  declarations: [YaPage]
})
export class YaPageModule {}
