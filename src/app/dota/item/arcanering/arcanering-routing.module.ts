import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArcaneringPage } from './arcanering.page';

const routes: Routes = [
  {
    path: '',
    component: ArcaneringPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArcaneringPageRoutingModule {}
