import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TownportalPage } from './townportal.page';

const routes: Routes = [
  {
    path: '',
    component: TownportalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TownportalPageRoutingModule {}
