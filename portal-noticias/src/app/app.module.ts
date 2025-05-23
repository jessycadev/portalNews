
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CampanhaComponent } from './componentes/campanha/campanha.component';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { LoginComponent } from './componentes/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CampanhaComponent,
    ProdutoComponent, 
    AppComponent, 
    LoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    CommonModule,
    RouterModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
    
  ],
  providers: [
    provideHttpClient(),
  ],

  bootstrap: [AppComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class AppModule { }
