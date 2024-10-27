// pages/api/editoras/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

// Instanciar a classe ControleEditora
const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === "GET") {
            // Retornar o vetor de editoras no formato JSON
            const editoras = controleEditora.getEditoras();
            res.status(200).json(editoras);
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
