import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, App, ViewController } from 'ionic-angular';
import { AlunosProvider } from '../../providers/alunos/alunos';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

  public alunos: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private toast: ToastController, 
    public appCtrl: App,
    public alunoService: AlunosProvider) {
  }

  public loading
  public loadingCtrl: LoadingController;

  ionViewDidLoad() {
    this.alunos = [];
  }

  getAll() {
    this.alunoService.getAll()
      .then((result: any) => {
        this.alunos = result.json()
          this.toast.create({ message: 'Bem Vindo '+ this.alunos[0].nome, position: 'botton', duration: 3000 }).present();
          this.login()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao fazer login. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  // getAvisos() {
  //   setTimeout(() => {
  //     this.getAll();
  //   }, 500);
  // }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    this.loading.present();
  }

  login(){
    this.navCtrl.setRoot(TabsPage);
  }

}
