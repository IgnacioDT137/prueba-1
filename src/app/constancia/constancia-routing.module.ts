import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConstanciaPage } from './constancia.page';

const routes: Routes = [
  {
    path: '',
    component: ConstanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConstanciaPageRoutingModule {}
