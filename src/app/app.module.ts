import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginModule } from './autenticacao/login/login.module';
import { LoginRoutingModule } from './autenticacao/login/login-routing.module';

import { CadastroPjRoutingModule } from './autenticacao/cadastro-pj/components/cadastro-pj-routing.module';
import { CadastroPjModule } from './autenticacao/cadastro-pj/cadastro-pj.module';

import { CadastroPfRoutingModule } from './autenticacao/cadastro-pf/components/cadastro-pf-routing.module';
import { CadastroPfModule } from './autenticacao/cadastro-pf/cadastro-pf.module';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { FuncionarioRoutingModule } from './funcionario/funcionario-routing.module';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,

    LoginModule,
    LoginRoutingModule,

    CadastroPjModule,
    CadastroPjRoutingModule,

    CadastroPfModule,
    CadastroPfRoutingModule,

    FuncionarioModule,
    FuncionarioRoutingModule,

    AdminModule,
    AdminRoutingModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
