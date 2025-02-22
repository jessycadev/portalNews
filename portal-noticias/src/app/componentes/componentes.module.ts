import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { ProdutoComponent } from './produto/produto.component';
import { HeaderModule } from '../header/header.module';
import { AppModule } from '../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
  
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ProdutoComponent,
    HeaderModule,
    AppModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentesModule { }
