import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarPfComponent } from './components/cadastrar-pf/cadastrar-pf.component';
import { CadastroPfComponent } from './components/cadastro-pf.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatButtonModule, 
  MatListModule, MatTooltipModule, 
  MatIconModule, MatSnackBarModule } 
from '@angular/material';
import { CadastrarPfService } from './services/cadastrar-pf.service';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CadastrarPfComponent,
    CadastroPfComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
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
    CadastrarPfService
  ]
})
export class CadastroPfModule { }
