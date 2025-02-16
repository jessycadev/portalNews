import { Component, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define como é um produto
interface Product {
  id: number;
  name: string;
  price: number;
  }

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{

  title = 'portal-noticias';
  private apiUrl = 'http://localhost:8080/produtos?nome=HD';
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('tsete')
    this.getProdutos('HD');
  }

  getProdutos(nome: String) {
    const url = `${this.apiUrl}`;
    console.log(url);
    this.http.get(url).subscribe({
      next: retorno => {
        console.log(retorno);
      }
    })
  }

}
