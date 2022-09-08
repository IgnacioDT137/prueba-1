import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConstanciaPageRoutingModule } from './constancia-routing.module';

import { ConstanciaPage } from './constancia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConstanciaPageRoutingModule
  ],
  declarations: [ConstanciaPage]
})
export class ConstanciaPageModule {}
