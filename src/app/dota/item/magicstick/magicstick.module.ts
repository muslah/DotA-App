import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicstickPageRoutingModule } from './magicstick-routing.module';

import { MagicstickPage } from './magicstick.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicstickPageRoutingModule
  ],
  declarations: [MagicstickPage]
})
export class MagicstickPageModule {}
