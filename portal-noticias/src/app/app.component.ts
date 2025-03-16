import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./footer/footer.component";

@Injectable({
  providedIn: 'root'
})

@Component({
  imports: [HeaderComponent, SidebarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private http: HttpClient) {}
}
