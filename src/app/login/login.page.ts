import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    if (this.email == 'lrtf.developer@gmail.com' && this.password == '123456') {
      this.router.navigate(['/home']);

    } else {

      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Falha ao se conectar',
      message: 'Login ou senha incorretos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
