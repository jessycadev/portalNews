import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { ProdutoComponent } from "./componentes/produto/produto.component";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ProdutoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient) {}

  // ngOnInit(): void {
  //   console.log('tsete')
  //   console.log(environment.apiUrl);
  //   this.http.get(environment.apiUrl+'/produtos?nome=HD').subscribe({
  //     next: retorno => {
  //       console.log(retorno);
  //     }
  //   })
  // }
}
