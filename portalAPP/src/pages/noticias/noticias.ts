import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AvisosProvider } from '../../providers/avisos/avisos';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-noticias',
  templateUrl: 'noticias.html',
})

export class NoticiasPage {

  public avisos: any[];
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private toast: ToastController, 
    public appCtrl: App,
    public avisoService: AvisosProvider) {
  }

  ionViewDidLoad() {
    this.avisos = [];
    this.getAll();

  }

  logout(){
    this.navCtrl.setRoot(LoginPage);
  }

  getAll() {
    this.avisoService.getAll()
      .then((result: any) => {
        this.avisos = result.json()
        this.avisos = this.avisos.reverse()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os avisos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getAvisos() {
    setTimeout(() => {
      this.getAll();
    }, 500);
  }
}
