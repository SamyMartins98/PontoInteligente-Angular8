import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FuncionarioComponent } from './funcionario.component';
import { LancamentoComponent } from './components/lancamento/lancamento.component';
import { ListagemComponent } from './components/listagem/listagem.component';

const FuncionarioRoutes: Routes = [
  {
    path: 'funcionario',
    component: FuncionarioComponent,
    children: [
      {
        path: '', component: LancamentoComponent
      },
      {
        path: 'listagem', component: ListagemComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(FuncionarioRoutes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
