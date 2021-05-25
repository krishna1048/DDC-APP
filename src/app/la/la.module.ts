import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaPageRoutingModule } from './la-routing.module';

import { LaPage } from './la.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaPageRoutingModule
  ],
  declarations: [LaPage]
})
export class LaPageModule {}
