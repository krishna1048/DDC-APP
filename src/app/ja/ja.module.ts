import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JaPageRoutingModule } from './ja-routing.module';

import { JaPage } from './ja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JaPageRoutingModule
  ],
  declarations: [JaPage]
})
export class JaPageModule {}
