import { Injectable } from '@angular/core';
import { Produto } from '../models/produto';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(environment.apiUrl + '/produto/salvarProduto', produto)
  }

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(environment.apiUrl + '/produtos')
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/${id}}`)
  }

}
