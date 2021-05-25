import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AahPage } from './aah.page';

const routes: Routes = [
  {
    path: '',
    component: AahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AahPageRoutingModule {}
