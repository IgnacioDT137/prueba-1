import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-docente',
  templateUrl: './principal-docente.page.html',
  styleUrls: ['./principal-docente.page.scss'],
})
export class PrincipalDocentePage implements OnInit {

  username: string

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = this.router.getCurrentNavigation().extras.state.user.username
  }

  asignaturas(){
    this.router.navigate(['/asignaturas'])
  }

  cerrarSesion() {
    this.router.navigate(["/home"])
  }
}
