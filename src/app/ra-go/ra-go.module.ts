import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RaGoPageRoutingModule } from './ra-go-routing.module';

import { RaGoPage } from './ra-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RaGoPageRoutingModule
  ],
  declarations: [RaGoPage]
})
export class RaGoPageModule {}
