import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShaPage } from './sha.page';

const routes: Routes = [
  {
    path: '',
    component: ShaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShaPageRoutingModule {}
