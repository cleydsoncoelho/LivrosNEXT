// componentes/LinhaLivro.tsx
import React from "react";
import ControleEditora from "../classes/controle/ControleEditora"; // Importar a classe ControleEditora
import Livro from "../classes/modelo/Livro"; // Importar o tipo Livro

// a) Instanciar o ControleEditora
const controleEditora = new ControleEditora();

// b) Definir a interface LinhaLivroProps
interface LinhaLivroProps {
    livro: Livro; // Atributo livro, do tipo Livro
    excluir: (codigo: number) => void; // Método excluir, que recebe o código do livro
}

// c) Definir o componente LinhaLivro
export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;

    // Obter o nome da editora com base no código
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{livro.ano}</td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul className='list-unstyled'>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
            <td>
                <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>
                    Excluir
                </button>
            </td>
        </tr>
    );
};
