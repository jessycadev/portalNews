import { Component, Injectable } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./componentes/footer/footer.component";
import { AppRoutingModule } from './app-routing.module';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false
})
export class AppComponent {

  constructor() {}
}
