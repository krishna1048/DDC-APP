import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DhaPage } from './dha.page';

const routes: Routes = [
  {
    path: '',
    component: DhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DhaPageRoutingModule {}
