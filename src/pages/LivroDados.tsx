// pages/LivroDados.tsx
import React, { useState } from "react";
import { useRouter } from "next/router";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";
import styles from "../styles/Home.module.css";

const controleEditora = new ControleEditora();
const baseURL = "http://localhost:3000/api/livros";

// Função assíncrona para incluir o livro via API
const incluirLivro = async (livro: Livro) => {
    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
    });
    return response.ok; // Retorna se a operação foi bem-sucedida
};

const LivroDados: React.FC = () => {
    // Opções para o campo de seleção de editoras
    const opcoes = controleEditora.getEditoras().map((editora) => ({
        value: editora.codEditora,
        text: editora.nome,
    }));

    // Estados para os campos do formulário
    const [titulo, setTitulo] = useState("");
    const [ano, setAno] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0]?.value || 0);
    const router = useRouter();

    // Função para tratar a mudança no campo de seleção de editoras
    const tratarCombo = (evento: React.ChangeEvent<HTMLSelectElement>) => {
        setCodEditora(Number(evento.target.value));
    };

    // Função para tratar a inclusão do livro
    const incluir = async (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault(); // Evita o comportamento padrão de recarregar a página
        const novoLivro = new Livro(0, codEditora, titulo, ano, resumo, autores.split("\n")); // Cria um novo objeto Livro
        const sucesso = await incluirLivro(novoLivro); // Tenta incluir o livro via API
        if (sucesso) {
            router.push("/LivroLista"); // Redireciona para a página de lista de livros
        } else {
            alert("Erro ao incluir o livro"); // Exibe uma mensagem de erro
        }
    };

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center mt-5`}>
            <div className='col-md-6'>
                <h1 className='text-center mb-4'>Incluir Novo Livro</h1>
                <form onSubmit={incluir} className='shadow p-4 rounded bg-light'>
                    <div className='mb-3'>
                        <label htmlFor='titulo' className='form-label'>
                            Título
                        </label>
                        <input type='text' className='form-control' id='titulo' value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>
                    <div className='col-1 mb-3'>
                        <label htmlFor='ano' className='form-label'>
                            Ano
                        </label>
                        <input type='number' className='form-control' id='ano' value={ano} onChange={(e) => setAno(e.target.value)} required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='resumo' className='form-label'>
                            Resumo
                        </label>
                        <textarea className='form-control' id='resumo' value={resumo} onChange={(e) => setResumo(e.target.value)} required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='autores' className='form-label'>
                            Autores (um por linha)
                        </label>
                        <textarea className='form-control' id='autores' value={autores} onChange={(e) => setAutores(e.target.value)} required />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='editora' className='form-label'>
                            Editora
                        </label>
                        <select className='form-select' id='editora' value={codEditora} onChange={tratarCombo} required>
                            {opcoes.map((opcao) => (
                                <option key={opcao.value} value={opcao.value}>
                                    {opcao.text}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary btn-sm'>
                        Salvar Dados
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LivroDados;
