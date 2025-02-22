export class Produto {

    id: string
    nome: string;
    descricao: string;
    preco: string;

    constructor(data: Partial<Produto>) {
        this.id =  data.id || '';
        this.nome = data.nome || '';
        this.descricao = data.descricao || '';
        this.preco = data.preco || '';
    }

}
