import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaGoPage } from './sa-go.page';

const routes: Routes = [
  {
    path: '',
    component: SaGoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaGoPageRoutingModule {}
