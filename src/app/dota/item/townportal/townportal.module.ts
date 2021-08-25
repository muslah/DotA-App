import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TownportalPageRoutingModule } from './townportal-routing.module';

import { TownportalPage } from './townportal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TownportalPageRoutingModule
  ],
  declarations: [TownportalPage]
})
export class TownportalPageModule {}
