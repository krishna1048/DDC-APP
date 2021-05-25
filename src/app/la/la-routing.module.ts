import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaPage } from './la.page';

const routes: Routes = [
  {
    path: '',
    component: LaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaPageRoutingModule {}
