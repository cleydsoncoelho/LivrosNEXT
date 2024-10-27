// componentes/HomeContent.tsx
import React from "react";
import styles from "../styles/Home.module.css";

const HomeContent: React.FC = () => {
    return (
        <div className={`${styles.main} text-center mt-5`}>
            <h1 className='display-4 mb-4'>Bem-vindo à Livraria Estácio</h1>
            <p className='lead mb-4'>Explore o nosso catálogo de livros acadêmicos e outras obras de interesse. Aproveite para adicionar novos títulos e expandir sua coleção.</p>
            <div className='d-flex justify-content-center'>
                <a href='../LivroLista' className='btn btn-primary me-3'>
                    Ver Catálogo de Livros
                </a>
                <a href='../LivroDados' className='btn btn-secondary'>
                    Adicionar Novo Livro
                </a>
            </div>
        </div>
    );
};

export default HomeContent;
