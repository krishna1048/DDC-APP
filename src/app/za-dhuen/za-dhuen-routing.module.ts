import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZaDhuenPage } from './za-dhuen.page';

const routes: Routes = [
  {
    path: '',
    component: ZaDhuenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZaDhuenPageRoutingModule {}
