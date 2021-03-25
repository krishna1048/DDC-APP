import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoChenPageRoutingModule } from './go-chen-routing.module';

import { GoChenPage } from './go-chen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoChenPageRoutingModule
  ],
  declarations: [GoChenPage]
})
export class GoChenPageModule {}
