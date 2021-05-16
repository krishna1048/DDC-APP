import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BodyPartsPageRoutingModule } from './body-parts-routing.module';

import { BodyPartsPage } from './body-parts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BodyPartsPageRoutingModule
  ],
  declarations: [BodyPartsPage]
})
export class BodyPartsPageModule {}
