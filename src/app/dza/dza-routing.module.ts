import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DzaPage } from './dza.page';

const routes: Routes = [
  {
    path: '',
    component: DzaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DzaPageRoutingModule {}
