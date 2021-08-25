import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeutralPage } from './neutral.page';

const routes: Routes = [
  {
    path: '',
    component: NeutralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NeutralPageRoutingModule {}
