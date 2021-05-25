import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgaPage } from './nga.page';

const routes: Routes = [
  {
    path: '',
    component: NgaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NgaPageRoutingModule {}
