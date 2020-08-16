import { Component } from '@angular/core';
import { App } from 'ionic-angular';
import { NotasProvider } from '../../providers/notas/notas';
import { DisciplinasProvider } from '../../providers/disciplinas/disciplinas';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-academico',
  templateUrl: 'academico.html',
})
export class AcademicoPage {

  public notas: any[];
  public disciplinas: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController,
    private toast: ToastController, 
    public appCtrl: App,
    public notaService: NotasProvider,
    public disciplinaService: DisciplinasProvider) 
    {}

  ionViewDidLoad() {
    this.notas = [];
    this.disciplinas = [];
    this.getAllNotas();
    this.getAllDisciplinas();
  }

  getAllDisciplinas() {
    this.disciplinaService.getAll()
      .then((result: any) => {
        this.disciplinas = result.json()
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar disciplinas. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  getAllNotas() {
    this.notaService.getAll()
      .then((result: any) => {
        this.notas = result.json();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao listar notas. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  popular(){
    this.notas.forEach(nota => {
      this.disciplinas.forEach(disciplina => {
        if (disciplina.id == nota.idDisciplina){
          this.notas[nota].idDisciplina = disciplina.titulo;
          console.log("entrou nesse troço");
        }
      
      });
    });
  }

}
