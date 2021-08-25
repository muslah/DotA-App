import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicwandPage } from './magicwand.page';

const routes: Routes = [
  {
    path: '',
    component: MagicwandPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicwandPageRoutingModule {}
