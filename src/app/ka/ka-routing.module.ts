import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaPage } from './ka.page';

const routes: Routes = [
  {
    path: '',
    component: KaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaPageRoutingModule {}
