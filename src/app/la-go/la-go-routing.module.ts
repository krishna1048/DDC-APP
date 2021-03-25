import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaGoPage } from './la-go.page';

const routes: Routes = [
  {
    path: '',
    component: LaGoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaGoPageRoutingModule {}
