import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaTaPageRoutingModule } from './la-ta-routing.module';

import { LaTaPage } from './la-ta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaTaPageRoutingModule
  ],
  declarations: [LaTaPage]
})
export class LaTaPageModule {}
