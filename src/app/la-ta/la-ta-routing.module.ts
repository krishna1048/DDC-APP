import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaTaPage } from './la-ta.page';

const routes: Routes = [
  {
    path: '',
    component: LaTaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaTaPageRoutingModule {}
