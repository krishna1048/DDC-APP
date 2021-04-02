import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MAnimalsPageRoutingModule } from './m-animals-routing.module';

import { MAnimalsPage } from './m-animals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MAnimalsPageRoutingModule
  ],
  declarations: [MAnimalsPage]
})
export class MAnimalsPageModule {}
