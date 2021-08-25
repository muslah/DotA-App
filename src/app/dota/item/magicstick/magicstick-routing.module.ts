import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicstickPage } from './magicstick.page';

const routes: Routes = [
  {
    path: '',
    component: MagicstickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicstickPageRoutingModule {}
