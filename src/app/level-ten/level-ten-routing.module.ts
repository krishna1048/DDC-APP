import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelTenPage } from './level-ten.page';

const routes: Routes = [
  {
    path: '',
    component: LevelTenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelTenPageRoutingModule {}
