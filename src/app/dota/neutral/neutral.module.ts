import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NeutralPageRoutingModule } from './neutral-routing.module';

import { NeutralPage } from './neutral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NeutralPageRoutingModule
  ],
  declarations: [NeutralPage]
})
export class NeutralPageModule {}
