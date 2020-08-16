import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { EscalasProvider } from '../../providers/escalas/escalas';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {

  public escalas: any[];
  public diaSemana: any[];
  public horarios: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private toast: ToastController, 
    public appCtrl: App,
    public escalaService: EscalasProvider) {
  }

  ionViewDidLoad() {
    this.escalas = [];
    this.getAllEscalas();
  }

  getAllEscalas() {
    this.escalaService.getAll()
      .then((result: any) => {
        this.escalas = result.json()

      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar escala. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }
}
