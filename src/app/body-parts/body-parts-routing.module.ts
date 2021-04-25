import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BodyPartsPage } from './body-parts.page';

const routes: Routes = [
  {
    path: '',
    component: BodyPartsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BodyPartsPageRoutingModule {}
