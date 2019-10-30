import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CadastroPf } from '../components/models/cadastrar-pf.model';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPfService {

  private readonly PATH: string = 'cadastro-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPf)
  }
}
