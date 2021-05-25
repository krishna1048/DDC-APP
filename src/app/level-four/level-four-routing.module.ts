import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelFourPage } from './level-four.page';

const routes: Routes = [
  {
    path: '',
    component: LevelFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelFourPageRoutingModule {}
