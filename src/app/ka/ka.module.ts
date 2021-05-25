import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaPageRoutingModule } from './ka-routing.module';

import { KaPage } from './ka.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaPageRoutingModule
  ],
  declarations: [KaPage]
})
export class KaPageModule {}
