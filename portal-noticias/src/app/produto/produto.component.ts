import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-produto',
  imports:[AppModule, FormsModule, ReactiveFormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  formularioProduto: FormGroup;
  produto!: Produto;

  constructor(private fb: FormBuilder, private produtoService: ProdutoService){
    this.formularioProduto = this.fb.group({
      nome: ['', Validators.required],
      descricao: ['', Validators.required],
      preco:['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  postarFormulario(){
    console.log(this.formularioProduto);
  }

  salvarProduto(): void {
    if(this.formularioProduto.valid) {
      this.produto = this.formularioProduto.getRawValue();
      this.produtoService.salvar(this.produto).subscribe(() => {
      });
    }
  }

}
