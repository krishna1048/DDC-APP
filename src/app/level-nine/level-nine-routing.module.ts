import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelNinePage } from './level-nine.page';

const routes: Routes = [
  {
    path: '',
    component: LevelNinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelNinePageRoutingModule {}
