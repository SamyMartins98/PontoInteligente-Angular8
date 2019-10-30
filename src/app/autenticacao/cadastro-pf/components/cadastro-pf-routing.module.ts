import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPfComponent } from './cadastro-pf.component';
import { CadastrarPfComponent } from './cadastrar-pf/cadastrar-pf.component';

const CadastroPfRoutes: Routes = [
  {
    path: 'cadastro-pf',
    component: CadastroPfComponent,
    children: [
      {
        path: '', component: CadastrarPfComponent
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(CadastroPfRoutes)],
  exports: [RouterModule]
})
export class CadastroPfRoutingModule { }
