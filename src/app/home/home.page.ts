import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any[] = [
    {
      username: "fenix",
      pwd: "duoc2022"
    },
    {
      username: "sebaBlanco",
      pwd: "1234"
    }
  ]

  userInput = {
    username: "",
    pwd: ""
  }

  constructor(private router: Router) {}

  principalAlumno(input) {
    let user = this.users.filter(u => u.username === input.username && u.pwd === input.pwd)

    if (user[0]) {

      let extras: NavigationExtras = {
        state: {
          user: user[0]
        }
      }

      this.router.navigate(["/principal-alumno"], extras)

      this.userInput = {
        username: "",
        pwd: ""
      }

    } else {
      console.log("Ingresa credenciales validas")
    }
  }

}
