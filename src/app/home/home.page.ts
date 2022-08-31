import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any[] = [
    {
      username: "fenix",
      pwd: "duoc2022",
      tipo: "alumno"
    },
    {
      username: "sebaBlanco",
      pwd: "1234",
      tipo: "docente"
    }
  ]

  userInput = {
    username: "",
    pwd: ""
  }

  constructor(private router: Router, private alertController: AlertController) {}

  async loginError() {
    const alert = await this.alertController.create({
      header: 'Error al iniciar sesión',
      message: 'Ingrese credenciales válidas',
      buttons: ['Intentar nuevamente'],
    });

    await alert.present();
  }

  principalAlumno(input) {
    let user = this.users.filter(u => u.username === input.username && u.pwd === input.pwd)

    if (user[0]) {

      let extras: NavigationExtras = {
        state: {
          user: user[0]
        }
      }

      if (user[0].tipo === "alumno") {
        this.router.navigate(["/principal-alumno"], extras)
      } else {
        this.router.navigate(["/principal-docente"], extras)
      }

      this.userInput = {
        username: "",
        pwd: ""
      }

    } else {
      this.loginError()
    }
  }

}
