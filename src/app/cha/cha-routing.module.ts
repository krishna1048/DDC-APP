import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaPage } from './cha.page';

const routes: Routes = [
  {
    path: '',
    component: ChaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChaPageRoutingModule {}
