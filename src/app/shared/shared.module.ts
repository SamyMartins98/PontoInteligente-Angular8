import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MascaraDirective } from './directives/mascara.directive';
import { PtBrMatPaginatorIntl } from './pt-br-mat-paginator-intl';
import { DataPipe } from './pipes/data.pipe';
import { TipoPipe } from './pipes/tipo.pipe';

@NgModule({
  declarations: [
    MascaraDirective,
    DataPipe,
    TipoPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MascaraDirective,
    DataPipe,
    TipoPipe
  ],
  providers: [
    PtBrMatPaginatorIntl
  ]
})
export class SharedModule { }
