import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { PagamentosProvider } from '../../providers/pagamentos/pagamentos';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-financeiro',
  templateUrl: 'financeiro.html',
})
export class FinanceiroPage {

  public pagamentos: any[];
  public parcelas: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private toast: ToastController, 
    public appCtrl: App,
    public pagamentoService: PagamentosProvider) {
  }
  ionViewDidLoad() {
    this.pagamentos = [];
    this.getAll();
  }

  alertPago() {
    let alert = this.alertCtrl.create({
      title: 'Pago',
      subTitle: 'Esta mensalidade já esta paga!',
      buttons: ['Ok']
    });
    alert.present();
  }

  alertAtraso() {
    let alert = this.alertCtrl.create({
      title: 'Mensalidade Atrasada',
      subTitle: 'Efetue o pagamento o mais breve possível para evitar transtornos.',
      buttons: ['Ok']
    });
    alert.present();
  }

  alertPendente() {
    let alert = this.alertCtrl.create({
      title: 'Mensalidade Pendente',
      subTitle: 'O prazo de vencimento desta mensalidade ainda não se esgotou.',
      buttons: ['Ok']
    });
    alert.present();
  }

  getAll() {
    this.pagamentoService.getAll()
      .then((result: any) => {
        this.pagamentos = result.json()
        this.parcelas = this.pagamentos[1].parcelas.reverse()
        this.parcelas = this.parcelas.concat(this.pagamentos[0].parcelas.reverse())
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar os pagamentos. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getAvisos() {
    setTimeout(() => {
      this.getAll();
    }, 500);
  }

}

