import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalAlumnoPageRoutingModule } from './principal-alumno-routing.module';

import { PrincipalAlumnoPage } from './principal-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalAlumnoPageRoutingModule
  ],
  declarations: [PrincipalAlumnoPage]
})
export class PrincipalAlumnoPageModule {}
