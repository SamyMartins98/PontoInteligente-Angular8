import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule, MatButtonModule, 
        MatListModule, MatTooltipModule, 
        MatIconModule, MatSnackBarModule } 
  from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './components/login/login.component';
import { LogarComponent } from './components/logar.component';
import { LoginService } from './services/login.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule, 
    MatListModule,
    MatTooltipModule, 
    MatIconModule,
    MatSnackBarModule,
    FlexLayoutModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    LogarComponent
  ],
  providers:[
    LoginService
  ]
})
export class LoginModule { }
