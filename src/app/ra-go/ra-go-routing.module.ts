import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RaGoPage } from './ra-go.page';

const routes: Routes = [
  {
    path: '',
    component: RaGoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RaGoPageRoutingModule {}
