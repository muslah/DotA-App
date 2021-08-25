import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicwandPageRoutingModule } from './magicwand-routing.module';

import { MagicwandPage } from './magicwand.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicwandPageRoutingModule
  ],
  declarations: [MagicwandPage]
})
export class MagicwandPageModule {}
