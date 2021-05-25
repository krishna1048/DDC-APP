import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NyaPage } from './nya.page';

const routes: Routes = [
  {
    path: '',
    component: NyaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NyaPageRoutingModule {}
