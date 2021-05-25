import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NaPageRoutingModule } from './na-routing.module';

import { NaPage } from './na.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NaPageRoutingModule
  ],
  declarations: [NaPage]
})
export class NaPageModule {}
