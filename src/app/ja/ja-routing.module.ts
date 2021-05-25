import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JaPage } from './ja.page';

const routes: Routes = [
  {
    path: '',
    component: JaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JaPageRoutingModule {}
