import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HonorificPage } from './honorific.page';

const routes: Routes = [
  {
    path: '',
    component: HonorificPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HonorificPageRoutingModule {}
