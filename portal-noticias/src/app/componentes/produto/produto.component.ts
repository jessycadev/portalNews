import { Component, OnInit } from '@angular/core';
import { Produto } from '../../models/produto';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-produto',
  imports:[FormsModule,ReactiveFormsModule],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent implements OnInit {

  produto: Produto[] = [];
  formularioProduto: FormGroup;

  constructor(private fb: FormBuilder){
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

}
