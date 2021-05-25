import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhaPage } from './pha.page';

const routes: Routes = [
  {
    path: '',
    component: PhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhaPageRoutingModule {}
