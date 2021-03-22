import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaTaPage } from './ra-ta.page';

const routes: Routes = [
  {
    path: '',
    component: RaTaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaTaPageRoutingModule {}
