import React, { useState, useEffect } from "react";
import { LinhaLivro } from "../componentes/LinhaLIvro"; // Corrigi o caminho para o componente LinhaLivro
import styles from "../styles/Home.module.css";

const LivroLista: React.FC = () => {
    // Interface para o objeto Livro
    interface Livro {
        codigo: number;
        titulo: string;
        ano: string;
        resumo: string;
        editora: string;
        codEditora: number;
        autores: string[];
    }

    // Estado para os livros e indicador de carregamento
    const [livros, setLivros] = useState<Livro[]>([]);
    const [carregado, setCarregado] = useState(false);

    // Função para obter os livros da API
    useEffect(() => {
        const obterLivros = async () => {
            try {
                const response = await fetch("http://localhost:3000/api/livros");
                const data = await response.json();
                setLivros(data);
                setCarregado(true);
            } catch (error) {
                console.error("Erro ao carregar os livros:", error);
            }
        };
        obterLivros();
    }, [carregado]);

    // Função para excluir um livro
    const excluirLivro = async (codigo: number) => {
        try {
            const response = await fetch(`http://localhost:3000/api/livros/${codigo}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setCarregado(false); // Forçar a atualização da lista
            } else {
                alert("Erro ao excluir o livro");
            }
        } catch (error) {
            console.error("Erro ao excluir o livro:", error);
        }
    };

    return (
        <div className={`${styles.container} container mt-5`}>
            <main className='bg-white p-4 rounded shadow-sm'>
                <h1 className='mb-4'>Catálogo de Livros</h1>
                <div className='table-responsive'>
                    <table className='table table-bordered table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th className='col-1'>Código</th>
                                <th className='col-2'>Título</th>
                                <th className='col-1'>Ano</th>
                                <th className='col-4'>Resumo</th>
                                <th className='col-2'>Editora</th>
                                <th className='col-2'>Autores</th>
                                <th className='col-1'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.length > 0 ? (
                                livros.map((livro) => <LinhaLivro key={livro.codigo} livro={livro} excluir={excluirLivro} />)
                            ) : (
                                <tr>
                                    <td colSpan={6} className='text-center'>
                                        Nenhum livro encontrado.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
};

export default LivroLista;
