import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoChenPage } from './go-chen.page';

const routes: Routes = [
  {
    path: '',
    component: GoChenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoChenPageRoutingModule {}
