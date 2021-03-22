import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhogChenPage } from './dhog-chen.page';

const routes: Routes = [
  {
    path: '',
    component: DhogChenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhogChenPageRoutingModule {}
