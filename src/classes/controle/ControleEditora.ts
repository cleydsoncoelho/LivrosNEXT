// Importar a classe Editora
import { Editora } from "../modelo/Editora";

// Definir a variável editoras, como Array<Editora>, contendo ao menos três elementos, no formato JSON
const editoras: Array<Editora> = [
    { codEditora: 1, nome: "Companhia das Letras" },
    { codEditora: 2, nome: "Boitempo Editorial" },
    { codEditora: 3, nome: "Editora Martin Claret" },
    { codEditora: 4, nome: "Leya" },
    { codEditora: 5, nome: "Civilização Brasileira" },
    { codEditora: 6, nome: "Edições Loyola" },
    { codEditora: 7, nome: "Editora Vozes" },
    { codEditora: 8, nome: "Paz e Terra" },
    { codEditora: 9, nome: "Graal" },
    { codEditora: 10, nome: "Editora Gallimard" },
    { codEditora: 11, nome: "Paz e Terra" },
    { codEditora: 12, nome: "Paz e Terra" },
    { codEditora: 13, nome: "Editora Abril" },
    { codEditora: 14, nome: "Editora 34" },
    { codEditora: 15, nome: "Editora Nova Fronteira" },
];

// Criar a classe ControleEditora, contendo os métodos getNomeEditora e getEditoras
class ControleEditora {
    // Implementar o método getNomeEditora, recebendo codEditora
    getNomeEditora(codEditora: number): string | undefined {
        const filteredEditoras = editoras.filter((editora) => editora.codEditora === codEditora);
        return filteredEditoras.length > 0 ? filteredEditoras[0].nome : undefined;
    }

    // Implementar o método getEditoras, com o retorno do vetor editoras
    getEditoras(): Array<Editora> {
        return editoras;
    }
}

// Exportar a classe ControleEditora
export default ControleEditora;
