import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtensilsPage } from './utensils.page';

const routes: Routes = [
  {
    path: '',
    component: UtensilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UtensilsPageRoutingModule {}
