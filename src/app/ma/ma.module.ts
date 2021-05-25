import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaPageRoutingModule } from './ma-routing.module';

import { MaPage } from './ma.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaPageRoutingModule
  ],
  declarations: [MaPage]
})
export class MaPageModule {}
