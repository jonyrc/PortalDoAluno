import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { portalAPP } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NoticiasPage } from '../pages/noticias/noticias';
import { AcademicoPage } from '../pages/academico/academico';
import { HorarioPage } from '../pages/horario/horario';
import { FinanceiroPage } from '../pages/financeiro/financeiro';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import { AvisosProvider } from '../providers/avisos/avisos';
import { AlunosProvider } from '../providers/alunos/alunos';
import { CursosProvider } from '../providers/cursos/cursos';
import { DisciplinasProvider } from '../providers/disciplinas/disciplinas';
import { EscalasProvider } from '../providers/escalas/escalas';
import { NotasProvider } from '../providers/notas/notas';
import { PagamentosProvider } from '../providers/pagamentos/pagamentos';
import { ProfessorsProvider } from '../providers/professors/professors';

@NgModule({
  declarations: [
    portalAPP,
    LoginPage,
    NoticiasPage,
    AcademicoPage,
    HorarioPage,
    FinanceiroPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(portalAPP),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    portalAPP,
    LoginPage,
    NoticiasPage,
    AcademicoPage,
    HorarioPage,
    FinanceiroPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AvisosProvider,
    AlunosProvider,
    CursosProvider,
    DisciplinasProvider,
    EscalasProvider,
    NotasProvider,
    PagamentosProvider,
    ProfessorsProvider,
    ProfessorsProvider
  ]
})
export class AppModule {}
