import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MAnimalsPage } from './m-animals.page';

const routes: Routes = [
  {
    path: '',
    component: MAnimalsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MAnimalsPageRoutingModule {}
