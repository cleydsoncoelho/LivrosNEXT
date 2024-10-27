// Importar os tipos necessários do Next.js e o controlador de livros
import { NextApiRequest, NextApiResponse } from "next";
import controleLivro from "../../../classes/controle/ControleLivros";

// g) Definir a assinatura para o tratamento das solicitações
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        // h) Implementar o tratamento de requisições para o método DELETE
        if (req.method === "DELETE") {
            // Capturar o código do livro a partir da URL e converter para número
            const codigo = parseInt(req.query.codigo as string, 10);
            // Verificar se o código é um número válido
            if (isNaN(codigo)) {
                // Retornar erro 400 para código inválido
                res.status(400).json({ error: "Código do livro inválido" });
                return;
            }

            // Excluir o livro com o código fornecido
            controleLivro.excluir(codigo);
            // Retornar uma mensagem de sucesso com status 200
            res.status(200).json({ mensagem: "Livro excluído com sucesso" });
        }
        // j) Tratar os status 405 para métodos não permitidos
        else {
            // Definir o método permitido e retornar status 405
            res.setHeader("Allow", ["DELETE"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        // j) Tratar os erros do servidor com status 500
        res.status(500).json({ error: "Erro no servidor" });
    }
};
