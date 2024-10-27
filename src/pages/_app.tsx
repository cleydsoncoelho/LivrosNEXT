// Caminho para o arquivo Menu.tsx: D:\Estacio\Nivel 3\livros-react\livros-next\componentes\Menu.tsx
// pages/_app.tsx
import "bootstrap/dist/css/bootstrap.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Menu from "../componentes/Menu"; // Certifique-se de que o caminho para Menu está correto

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <Menu /> {/* O Menu é adicionado aqui, aparecendo em todas as páginas */}
            <div style={{ marginTop: "100px" }}>
                {" "}
                {/* Adiciona um espaço abaixo do menu */}
                <Component {...pageProps} /> {/* Renderiza a página */}
            </div>
        </>
    );
}

export default MyApp;
