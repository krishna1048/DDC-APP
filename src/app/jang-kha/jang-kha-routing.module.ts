import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JangKhaPage } from './jang-kha.page';

const routes: Routes = [
  {
    path: '',
    component: JangKhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JangKhaPageRoutingModule {}
