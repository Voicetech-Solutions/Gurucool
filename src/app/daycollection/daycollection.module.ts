import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DaycollectionPageRoutingModule } from './daycollection-routing.module';

import { DaycollectionPage } from './daycollection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DaycollectionPageRoutingModule
  ],
  declarations: [DaycollectionPage]
})
export class DaycollectionPageModule {}
