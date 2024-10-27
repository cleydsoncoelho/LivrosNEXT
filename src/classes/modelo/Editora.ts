//No arquivo Editora.ts, criar a classe Editora, com os campos codEditora, numérico, e nome, do tipo texto

export class Editora {
    codEditora: number;
    nome: string;

    constructor(codEditora: number, nome: string) {
        this.codEditora = codEditora;
        this.nome = nome;
    }
}