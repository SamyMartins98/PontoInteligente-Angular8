import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { CadastroPf } from '../models/cadastrar-pf.model';
import { CadastrarPfService } from '../../services/cadastrar-pf.service';
import { CpfValidator } from 'src/app/shared/validators/cpf.validator';
@Component({
  selector: 'app-cadastrar-pf',
  templateUrl: './cadastrar-pf.component.html',
  styleUrls: ['./cadastrar-pf.component.css']
})
export class CadastrarPfComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
    private cadastrarPfService: CadastrarPfService) { }

  ngOnInit() {
    this.gerarForm();
  }

  gerarForm() {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cpf: ['', [Validators.required, CpfValidator]],
      cnpj: ['', [Validators.required]]
    });
  }

  cadastrarPf(){

    if (this.form.invalid) {
      this.snackBar.open(
        "Dados inválidos", "Erro", { duration: 5000 });
      return;
    }

    const cadastroPf: CadastroPf = this.form.value;
    this.cadastrarPfService.cadastrar(cadastroPf)
      .subscribe(
        data => {
          const msg: string = "Realize o login para acessar o sistema.";
          this.snackBar.open(msg, "Sucesso", { duration: 5000 });
          this.router.navigate(['/login']);
        },
        err => {
          let msg: string = "Tente novamente em instantes.";
          if (err.status == 400) {
            msg = err.error.errors.join(' ');
          }
          this.snackBar.open(msg, "Erro", { duration: 5000 });
        }
      );
  	return false;

  }

}
