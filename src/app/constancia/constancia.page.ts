import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-constancia',
  templateUrl: './constancia.page.html',
  styleUrls: ['./constancia.page.scss'],
})
export class ConstanciaPage implements OnInit {

  inasistencia: string = ""

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Enviado!',
      duration: 3000,
      color: "success"
    });

    await toast.present();
  }


  enviar() {
    this.inasistencia = ""
    this.presentToast()
  }

}
