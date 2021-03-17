import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YangZhiPageRoutingModule } from './yang-zhi-routing.module';

import { YangZhiPage } from './yang-zhi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YangZhiPageRoutingModule
  ],
  declarations: [YangZhiPage]
})
export class YangZhiPageModule {}
