import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarEdadPageRoutingModule } from './verificar-edad-routing.module';

import { VerificarEdadPage } from './verificar-edad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarEdadPageRoutingModule
  ],
  declarations: [VerificarEdadPage]
})
export class VerificarEdadPageModule {}
