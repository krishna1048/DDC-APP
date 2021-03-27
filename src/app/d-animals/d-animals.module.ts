import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DAnimalsPageRoutingModule } from './d-animals-routing.module';

import { DAnimalsPage } from './d-animals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DAnimalsPageRoutingModule
  ],
  declarations: [DAnimalsPage]
})
export class DAnimalsPageModule {}
