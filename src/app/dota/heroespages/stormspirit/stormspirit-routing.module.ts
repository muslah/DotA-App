import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StormspiritPage } from './stormspirit.page';

const routes: Routes = [
  {
    path: '',
    component: StormspiritPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StormspiritPageRoutingModule {}
