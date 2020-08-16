import { Component } from '@angular/core';

import { NoticiasPage } from '../noticias/noticias';
import { AcademicoPage } from '../academico/academico';
import { HorarioPage } from '../horario/horario';
import { FinanceiroPage } from '../financeiro/financeiro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NoticiasPage;
  tab2Root = AcademicoPage;
  tab3Root = HorarioPage;
  tab4Root = FinanceiroPage;

  constructor() {

  }
}
