import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArcaneringPageRoutingModule } from './arcanering-routing.module';

import { ArcaneringPage } from './arcanering.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArcaneringPageRoutingModule
  ],
  declarations: [ArcaneringPage]
})
export class ArcaneringPageModule {}
