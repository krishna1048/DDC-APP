import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelSevenPage } from './level-seven.page';

const routes: Routes = [
  {
    path: '',
    component: LevelSevenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelSevenPageRoutingModule {}
