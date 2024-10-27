// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

// Instanciar a classe ControleEditora
const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            // Recuperar o código da editora a partir da URL e converter para número
            const codEditora = parseInt(req.query.codEditora as string, 10);

            if (isNaN(codEditora)) {
                res.status(400).json({ error: "Código de editora inválido" });
                return;
            }

            // Obter o nome da editora
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            if (nomeEditora) {
                res.status(200).json({ nome: nomeEditora });
            } else {
                res.status(404).json({ error: "Editora não encontrada" });
            }
        } else {
            // Método não permitido
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        // Tratamento de erro
        res.status(500).json({ error: "Erro no servidor" });
    }
};
