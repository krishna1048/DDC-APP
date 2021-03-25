import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaGoPageRoutingModule } from './sa-go-routing.module';

import { SaGoPage } from './sa-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaGoPageRoutingModule
  ],
  declarations: [SaGoPage]
})
export class SaGoPageModule {}
