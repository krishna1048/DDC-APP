import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaahPage } from './yaah.page';

const routes: Routes = [
  {
    path: '',
    component: YaahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaahPageRoutingModule {}
