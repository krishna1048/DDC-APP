import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DzaPageRoutingModule } from './dza-routing.module';

import { DzaPage } from './dza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DzaPageRoutingModule
  ],
  declarations: [DzaPage]
})
export class DzaPageModule {}
