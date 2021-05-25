import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NgaPageRoutingModule } from './nga-routing.module';

import { NgaPage } from './nga.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgaPageRoutingModule
  ],
  declarations: [NgaPage]
})
export class NgaPageModule {}
