import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalDocentePageRoutingModule } from './principal-docente-routing.module';

import { PrincipalDocentePage } from './principal-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalDocentePageRoutingModule
  ],
  declarations: [PrincipalDocentePage]
})
export class PrincipalDocentePageModule {}
