import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPjComponent } from './components/cadastrar-pj/cadastrar-pj.component';
import { CadastroPjComponent } from './components/cadastro-pj.component';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatButtonModule, 
  MatListModule, MatTooltipModule, 
  MatIconModule, MatSnackBarModule } 
from '@angular/material';
import { CadastrarPjService } from './services/cadastrar-pj.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CadastrarPjComponent,
    CadastroPjComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule, 
    MatListModule,
    MatTooltipModule, 
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [
    CadastrarPjService
  ]
})
export class CadastroPjModule { }
