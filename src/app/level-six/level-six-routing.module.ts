import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelSixPage } from './level-six.page';

const routes: Routes = [
  {
    path: '',
    component: LevelSixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelSixPageRoutingModule {}
