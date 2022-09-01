import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalAlumnoPageRoutingModule } from './principal-alumno-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { PrincipalAlumnoPage } from './principal-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalAlumnoPageRoutingModule,
    MatMenuModule,
    MatIconModule,
  ],
  declarations: [PrincipalAlumnoPage]
})
export class PrincipalAlumnoPageModule {}
