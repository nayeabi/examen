import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarEdadPage } from './verificar-edad.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarEdadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarEdadPageRoutingModule {}
