import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'principal-alumno',
    loadChildren: () => import('./principal-alumno/principal-alumno.module').then( m => m.PrincipalAlumnoPageModule)
  },
  {
    path: 'asistencias',
    loadChildren: () => import('./asistencias/asistencias.module').then( m => m.AsistenciasPageModule)
  },  {
    path: 'qrscanner',
    loadChildren: () => import('./qrscanner/qrscanner.module').then( m => m.QrscannerPageModule)
  },
  {
    path: 'constancia',
    loadChildren: () => import('./constancia/constancia.module').then( m => m.ConstanciaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
