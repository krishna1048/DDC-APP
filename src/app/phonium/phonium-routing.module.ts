import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhoniumPage } from './phonium.page';

const routes: Routes = [
  {
    path: '',
    component: PhoniumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhoniumPageRoutingModule {}
