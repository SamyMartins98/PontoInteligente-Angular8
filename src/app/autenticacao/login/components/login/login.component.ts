import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Login } from '../models/login.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logar() {
    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", { duration: 5000 });
      return;
    }

    const login: Login = this.form.value;
    this.loginService.logar(login)
      .subscribe(
        data => {
          localStorage['token'] = data['data']['token'];
          const usuarioData = JSON.parse(atob(data['data']['token'].split('.')[1]));
          
          if (usuarioData['role'] == 'ROLE_ADMIN') {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['funcionario']);
          }
        },
        err => {
          let msg: string = "Tente novamente em instantes.";

          if (err['status'] == 401)
            msg = "Email/Senha inválido(s)";

          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  }
}
