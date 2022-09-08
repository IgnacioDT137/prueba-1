import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AnimationController } from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  users: any[] = [
    {
      username: "fenix",
      pwd: "duoc2022",
      tipo: "alumno"
    },
  ]

  userInput = {
    username: "",
    pwd: ""
  }

  constructor(private router: Router, private alertController: AlertController, private aniCtrl: AnimationController) {}

  errorField() {
      this.aniCtrl.create()
      .addElement(document.querySelectorAll(".campo"))
      .duration(100)
      .iterations(3)
      .fromTo("transform", "translateX(-5px)", "translateX(0px)")
      .fromTo("border", "2px red solid", "1px rgb(104, 98, 98) solid")
      .fromTo("background", "red", "transparent")
      .play()
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
      this.errorField()
    }
  }

  ngOnInit(): void {
    this.aniCtrl.create()
    .addElement(document.querySelector("#logo"))
    .duration(3000)
    .keyframes([
      {offset: 0.01, transform: "scale(1)", opacity: 0},
      {offset:0.25, transform: "scale(1)", opacity:0.25},
      {offset: 0.5, transform: "scale(1)", opacity: 0.5},
      {offset: 0.75, transform: "scale(1)", opacity: 0.75},
      {offset: 1, transform: "scale(1)", opacity: 1}
    ])
    .play()
  }

}
