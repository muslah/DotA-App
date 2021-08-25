import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbaddonPageRoutingModule } from './abaddon-routing.module';

import { AbaddonPage } from './abaddon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbaddonPageRoutingModule
  ],
  declarations: [AbaddonPage]
})
export class AbaddonPageModule {}
