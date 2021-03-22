import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaTaPage } from './ya-ta.page';

const routes: Routes = [
  {
    path: '',
    component: YaTaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaTaPageRoutingModule {}
