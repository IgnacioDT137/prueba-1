import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-alumno',
  templateUrl: './principal-alumno.page.html',
  styleUrls: ['./principal-alumno.page.scss'],
})
export class PrincipalAlumnoPage implements OnInit {

  username: string

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = this.router.getCurrentNavigation().extras.state.user.username
  }

  asistencias(){
  this.router.navigate(['/asistencias'])
  }

  cerrarSesion() {
    this.router.navigate(["/home"])
  }

  qrScanner() {
    this.router.navigate(['/qrscanner'])
  }
}
export class MenuOverviewExample {}
export class IconOverviewExample {}
