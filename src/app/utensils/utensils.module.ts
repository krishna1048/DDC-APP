import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtensilsPageRoutingModule } from './utensils-routing.module';

import { UtensilsPage } from './utensils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtensilsPageRoutingModule
  ],
  declarations: [UtensilsPage]
})
export class UtensilsPageModule {}
