import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DAnimalsPage } from './d-animals.page';

const routes: Routes = [
  {
    path: '',
    component: DAnimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DAnimalsPageRoutingModule {}
