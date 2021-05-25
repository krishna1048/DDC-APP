import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YaPage } from './ya.page';

const routes: Routes = [
  {
    path: '',
    component: YaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YaPageRoutingModule {}
