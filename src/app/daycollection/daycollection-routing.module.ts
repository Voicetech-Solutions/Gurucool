import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DaycollectionPage } from './daycollection.page';

const routes: Routes = [
  {
    path: '',
    component: DaycollectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DaycollectionPageRoutingModule {}
