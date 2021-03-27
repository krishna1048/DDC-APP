import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WAnimalsPageRoutingModule } from './w-animals-routing.module';

import { WAnimalsPage } from './w-animals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WAnimalsPageRoutingModule
  ],
  declarations: [WAnimalsPage]
})
export class WAnimalsPageModule {}
