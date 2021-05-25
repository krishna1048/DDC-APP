import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChhaPage } from './chha.page';

const routes: Routes = [
  {
    path: '',
    component: ChhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChhaPageRoutingModule {}
