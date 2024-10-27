// Importar os tipos necessários do Next.js e o controlador de livros
import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivro } from "../../../classes/controle/ControleLivros";

// a) Definir uma instância exportável de ControleLivro chamada controleLivro
const controleLivro = new ControleLivro();


// b) Definir a assinatura para o tratamento das solicitações
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // c) Implementar o tratamento de requisições para o método GET
        if (req.method === "GET") {
            // Obter a lista de livros e retornar como JSON com status 200
            const livros = await controleLivro.obterLivros();
            res.status(200).json(livros);
        }
        // d) Implementar o tratamento para o método POST
        else if (req.method === "POST") {
            // Capturar os dados do novo livro do corpo da requisição
            const novoLivro = req.body;
            // Incluir o novo livro no vetor de livros
            controleLivro.incluir(novoLivro);
            // Retornar uma mensagem de sucesso com status 200
            res.status(200).json({ mensagem: "Livro incluído com sucesso" });
        }
        // e) Tratar os status 405 para métodos não permitidos
        else {
            // Definir os métodos permitidos e retornar status 405
            res.setHeader("Allow", ["GET", "POST"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        // e) Tratar os erros do servidor com status 500
        res.status(500).json({ error: "Erro no servidor" });
    }
};
