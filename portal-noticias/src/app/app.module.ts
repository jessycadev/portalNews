import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { provideHttpClient } from '@angular/common/http';
import { ProdutoComponent } from './componentes/produto/produto.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ProdutoComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[ 
    provideHttpClient()
  ],
  exports:[HeaderComponent],
  // bootstrap: [AppComponent],
})
export class AppModule { }
