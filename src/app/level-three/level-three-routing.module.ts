import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelThreePage } from './level-three.page';

const routes: Routes = [
  {
    path: '',
    component: LevelThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelThreePageRoutingModule {}
