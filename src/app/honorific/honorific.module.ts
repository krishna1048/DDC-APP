import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HonorificPageRoutingModule } from './honorific-routing.module';

import { HonorificPage } from './honorific.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HonorificPageRoutingModule
  ],
  declarations: [HonorificPage]
})
export class HonorificPageModule {}
