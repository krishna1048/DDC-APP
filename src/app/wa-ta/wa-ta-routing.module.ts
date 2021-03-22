import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaTaPage } from './wa-ta.page';

const routes: Routes = [
  {
    path: '',
    component: WaTaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaTaPageRoutingModule {}
