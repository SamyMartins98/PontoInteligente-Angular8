import { Injectable } from '@angular/core';
import { CadastroPj } from '../components/models/cadastrar-pj.model';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastrarPjService {

  private readonly PATH: string = 'cadastro-pj';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPj: CadastroPj): Observable<any>{
    return this.http.post(env.baseApiUrl + this.PATH, cadastroPj)
  }
}
