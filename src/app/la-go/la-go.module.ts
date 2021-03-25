import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaGoPageRoutingModule } from './la-go-routing.module';

import { LaGoPage } from './la-go.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaGoPageRoutingModule
  ],
  declarations: [LaGoPage]
})
export class LaGoPageModule {}
