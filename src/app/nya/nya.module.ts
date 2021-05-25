import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NyaPageRoutingModule } from './nya-routing.module';

import { NyaPage } from './nya.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NyaPageRoutingModule
  ],
  declarations: [NyaPage]
})
export class NyaPageModule {}
