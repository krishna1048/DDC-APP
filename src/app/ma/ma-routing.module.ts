import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaPage } from './ma.page';

const routes: Routes = [
  {
    path: '',
    component: MaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaPageRoutingModule {}
