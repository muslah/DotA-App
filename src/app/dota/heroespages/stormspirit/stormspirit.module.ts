import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StormspiritPageRoutingModule } from './stormspirit-routing.module';

import { StormspiritPage } from './stormspirit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StormspiritPageRoutingModule
  ],
  declarations: [StormspiritPage]
})
export class StormspiritPageModule {}
