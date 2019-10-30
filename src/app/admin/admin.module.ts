import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent, ConfirmarDialog } from './components/listagem/listagem.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { AtualizacaoComponent } from './components/atualizacao/atualizacao.component';
import { FuncionarioService } from '../shared/services/funcionario.service';
import { AdminComponent } from './components/admin.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatListModule, MatIconModule, MatTooltipModule, MatSnackBarModule, MatTableModule, MatSelectModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatPaginatorModule, MatSortModule, MAT_DATE_LOCALE, MatPaginatorIntl } from '@angular/material';
import { LancamentoService } from '../shared/services/lancamento.service';
import { HttpUtilService } from '../shared/services/http-util.service';
import { PtBrMatPaginatorIntl } from '../shared/pt-br-mat-paginator-intl';
import { AdminGuard } from './services/admin-guard.service';



@NgModule({
  imports:[
  CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule, 
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule,
    MatSnackBarModule,
    MatTableModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule
  ],
  declarations: [
  	ListagemComponent, 
  	CadastroComponent, 
  	AtualizacaoComponent,
    AdminComponent,
    ConfirmarDialog
  ],
  providers: [
    LancamentoService,
    HttpUtilService,
    MatPaginatorIntl,
    FuncionarioService,
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl },
    AdminGuard
  ],
  entryComponents: [ ConfirmarDialog ]
})
export class AdminModule { }
