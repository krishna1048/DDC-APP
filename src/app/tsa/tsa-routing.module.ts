import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TsaPage } from './tsa.page';

const routes: Routes = [
  {
    path: '',
    component: TsaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TsaPageRoutingModule {}
