import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TshaPage } from './tsha.page';

const routes: Routes = [
  {
    path: '',
    component: TshaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TshaPageRoutingModule {}
