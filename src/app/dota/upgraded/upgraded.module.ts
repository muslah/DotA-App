import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpgradedPageRoutingModule } from './upgraded-routing.module';

import { UpgradedPage } from './upgraded.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpgradedPageRoutingModule
  ],
  declarations: [UpgradedPage]
})
export class UpgradedPageModule {}
