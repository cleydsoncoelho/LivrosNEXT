// pages/index.tsx
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Menu from "../componentes/Menu";
import HomeContent from "../componentes/HomeContent"; // Importar o novo componente

const Home: NextPage = () => {
    return (
        <div className='container mt-5'>
            <Head>
                <title>Livraria Estácio</title>
                <meta name='description' content='Bem-vindo à Livraria Estácio, onde você encontra os melhores livros acadêmicos e de interesse geral.' />
            </Head>
            <div style={{ marginTop: "100px" }}>
                {" "}
                {/* Adiciona um espaço abaixo do menu */}
                <HomeContent /> {/* Componente de conteúdo da página inicial */}
            </div>
        </div>
    );
};

export default Home;
